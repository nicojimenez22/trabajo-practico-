const express = require('express');
const router = express.Router();
const Carrito = require('../models/carrito');
const Producto = require('../models/producto'); // Asegúrate de importar el modelo Producto
const { agregarAlCarrito , obtenerCarrito, eliminarProductoDelCarrito} = require('../controllers/carritoControllers');

// obtener carrito completo
router.get('/carrito', obtenerCarrito )


//agregar producto al carrito
router.post('/carrito', agregarAlCarrito )

//eliminar producto del carrito
router.delete('/carrito/:id', eliminarProductoDelCarrito )


module.exports = router;