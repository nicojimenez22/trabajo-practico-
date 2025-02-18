const express = require('express');
const router = express.Router();
const Carrito = require('../models/carrito');
const Producto = require('../models/product'); // Asegúrate de importar el modelo Producto


// obtener carrito completo
router.get('/carrito', async (req, res) => {
  try {
    const carrito = await Carrito.find();
    res.status(200).json(carrito);
  } catch (error) {
    console.error('Error al obtener el carrito:', error);
    res.status(500).json({ error: "Hubo un error al obtener los datos" });
  }
});



module.exports = router;