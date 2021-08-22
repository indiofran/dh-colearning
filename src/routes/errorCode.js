// ************ Require's ************
const express = require('express');
const router = express.Router();


router.get('/404', (req,res)=>  res.status(404).render('404'));
router.get('*', (req,res)=> res.redirect('/404'));

module.exports = router;