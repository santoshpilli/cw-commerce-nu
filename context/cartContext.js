'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for the cart
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);

  // Fetch cart items count from the server
  const fetchCartItems = async () => {
    console.log("cart context is getting called in function=====>")
    try {
      console.log("cart context is getting called try block=====>")

      const response = await fetch('/api/cartItemCount');
      console.log("cart context is getting called response",response)

      if (response.ok) {
        const data = await response.json();
        console.log("cart context is getting called response ok",data)

        setCartItems(data.itemCount);
      } else {
        console.error('Failed to fetch item count');
      }
    } catch (error) {
      console.error('Error fetching item count:', error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, fetchCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
