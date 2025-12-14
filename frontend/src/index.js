
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CartProvider } from "./context/CartContext";

// Root render for the whole React app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* CartProvider gives cart data to all pages */}
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
