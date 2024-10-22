/** 
-----------Ejercicio Response y Request Parte 1-----------
Este ejercicio está enfocado en analizar el tipo de contenido de respuesta
*/

const http = require('http');

// REQUIRE = Todo lo que el usuario solicita
// RESPONSE = Todo lo que el usuario responde
http.createServer((req, res) => {

    console.log(req);
    /* 
    Para analizar todo lo que es el REQUEST si se examina la consola integrada 
    se recibe mucha información pero nos podemos enfocar en lo siguiente por ejemplo:
    “rawHeaders”: Tiene información de lugar de donde se está haciendo la petición 
    “connection”: “keep-alive” es porque se mantiene la conexión abierta
    esto nos mantiene la comunicación abierta hasta que nuestro backend envíe una respuesta.
    Otra opción que podríamos enfocarnos es en la información que se encuentra dentro 
    de la petición GET, saber el tipo de petición es muy importante y se tratarán 
    más adelante.

    Analizar en el navegador esta dirección URL http://127.0.0.1:8080/hola-mundo
    */

    res.writeHead(200, { 'Content-Type': 'application/json' });

    /* 
    En esta parte estoy enviando una respuesta 200, que significa que todo está bien 
    se puede enviar una respuesta 404 para una petición fallida
    res.writeHead(404)
    res.end(‘404 | Page not found’);
    */

    // res.end();
    // Recargar la página y visitar las herramientas de desarrollador, ir a Network y 
    // evaluar los Headers
    const persona = {
        id: 1,
        nombre: 'Miguel'
    }
    
    res.write(JSON.stringify(persona));
    /*
    * Se envía un objeto tipo JSON porque sin formato da error
    * A esto se le llama serializar el objeto con un formato tipo JSON
    * Para poder visualizar de mejor forma en el navegador se puede instalar 
    //   la extensión de Chrome buscar "JSON Viewer Pro"
    */
    
    res.end();
            
    }).listen(8080)
    
    console.log('Escuchando el puerto: ', 8080);
    
    /*
    * Para este ejercicio instalar POSTMAN y pegar la url o también puede utilizar 
    Thunder Client en Visual Studio Code para hacer sus pruebas
    * Ir en su herramienta de pruebas de rutas ir agregar en headers lo siguiente:
    en la key: hola     value: mundo
    y examinar la impresión del response en consola. Estos envíos son importantes 
    porque podemos enviar por ejemplo tokens y el backend los recibe y luego 
    los puede procesar.
    */
    
