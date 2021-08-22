// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 
router.post('/create/', productsController.store);


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id/', productsController.edit);
router.put('/edit/:id/', productsController.update);


/*** DELETE ONE PRODUCT ***/ 
router.delete('/delete/:id/', productsController.destroy);
/*** DELETE A LOT PRODUCT ***/
router.get('/delete/', productsController.deleteForm);
router.delete('/delete/', productsController.deleteVarius);


module.exports = router;
