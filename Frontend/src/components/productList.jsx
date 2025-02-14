import React, { useEffect, useState } from "react";
import { getProducts } from "../../controllers"; // Asegúrate de tener esta función
import ProductCard from "./ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductList = () => {
  const [productos, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los productos");
        setLoading(false);
      }
    };

     const handleDelete = async (id) => {
    if (window.confirm("¿Seguro que deseas eliminar este producto?")) {
      try {
        await deleteProduct(id);
        setProductos(productos.filter((producto) => producto._id !== id));
      } catch (error) {
        alert("Error al eliminar el producto");
      }
    }
  };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-5">Cargando productos...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Lista de Productos</h2>
      <div className="row">
        {productos.map((productos) => (
          <ProductCard key={productos._id} productos={productos} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
