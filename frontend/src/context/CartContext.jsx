
// Simple cart context to share cart between pages

import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // items example: { id, name, price, qty, image, brand }
  const [items, setItems] = useState([]);

  // Add a product to cart
  const addToCart = (product, qty = 1) => {
    setItems((prevItems) => {
      const existing = prevItems.find((it) => it.id === product.id);
      if (existing) {
        // If item already exists, just increase quantity
        return prevItems.map((it) =>
          it.id === product.id ? { ...it, qty: it.qty + qty } : it
        );
      }
      // If new item, add to array
      return [...prevItems, { ...product, qty }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setItems((prevItems) => prevItems.filter((it) => it.id !== id));
  };

  // Update quantity
  const updateQty = (id, qty) => {
    if (qty <= 0) {
      removeFromCart(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((it) =>
        it.id === id ? { ...it, qty: qty } : it
      )
    );
  };

  // Clear cart after order
  const clearCart = () => setItems([]);

  // Calculate total items and total price
  const cartCount = items.reduce((sum, it) => sum + it.qty, 0);
  const cartTotal = items.reduce((sum, it) => sum + it.qty * it.price, 0);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQty, clearCart, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart in any component
export function useCart() {
  return useContext(CartContext);
}
