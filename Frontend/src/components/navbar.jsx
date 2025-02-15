import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, nombre: "Producto 1", precio: 20, cantidad: 2 },
    { id: 2, nombre: "Producto 2", precio: 15, cantidad: 1 },
    { id: 3, nombre: "Producto 3", precio: 30, cantidad: 1 },
  ]);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalCarrito = cartItems.reduce((total, item) => total + item.precio * item.cantidad, 0);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">🛍️ Mi E-Commerce</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">Login</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/productos">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/productos">Vender</a>
              </li>
            </ul>
            {/* Botón de Carrito */}
            <button className="btn btn-light ms-3 position-relative" onClick={toggleCart}>
              🛒 Carrito
              {cartItems.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Modal del Carrito */}
      {showCart && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">🛒 Carrito de Compras</h5>
                <button type="button" className="btn-close" onClick={toggleCart}></button>
              </div>
              <div className="modal-body">
                {cartItems.length === 0 ? (
                  <p className="text-center text-muted">El carrito está vacío.</p>
                ) : (
                  <ul className="list-group">
                    {cartItems.map((item) => (
                      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                          <strong>{item.nombre}</strong> - ${item.precio} x {item.cantidad}
                        </div>
                        <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>❌</button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="modal-footer">
                <h5>Total: <span className="text-success">${totalCarrito}</span></h5>
                <button className="btn btn-secondary" onClick={toggleCart}>Cerrar</button>
                <button className="btn btn-success" disabled={cartItems.length === 0}>Finalizar Compra</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
