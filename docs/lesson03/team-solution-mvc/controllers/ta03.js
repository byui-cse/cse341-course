// TA03 controller

const Product = require('../models/product');

// handle ta03/ 
exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('pages/ta03', {
            title: 'Team Activity 03',
            path: '/ta03',
            products: products
        });
    });
};

// handle ta03/search
exports.getSearchProducts = (req, res, next) => {
    const query = req.query.query.toLowerCase();
    Product.search(query, filteredProducts => {
        res.render('pages/ta03', {
            title: 'Team Activity 03',
            path: '/ta03',
            products: filteredProducts
        });
    });
};