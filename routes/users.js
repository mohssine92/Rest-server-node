const { Router }= require('express');

const { UsersGet, 
        UsersPost,
        UsersPut,
        UsersPatch,
        UsersDelete } = require('../controllers/user');

const router = Router();


// Restapi Endpoints , para path user :


// le paso Referencia de funcion UserGet , le ejecuta a su tiempo
 router.get('/', UsersGet) 

// '/' => se carga directamente despues del prefix que esta recien configurado 
// si no configuramos prefix:api , la carga sera directamente despues del dominio  
 router.put('/:id', UsersPut) 

 router.post('/', UsersPost)  

 router.delete('/', UsersPatch) 

 router.patch('/', UsersDelete)  



module.exports = router;