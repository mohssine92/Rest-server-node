const express = require('express')
var cors = require('cors')




// Tratar servidor como objeto 
// Express basado en classes
class server {


  //es inecesario declarar la props , basta declaralos en el constructor
   constructor(){
     this.app = express();   
     this.port = process.env.PORT;

     // declarar rutas aqui sera facil ver todas rutas que dispone ApiRest
     // cada ruta dispone de endpoints propios , la suma de todos seria los endPoints de RestApi .
     this.userPath = '/api/users';   

    // Middelwares : son nada mas fuciones que van a añadir otras funcionalida a mi WebServer  
     this.middlewares();

    // Rutas de mi aplicacion 
     this.rourtes();

   }

   middlewares(){
     // Cors: restringir originis app que pueden req a esta apiRest
     this.app.use( cors() );

    // Lectura y parseo del body disparado por Origen o navigador o postman  hacia cierto endpoint  
    this.app.use( express.json() );   
  

    // relacionado a ruta /publica 101.
    // servido en root path
    this.app.use(express.static('public'));


   } 

   rourtes() { 
    // middelware : (path , archivo de endpoint a reaccionar depende de metodo http relacionado al path)
    this.app.use( this.userPath , require('../routes/users'));

   
   }

   listen() {

     this.app.listen(this.port, () => {
        console.log(`Example app listening at http://localhost:${this.port}`)
     })

   }
}



module.exports = server;