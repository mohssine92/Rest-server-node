const { response }= require('express');



const UsersGet = (req, res = response ) => {
   res.json({
     // este callback() es el controlador de ruta /api de momento ./ .json Retorno data en Formato json
     // es un estandar casi todas Apis retornan informacion en formato json .
      msg: 'get API - Controller'
   })
   
}


const UsersPost = (req, res = response ) => {  
    
   // Extraer Body
   // la informacion que manda req ya esta serializada por un middelware a un objeto json literal
   const {nombre, edad} = req.body;
   
   
     res.status(400).json({
       msg: 'Post API - usersPost',
       nombre,
       edad
     })
    
}

const UsersPut = (req, res = response ) => {
    res.status(201).json({
        // content-type + status response  
        msg: 'post API - controller'
    })
  
}


const UsersPatch = (req, res = response ) => { 
  res.json({
        msg: 'delete API - controller'
  })
   
}


const UsersDelete = (req, res = response ) => {
   res.json({
     msg: 'patch API - controller'
   })
}


module.exports ={
  UsersGet,
  UsersPost,
  UsersPut,
  UsersPatch,
  UsersDelete
}