const Products = require('../models/product.js')

const existId = (req,res,next) => {
    let product = Products.findById(req.params.id)
    if(product){
        next();
    }else{
        res.status(404).render('404')
    }
}

module.exports = existId