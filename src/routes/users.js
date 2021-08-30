// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require("path");

// ************ Controller Require ************
const usersController = require('../controllers/userController');


/*** GET ALL USERS ***/
router.get('/', usersController.index);

/*** CREATE ONE PRODUCT ***/
router.get('/register/',  usersController.create);
router.post('/register/', usersController.store);

/*** Log In ***/
router.get('/login/',  usersController.showLogin);
router.post('/login/', usersController.login);

/*** Get one User ***/
router.get('/profile',  usersController.show);

module.exports = router;
