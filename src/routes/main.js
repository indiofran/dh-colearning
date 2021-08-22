// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index); 
router.get('/search', mainController.search); 
router.get('/404', (req,res)=> res.render('404'));
router.get('*', (req,res)=> res.redirect('/404'));

module.exports = router;
