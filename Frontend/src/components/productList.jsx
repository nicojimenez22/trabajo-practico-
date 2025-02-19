import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000/api/product")
            .then((response) => setProductos(response.data))
            .catch((error) => console.error(error));
    }, []);

    const agregarAlCarrito = async (productoId) => {
        try {
            await axios.post("http://localhost:3000/api/carrito", {
                productoId,
                cantidad: 1,
            });
            alert("Producto agregado al carrito");
        } catch (error) {
            console.error("Error al agregar producto al carrito", error);
            alert("Error al agregar producto al carrito");
        }
    };

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Productos</h1>

            <div className="row">
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <div key={producto._id} className="col-md-4 col-sm-6 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body text-center">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.descripcion}</p>
                                    <p className="fw-bold text-success">Precio: ${producto.precio}</p>
                                    <button 
                                        className="btn btn-success"
                                        onClick={() => agregarAlCarrito(producto._id)}
                                    >
                                        Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">Cargando productos...</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;


