// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");

// ************ Controller Require ************
const productsController = require('../controllers/productsController');



// ************ Multer ************
const storage = multer.diskStorage({
    destination: (req,file,callback)=>{
               callback(null, './public/images/products')
    },
    filename:  (req,file,callback)=>{
        callback(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    },
})
const uploadFile = multer({storage:storage})

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/
router.get('/create/', productsController.create);
router.post('/create/', uploadFile.single('image'), productsController.store);


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id/', productsController.edit);
router.put('/edit/:id/', uploadFile.single('image'), productsController.update);


/*** DELETE ONE PRODUCT ***/ 
router.delete('/delete/:id/', productsController.destroy);
/*** DELETE A LOT PRODUCT ***/
router.get('/delete/', productsController.deleteForm);
router.delete('/delete/', productsController.deleteVarius);


module.exports = router;
