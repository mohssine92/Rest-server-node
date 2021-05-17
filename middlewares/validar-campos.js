const { validationResult } = require("express-validator");



// un middle no es nada que una funcion
const validarCampos = (req, res, next) => {
  
  // errores acumulados en req , con los middelware de express-validator , si no se acmular nada pues sera empty
  const errors = validationResult(req);
  if( !errors.isEmpty() ){
    return res.status(400).json(errors); 
  }
  
   // si llegas hasta aqui sigue con el siguiente middleware sino sigue al controlador es lo que hace esta funcion
   next();

}


module.exports = {
  validarCampos
}