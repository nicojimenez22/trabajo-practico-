// routes/carritoRoutes.js
const express = require("express");
const router = express.Router();
const Carrito = require("../models/carrito");
const Producto = require("../models/product"); // Importamos el modelo Producto

// 📌 Agregar un producto al carrito
router.post("/", async (req, res) => {
  try {
    const { productoId, nombre, precio, cantidad } = req.body;

    // Verificar si el producto existe en la base de datos
    const producto = await Producto.findById(productoId);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Buscar el carrito (si no existe, crear uno nuevo)
    let carrito = await Carrito.findOne();
    if (!carrito) {
      carrito = new Carrito({ productos: [] });
    }

    // Buscar si el producto ya está en el carrito
    const productoEnCarrito = carrito.productos.find((p) => p.productoId.toString() === productoId);

    if (productoEnCarrito) {
      productoEnCarrito.cantidad += cantidad; // Aumentar cantidad si ya existe
    } else {
      carrito.productos.push({ productoId, nombre, precio, cantidad });
    }

    await carrito.save();
    res.json({ mensaje: "Producto agregado al carrito", carrito });
  } catch (error) {
    console.error("Error al agregar al carrito:", error);
    res.status(500).json({ mensaje: "Error al agregar al carrito", error });
  }
});

module.exports = router;
