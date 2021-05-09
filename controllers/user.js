const { response , request } = require('express');



const UsersGet = (req = request, res = response ) => {
  //recibir params opcionales es decir los queries ?..&..&.. 
  // http://localhost:8080/api/users?q=232&s=11323234&apiKey=679788&name=mohssine
  const {q , apiKey , name = 'No-name', page=1 , limit} = req.query;
  
  
  res.json({
     // este callback() es el controlador de ruta /api de momento ./ .json Retorno data en Formato json
     // es un estandar casi todas Apis retornan informacion en formato json .
      msg: 'get API - Controller',
      q,
      apiKey,
      name,
      page,
      limit
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
  
  // recibir params fromn root es decir params obligatorios
  const id = req.params.id
  
    res.status(201).json({
      // content-type + status response  
      msg: 'put API - controller',
      id 
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