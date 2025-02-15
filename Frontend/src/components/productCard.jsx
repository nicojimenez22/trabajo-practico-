import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ProductCard = ({ productos, onDelete }) => {
  
  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const response = await axios.post("http://localhost:3000/routes/carritoRoutes", {
        productoId: productos._id, 
        nombre: productos.nombre,
        precio: productos.precio,  
        cantidad: 1,               
      });

      alert(response.data.mensaje); 
    } catch (error) {
      console.error("Error al agregar al carrito", error);
      alert("Error al agregar el producto al carrito");
    }
  };

  // Función para eliminar el producto
  const handleDelete = async () => {
    if (!window.confirm("¿Seguro que deseas eliminar este producto del carrito?")) return;

    try {
      await axios.delete(`http://localhost:3000/api/product/${productos._id}`);
      onDelete(productos._id); // Llamamos a onDelete para actualizar el estado en ProductList
    } catch (error) {
      console.error("Error al eliminar el producto", error);
      alert("No se pudo eliminar el producto.");
    }
  };
  return (
    <div className="col-md-4">
      <div className="card h-100 shadow-sm">
        <img src={productos.imagen} className="card-img-top" alt={productos.nombre} />
        <div className="card-body">
          <h5 className="card-title">{productos.nombre}</h5>
          <p className="card-text">{productos.descripcion}</p>
          <p className="text-success fw-bold">${productos.precio}</p>
          <p className={`fw-bold ${productos.stock < 5 ? "text-danger" : "text-primary"}`}>
            Stock: {productos.stock}
          </p>
          <button className="btn btn-primary me-2" onClick={handleSubmit}>
            Agregar al carrito
          </button>
          <button className="btn btn-danger" onClick={handleDelete}>
            Eliminar producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

