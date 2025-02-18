import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { deleteProduct } from "../../controllers"; // Importa la función deleteProduct

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

  // Función para eliminar el producto usando la función deleteProduct de controllers.js
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);  // Llamamos a deleteProduct pasando el ID del producto
      setProductos(productos.filter((producto) => producto._id !== id));  // Actualizamos el estado eliminando el producto
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
          <button className="btn btn-danger" onClick={() => handleDelete(productos._id)}>
            Eliminar producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


