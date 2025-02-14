import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Cargar carrito desde el backend al iniciar
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/carrito");
        setCart(response.data.productos || []);
      } catch (error) {
        console.error("Error al obtener el carrito:", error);
      }
    };
    fetchCart();
  }, []);

  // Agregar producto al carrito
  const addToCart = async (producto) => {
    try {
      const response = await axios.post("http://localhost:3000/api/carrito", {
        productoId: producto._id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1,
      });

      setCart(response.data.carrito.productos);
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };

  // Eliminar producto del carrito
  const removeFromCart = async (productoId) => {
    try {
      await axios.delete(`http://localhost:3000/api/carrito/${productoId}`);
      setCart(cart.filter((item) => item.productoId !== productoId));
    } catch (error) {
      console.error("Error al eliminar del carrito:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;