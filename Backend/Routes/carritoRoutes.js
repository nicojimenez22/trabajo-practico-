// routes/carritoRoutes.js
const express = require("express");
const router = express.Router();
const Carrito = require("../models/carrito");
const Producto = require("../models/product"); // Importamos el modelo Producto


router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// 📌 Agregar un producto al carrito
router.post("/carrito", async (req, res) => {
  try {
      console.log("📦 Datos recibidos en el backend:", req.body); // 👈 Log para depuración

      const { productoId, nombre, precio, cantidad } = req.body;

      if (!productoId || !nombre || !precio || !cantidad) {
          return res.status(400).json({ error: "Faltan datos en la solicitud" });
      }

      let productoEnCarrito = await Carrito.findOne({ productoId });

      if (productoEnCarrito) {
          productoEnCarrito.cantidad += cantidad;
          await productoEnCarrito.save();
      } else {
          const nuevoProducto = new Carrito({ productoId, nombre, precio, cantidad });
          await nuevoProducto.save();
      }

      res.json({ mensaje: "Producto agregado al carrito correctamente"});
  } catch (error) {
      console.error("Error en el backend:", error);
      res.status(500).json({ error: "Error al agregar el producto al carrito" });
  }
});

// Eliminar un producto del carrito

router.delete("/carrito/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Carrito.findByIdAndDelete(id);
    
    if (!result) {
      return res.status(404).json({ error: "Producto no encontrado en el carrito" });
    }

    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar el producto del carrito:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});


// Obtener productos del carrito con los detalles completos del producto
// Obtener productos del carrito con los detalles completos del producto
router.get("/carrito", async (req, res) => {
  try {
    const carrito = await Carrito.find()
      .populate("productos.productoId"); // Popula los detalles del producto

    res.json(carrito); // Ahora 'productoId' tendrá los detalles completos
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
    res.status(500).json({ error: "Error al obtener el carrito" });
  }
});



// obtener un producto del carrito por su ID
router.get("/carrito/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const carrito = await Carrito.findById(id).populate("productos.productoId");
      if (!carrito) {
          return res.status(404).json({ error: "Carrito no encontrado" });
      }
      res.json(carrito);
  } catch (error) {
      console.error("Error en el backend:", error);
      res.status(500).json({ error: "Error al obtener el carrito" });
  }
});


module.exports = router;
