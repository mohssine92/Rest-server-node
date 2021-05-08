const express = require('express')




// Tratar servidor como objeto 
// Express basado en classes
class server {


  //es inecesario declarar la props , basta declaralos en el constructor
   constructor(){
     this.app = express();   
     this.port = process.env.PORT;


    // Middelwares : son nada mas fuciones que van a añadir otras funcionalida a mis WebServer  
     this.middlewares();

    // Rutas de mi aplicacion 
     this.rourtes();

   }

   middlewares(){

    // relacionado a ruta publica 101.
    // servido en root path
    this.app.use(express.static('public'));


   } 

   rourtes() {
      // my EndPoints

      this.app.get('/api', (req, res) => {
        res.send('Hello World!')
      }) 

      // TODO : vamos a crear nuestros 4 Rest End-points
   }

   listen() {

     this.app.listen(this.port, () => {
        console.log(`Example app listening at http://localhost:${this.port}`)
     })

   }
}



module.exports = server;