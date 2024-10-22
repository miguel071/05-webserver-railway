/** 
-----------Ejercicio Response y Request Parte 2-----------
* Este ejercicio está enfocado en analizar el tipo de contenido de respuesta
*/

const http = require('http');

// Enviando un archivo CSV, esto es una sola ruta.
http.createServer((req, res) => {

/**
* setHeader
* Se está attachando o enviando un archivo .csv, esto lo debemos de realizar
* para que se descarguen un archivo con un formato específico
*/

res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
/**
* writeHead, se está diciendo en qué formato se enviará el archivo,
* pero sin embargo es necesario agregar el setHeader
*/

res.writeHead(200, { 'Content-Type': 'application/csv' });

res.write('id, nombre\n');
res.write('1, Andres\n');
res.write('2, Daniel\n');
res.write('3, Anderson\n');
res.write('4, Roxana\n');
res.end();

}).listen(8080);

console.log('Escuchando el puerto', 8080);

/**
* node app3.js
* Cuando se ejecute este archivo se debe de visitar el navegador en la dirección 
* localhost:8080 y automáticamente descargará un archivo con formato .csv con el 
* listado de personas descritas con el res.write()
*
* En conclusión el trabajo del request y response desde el paquete interno HTTP 
* es mucho trabajo todo lo que se ha realizado hasta el momento es para validar una 
* ruta, pero para eso existe el Framework EXPRESS que facilita todo este trabajo.
*/