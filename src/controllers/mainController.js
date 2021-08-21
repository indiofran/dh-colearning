const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let visited = products.filter(elem => elem.category === 'visited');
		let sales=  products.filter(elem => elem.category === 'in-sale');
		res.render('index', {'visited':visited,'sales':sales});
	},
	search: (req, res) => {
		res.render('results')
	},
};

module.exports = controller;
