import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CarritoCard = ({ Producto, addToCart }) => {
    return (
        <div className="card mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{Producto.nombre}</h5>
                <p className="card-text">${Producto.precio}</p>
                <button className="btn btn-primary" onClick={() => addToCart(Producto)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default CarritoCard;
