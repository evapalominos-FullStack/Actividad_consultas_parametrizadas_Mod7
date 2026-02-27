// server.js
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Permite que el frontend se comunique con el backend

const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// Configuración de conexión (ajusta según tus credenciales)
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_Mod7',
    password: '2087localc',
    port: 5432,
});

// GET: Obtener todos los clientes
app.get('/clientes', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT * FROM clientes ORDER BY nombre ASC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener clientes' });
    }
});


// POST: Crear cliente
app.post('/clientes', async (req, res) => {
    const { rut, nombre, edad, email } = req.body; // Agregamos email

    try {
        // Añadimos email al INSERT
        const query = 'INSERT INTO clientes (rut, nombre, edad, email) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [rut, nombre, edad, email || 'sin@email.com']; // Valor por defecto si viene vacío
        const result = await pool.query(query, values);
        res.status(201).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: 'Error interno: ' + err.message });
    }
});


// PUT: Modificar solo nombre
app.put('/clientes/:rut', async (req, res) => {
    const { rut } = req.params;
    const { nombre } = req.body;

    try {
        const query = 'UPDATE clientes SET nombre = $1 WHERE rut = $2 RETURNING *';
        const result = await pool.query(query, [nombre, rut]);
        
        if (result.rowCount === 0) return res.status(404).json({ error: 'RUT no encontrado' });
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar' });
    }
});

// DELETE: Eliminar cliente
app.delete('/clientes/:rut', async (req, res) => {
    const { rut } = req.params;
    try {
        const result = await pool.query('DELETE FROM clientes WHERE rut = $1', [rut]);
        if (result.rowCount === 0) return res.status(404).json({ error: 'RUT no encontrado' });
        res.json({ message: 'Cliente eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar' });
    }
});

app.listen(3000, () => console.log('Servidor en puerto 3000'));
