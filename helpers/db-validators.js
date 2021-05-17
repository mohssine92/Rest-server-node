const Role = require('../models/role')
const Usuario = require('../models/Usuario')

// validacion relacionada a db - utulizada por meddlware 
const esRoleValido = async(rol = '') =>{
    const existRole = await Role.findOne({ rol });
    if ( !existRole ) {
      throw new Error(`El rol  ${ rol } no se encuentra en base de datos `)       
    }  
}

// validacion relacionada a db  utulizada por meddlware 
const emailExiste = async (correo = '') => {
  //verificar si el correo existe , Usuario es el modelo de monggose , nos ofrece varios funciones como tal : 
  const existeEmail = await Usuario.findOne({ correo });
  if ( existeEmail ){
    throw new Error(`El email  ${ correo } ya se encuentra registrado `)   
  }
}





module.exports = {
 esRoleValido,
 emailExiste
}

