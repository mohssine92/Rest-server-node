const { Router }= require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { esRoleValido,  emailExiste } = require('../helpers/db-validators');

const { UsersGet, 
        UsersPost,
        UsersPut,
        UsersPatch,
        UsersDelete } = require('../controllers/user');



const router = Router();


// Restapi Endpoints , para Recurso de users:


// le paso Referencia de funcion UserGet , le ejecuta a su tiempo
 router.get('/', UsersGet) 

// '/' => se carga directamente despues del prefix que esta recien configurado 
// si no configuramos prefix:api , la carga sera directamente despues del dominio  
 router.put('/:id', UsersPut) 

 router.post('/',[
    //midlware collection
    check('nombre','el nombre es obligatorio').not().isEmpty(), 
    check('password','el password debe ser mas de 6 letras').isLength({ min:6 }),
    check('correo', 'El correo ingresado no es valido').isEmail(), 
    check('correo').custom( (correo) => emailExiste(correo) ),
    // check('rol', 'no es rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']), => video 124 
    check('rol').custom( esRoleValido ),
    validarCampos
 ],UsersPost)  

 router.delete('/', UsersPatch) 

 router.patch('/', UsersDelete)  



module.exports = router;