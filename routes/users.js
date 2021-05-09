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

 router.put('/', UsersPost) 

 router.post('/', UsersPut)  

 router.delete('/', UsersPatch) 

 router.patch('/', UsersDelete)  



module.exports = router;