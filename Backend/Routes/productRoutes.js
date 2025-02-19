const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');
const { getProducts, createProduct, deleteProduct, updateProduct } = require('../controllers/productoControllers'); 


router.get('/product', getProducts )
router.post('/product', createProduct)
    

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