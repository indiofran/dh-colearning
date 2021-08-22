//Se escribe en mayuscula porque para diferenciar que es un "modelo"
const Products = require('../models/product.js')

const controller = {
	// Root - Show all products
	index: (req, res) => {
		const products_copy = Products.getAll()
		res.render('products', {'products': products_copy});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let product = Products.findById(req.params.id)
		if(product){
			res.render('detail',{
				product: product,
			});
		}else{
			res.redirect('/404')
		}

	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let products_copy = Products.getAll().map(product => product);
		let productId = products_copy.length === 0 ? 1 :  products_copy[products_copy.length-1].id + 1
		product = {
			id: productId,
			name: req.body.name,
			price: req.body.price,
			description: req.body.description,
			category: req.body.category,
			discount: req.body.discount,
		}
		products_copy.push(product)
		Products.modifiedAll(products_copy);
		res.redirect('/');
	},

	// Update - Form to edit
	edit: (req, res) => {
		let product = Products.findById(req.params.id)
		res.render('product-edit-form',{
			productToEdit: product
		});
	},
	// Update - Method to update
	update: (req, res) => {
		let products_copy = Products.getAll().map(product => {
				if (product.id == req.params.id) {
					product.name = req.body.name
					product.price = req.body.price
					product.description = req.body.description
					product.category = req.body.category
					product.discount = req.body.discount
				}
				return product;
			});

		Products.modifiedAll(products_copy);
		res.redirect('/products/detail/'+ req.params.id)

	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let products_copy = Products.getAll().filter(elem => elem.id != req.params.id);
		//Opcion 2
		/* let positionToDelete = products.getAll().findIndex(elem => elem.id == req.params.id)
		let new_array_products = products.getAll().splice(positionToDelete, 1) */

		Products.modifiedAll(products_copy);
		res.redirect('/');
	},
	deleteVarius:  (req, res) => {
		const ids = req.body.ids
		let products_copy = Products.getAll().filter(elem => {
			ids.filter(id => id == elem.id).length === 0
		});
		Products.modifiedAll(products_copy);
	}
};

module.exports = controller;