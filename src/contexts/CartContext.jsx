import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (game) => {
    setCartItems((prevItems) => [...prevItems, game]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("http://localhost:5000/games");
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const removeFromCart = async (gameId) => {
    try {
      await fetch(`http://localhost:5000/games/${gameId}`, {
        method: "DELETE",
      });

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== gameId)
      );
    } catch (error) {
      console.error("Error removing game from database:", error);
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
