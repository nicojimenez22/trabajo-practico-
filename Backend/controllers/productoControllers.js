const Producto = require('../models/producto');

// Función para obtener todos los productos
const getProducts = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};

// Crear producto
const createProduct = async (req, res) => {
    const { nombre, descripcion, precio, stock, baje } = req.body;
    const nuevoProducto = new Producto({ nombre, descripcion, precio, stock, baje });
    try {
        await nuevoProducto.save();
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el producto' });
    }
};

// eliminar un producto
const deleteProduct = async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);
        res.json({ message: 'Producto eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
};

// Actualizar un producto
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({ message: 'Producto actualizado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
};

module.exports = { getProducts, createProduct, deleteProduct, updateProduct };