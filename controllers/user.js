const bcrypt = require('bcrypt');

const { response , request } = require('express');

// Imporatacion de models
const Usuario = require('../models/Usuario')



// Controladores de end-points del recurso /usuarios .

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


const UsersPost = async (req = request, res = response ) => {  
    
   // Extraer Body
   // la informacion que manda req ya esta serializada por un middelware a un objeto json literal
   // extrago solo lo que quiro, protego ciertos cambos
   const { nombre , correo , password, rol } = req.body;

   // cualquier llave valor:llega atraves de jsonObject si no esta definida en el modelo mongose lo ingnora por mi al momento de insersacion db .
    const usuario = new Usuario({ nombre , correo , password, rol });

    //verificar si el correo existe
    
    

    //Encryptar la contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync( password, salt );  // usuario es un Objeto de tipo usuario , asi por referencia podemos manipular valor de los sus llaves y su props .
 


    // Guardar en db
    await usuario.save();


   
     res.status(400).json({
       usuario 
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