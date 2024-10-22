// --------Ejercicio - Introducción a EXPRESS Parte 1--------
/* 
EXPRESS es el framework web más popular en Node, y es la librería subyacente 
para un gran número de otros frameworks web de Node populares. Proporciona 
mecanismos para la Escritura de manejadores de peticiones con diferentes verbos 
HTTP en diferentes URL (Rutas), se integran con motores que poseen renderización de 
"vistas" para generar respuestas mediante la introducción de plantillas, establece 
ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de 
las plantillas que se utilizan para renderizar la respuesta y añade procesamiento 
"middleware" adicional en cualquier punto dentro de la tubería de manejo de petición.
A pesar de que express en sí es bastante minimalista, los desarrolladores web 
han creado paquetes de middleware compatibles con cookies, sesiones, inicios de 
sesión de usuarios, parámetros URL, datos POST, cabeceras de seguridad y mucho más.

Para instalar en este proyecto EXPRESS se utiliza el siguiente comando:
npm i express

Para más información visitar https://www.npmjs.com/package/express
*/

const express = require('express'); // Requerimos el paquete EXPRESS
const app = express();

app.get('/', function (req, res) {9
    res.send('Hola mundo')
});

/**
* Este servidor protege de las rutas no válidas, mientras que en HTTP hay que 
* programar qué hacer cuando un usuario entre a una ruta no válida por ejemplo 
* http://localhost:8080/holamundo
*
* Automáticamente el servidor nos ha respondido "Cannot GET /hola-mundo"
* 
* Mientras que si utilizamos http://localhost:8080
* 
* Nos saldrá el mensaje del servidor "Hola mundo"
*/

app.listen(8080);
