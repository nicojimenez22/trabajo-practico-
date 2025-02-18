import React, { useState } from "react";
import axios from "axios";

const AgregarProducto = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [baje, setBaje] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/product", {
        nombre,
        descripcion,
        precio,
        stock,
        baje,
      });
      alert("Producto agregado con éxito!");
      // Limpiar el formulario después de agregar el producto
      setNombre("");
      setDescripcion("");
      setPrecio("");
      setStock("");
      setBaje(false);
    } catch (error) {
      console.error("Error al agregar el producto", error);
      alert("Error al agregar el producto");
    }
  };

  return (
    <div className="container">
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre del Producto</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Descripción</label>
          <input
            type="text"
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Precio</label>
          <input
            type="number"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Stock</label>
          <input
            type="number"
            className="form-control"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>
            Baje
            <input
              type="checkbox"
              checked={baje}
              onChange={() => setBaje(!baje)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default AgregarProducto;

