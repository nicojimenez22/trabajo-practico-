import React, { useEffect, useState } from 'react';
import { getProducts } from '../../controllers'; // Importa el servicio

const ProductList = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar los productos');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  console.log(product);

  return (
    <>
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {product.map((product) => (
          <li key={product._id}>
            {product.nombre} - ${product.precio} - {product.descripcion}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default ProductList;