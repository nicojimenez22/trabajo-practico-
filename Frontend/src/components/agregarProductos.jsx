import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion, AnimatePresence } from "framer-motion";

const AgregarProducto = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [baje, setBaje] = useState(false);
  const [descuento, setDescuento] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (baje && (isNaN(descuento) || descuento < 0 || descuento > 100)) {
      setMensaje("❌ El descuento debe estar entre 0 y 100.");
      setTipoMensaje("danger");
      return;
    }

    const nuevoProducto = {
      nombre,
      precio: Number(precio),
      stock: Number(cantidad),
      baje,
      descuento: baje ? Number(descuento) : 0,
    };

    try {
      const response = await axios.post("http://localhost:3000/api/productos", nuevoProducto);
      setMensaje("✅ Producto agregado correctamente.");
      setTipoMensaje("success");

      setNombre("");
      setPrecio("");
      setCantidad("");
      setBaje(false);
      setDescuento("");
    } catch (error) {
      console.error("Error al agregar el producto", error);
      setMensaje("❌ Hubo un error al agregar el producto.");
      setTipoMensaje("danger");
    }
  };

  return (
    <motion.div
      className="container mt-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="card p-5 shadow-lg border-0"
        style={{
          background: "#f1f8ff", // Fondo claro
          borderRadius: "20px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-center mb-4 text-primary">🛒 Agregar Producto</h2>
        <form onSubmit={handleSubmit}>

          {/* Nombre del producto */}
          <motion.div className="mb-4" whileFocus={{ scale: 1.02 }}>
            <label className="form-label fw-bold text-dark">Nombre del producto:</label>
            <input
              type="text"
              className="form-control shadow-lg"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              placeholder="Ej: Camiseta Nike"
            />
          </motion.div>

          {/* Precio del producto */}
          <motion.div className="mb-4" whileFocus={{ scale: 1.02 }}>
            <label className="form-label fw-bold text-dark">Precio:</label>
            <input
              type="number"
              className="form-control shadow-lg"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              required
              min="0"
              placeholder="Ej: 49.99"
            />
          </motion.div>

          {/* Cantidad en stock */}
          <motion.div className="mb-4" whileFocus={{ scale: 1.02 }}>
            <label className="form-label fw-bold text-dark">Cantidad en stock:</label>
            <input
              type="number"
              className="form-control shadow-lg"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              required
              min="1"
              placeholder="Ej: 10"
            />
          </motion.div>

          {/* Checkbox para aplicar descuento */}
          <motion.div className="form-check mb-4" whileHover={{ scale: 1.1 }}>
            <input
              type="checkbox"
              className="form-check-input"
              id="descuento"
              checked={baje}
              onChange={(e) => setBaje(e.target.checked)}
            />
            <label className="form-check-label fw-bold text-dark" htmlFor="descuento">
              ¿Tiene descuento?
            </label>
          </motion.div>

          {/* Campo de descuento (con animación) */}
          <AnimatePresence>
            {baje && (
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label className="form-label fw-bold text-dark">Porcentaje de descuento (%):</label>
                <input
                  type="number"
                  className="form-control shadow-lg"
                  value={descuento}
                  onChange={(e) => setDescuento(e.target.value)}
                  required={baje}
                  min="0"
                  max="100"
                  placeholder="Ej: 20"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Botón de enviar */}
          <motion.button
            type="submit"
            className="btn btn-info w-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agregar Producto
          </motion.button>

          {/* Mensaje de confirmación/error con animación */}
          <AnimatePresence>
            {mensaje && (
              <motion.div
                className={`alert mt-4 text-center alert-${tipoMensaje}`}
                role="alert"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {mensaje}
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AgregarProducto;
