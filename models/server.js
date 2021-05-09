const express = require('express')




// Tratar servidor como objeto 
// Express basado en classes
class server {


  //es inecesario declarar la props , basta declaralos en el constructor
   constructor(){
     this.app = express();   
     this.port = process.env.PORT;


    // Middelwares : son nada mas fuciones que van a añadir otras funcionalida a mi WebServer  
     this.middlewares();

    // Rutas de mi aplicacion 
     this.rourtes();

   }

   middlewares(){

    // relacionado a ruta /publica 101.
    // servido en root path
    this.app.use(express.static('public'));


   } 

   rourtes() {
     
    // my Rest EndPoints

      this.app.get('/api', (req, res) => {
         // este callback() es el controlador de ruta /api de momento .
        res.json({
          // .json Retorno data en Formato json
          msg: 'get API'
        })
      }) 

      this.app.put('/api', (req, res) => {
        res.status(400).json({
          msg: 'put API'
        })
      }) 

      this.app.post('/api', (req, res) => {
        res.status(201).json({
          msg: 'post API'
        })
      }) 

      this.app.delete('/api', (req, res) => {
        res.json({
          msg: 'delete API'
        })
      }) 

      this.app.patch('/api', (req, res) => {
        res.json({
          msg: 'patch API'
        })
      }) 

     
   }

   listen() {

     this.app.listen(this.port, () => {
        console.log(`Example app listening at http://localhost:${this.port}`)
     })

   }
}



module.exports = server;