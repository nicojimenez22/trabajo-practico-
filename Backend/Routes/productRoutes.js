const express = require('express');
const router = express.Router();
const Producto = require('../models/product');

// 📌 Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener productos:', error);
        res.status(500).json({ error: "Hubo un error al obtener los datos" });
    }
});

// 📌 Obtener productos con descuentos (`baje: true`)
router.get('/baje', async (req, res) => {
    try {
        const productosConDescuento = await Producto.find({ baje: true });
        res.status(200).json(productosConDescuento);
    } catch (error) {
        console.error('Error al obtener productos con descuento:', error);
        res.status(500).json({ error: "Hubo un error al obtener los datos" });
    }
});

// 📌 Crear un nuevo producto
router.post('/', async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock, baje } = req.body;
        const newProduct = new Producto({ 
            nombre, 
            descripcion, 
            precio, 
            stock, 
            baje: baje || false 
        });

        const saveProduct = await newProduct.save();
        res.status(201).json(saveProduct);
    } catch (error) {
        console.error('Error al crear el producto:', error);
        res.status(400).json({ message: error.message });
    }
});

// 📌 Eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        const productoId = req.params.id;
        const deletedProduct = await Producto.findByIdAndDelete(productoId);
        res.json(deletedProduct);
    } catch (error) {
        console.error('Error al eliminar el producto:', error);
        res.status(500).json({ error: error.message });
    }
});


module.exports = router;