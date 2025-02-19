import React from "react";
import axios from "axios";

const ProductCard2 = ({ producto }) => {

    const  obtenerProductos = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/api/product");
            return data;
        } catch (error) {
            console.error('Error al obtener los productos', error);
            return [];
        }
    }
    const agregarAlCarrito = async () => {
        try {
            const { data } = await axios.post("http://localhost:3000/api/carrito", {
    productoId: producto._id,
    cantidad: 1
});
        alert('producto agregado al carrito')
        } catch (error) {
            console.error('Error al agregar el producto al carrito', error);
            alert('Error al agregar el producto al carrito');
        }
    };

    return (
        <div>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
};

export default ProductCard2;