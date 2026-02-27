🚀 Actividad- Consultas parametrizadas.

Tecnología usada Node + pg + cors + express + pgAdmin4

Objetivo:
Implementar un servidor web en Node.js que acceda a una tabla clientes usando consultas parametrizadas con pg (PostgreSQL). 
Se ejercitan operaciones CRUD, validaciones de entrada y exposición de endpoints REST, se respaldan con capturas. 
Además, se desarrolla un frontend (index.html) que consuma los servicios para crear, consultar, modificar y eliminar registros.

Descripción de la actividad
PARTE 1 — Backend (Node + pg)
Se utiliza una tabla clientes con campos rut, nombre, edad, mail. El servidor debe exponer:
GET /clientes → retorna todos los registros.
POST /clientes → crea un registro. Requiere rut, nombre, edad. Validar:
llave duplicada (conflicto)
edad numérica
DELETE /clientes/:rut → elimina por rut.
PUT /clientes/:rut → permite modificar únicamente nombre.

PARTE 2 — Frontend
Se creea un cliente web con formularios separados para: crear, modificar, consultar y eliminar clientes. 
Debe consumir los endpoints de la PARTE 1 y mostrar resultados ordenados.

Forma de entrega
Backend (código Node (server.js) y uso de pg).
Frontend básico y sencillo (HTML/JS) con los cuatro formularios.

======================================================================

DESARROLLO DE APLICACIONES FULL STACK JAVASCRIPT TRAINEE V2.0

   ASTRID EVA PALOMINOS ESPINOZA
