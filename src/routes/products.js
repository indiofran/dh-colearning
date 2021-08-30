// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require("path");

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Middelware Require ************
const existId = require('../middlewares/existid')
const { body } = require('express-validator')

const validateProduct = [
    body('name').notEmpty().withMessage('Debe Completar Este campo'),
    body('price').isInt({min: 1}).withMessage('El campo precio tiene que ser un numero mayor a 1'),
    body('discount')
        .isInt({min: 0, max:100}).withMessage('Descuento fuera de rango'),
    body('category')
        .notEmpty().withMessage('Debe Completar Este campo'),
    body('description').notEmpty().withMessage('Debe Completar Este campo').bail()
        .isLength({min:0,max:200}).withMessage('Tiene que escribir menos de 200 carateres'),
]
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
router.get('/create/',  productsController.create);
router.post('/create/', validateProduct, productsController.store);


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', existId,  productsController.detail);

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id/',  existId, productsController.edit);
router.put('/edit/:id/', validateProduct, existId, uploadFile.single('image'), productsController.update);


/*** DELETE ONE PRODUCT ***/ 
router.delete('/delete/:id/', existId, productsController.destroy);
/*** DELETE A LOT PRODUCT ***/
router.get('/delete/', productsController.deleteForm);
router.delete('/delete/', productsController.deleteVarius);


module.exports = router;
