const express = require('express');     //This is '/user' Route
const router = express.Router();
const {handleUserSignup,handleUserLogin} = require('../controllers/user')

router.post('/',handleUserSignup);
router.post('/login',handleUserLogin);

module.exports = router;