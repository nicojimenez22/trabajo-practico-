const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Post para la coleccion Product

router.post('/', async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock, baje } = (req.body);
        const newProduct = new Product({
            nombre,descripcion,precio,stock,baje
        });
        const saveProduct = await newProduct.save();
        res.status(201).json(saveProduct);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
        console.log('Error al crear el producto')
    }
})

// Get para obtener todos los productos
router.get('/product', async (req, res) => {
    try {
        await Product.find()
        .then(
            (Product) => res.status(200).json(Product))
        .catch((err) => res.status(500).json( {error: err.message}));
    }
    catch(e){
        res.status(500).json({ error: "hubo un error al obtener los datos"})
    }
});

module.exports = router;