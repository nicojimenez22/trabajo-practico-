import React, { useEffect, useState } from "react";
import axios from "axios";

const CarritoModal = () => {
    const [carrito, setCarrito] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0);

    // Función para obtener los productos del carrito
    const obtenerCarrito = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/api/carrito");
            setCarrito(data.productos || []);
            setPrecioTotal(data.precioTotal || 0);
        } catch (error) {
            console.error("Error al obtener el carrito", error);
        }
    };

    // Función para eliminar un producto del carrito
    const eliminarDelCarrito = async (productoId) => {
        try {
            await axios.delete(`http://localhost:3000/api/carrito/${productoId}`);
            obtenerCarrito(); // Recargar el carrito después de eliminar
        } catch (error) {
            console.error("Error al eliminar el producto del carrito", error);
        }
    };

    // Cargar el carrito al abrir el modal
    useEffect(() => {
        obtenerCarrito();
    }, []);

    return (
        <>
            {/* Botón para abrir el modal */}
            <button 
                type="button" 
                className="btn btn-primary position-relative" 
                data-bs-toggle="modal" 
                data-bs-target="#cartModal"
            >
                🛒 Ver Carrito
            </button>

            {/* Modal de Bootstrap */}
            <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cartModalLabel">🛒 Carrito de Compras</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </div>
                        <div className="modal-body">
                            {carrito.length > 0 ? (
                                <ul className="list-group">
                                    {carrito.map((item) => (
                                        <li key={item.productoId._id} className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong>{item.productoId.nombre}</strong>
                                                <p className="mb-0 text-muted">Cantidad: {item.cantidad}</p>
                                                <p className="mb-0 fw-bold text-success">Precio: ${item.productoId.precio}</p>
                                            </div>
                                            {/* Botón para eliminar producto */}
                                            <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={() => eliminarDelCarrito(item.productoId._id)}
                                            >
                                                🗑 Eliminar
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-center">El carrito está vacío.</p>
                            )}
                        </div>
                        <div className="modal-footer">
                            <h5 className="fw-bold text-success me-auto">Total: ${precioTotal}</h5>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarritoModal;

