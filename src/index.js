import { AuthProvider } from "context/AuthContext";
import { NavProvider } from "context/NavContext";
import { ProductProvider } from "context/ProductContext";
import { WishProvider } from "context/WishContext";
import { CartProvider } from "context/CartContext";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import { makeServer } from "./server";

// Call make Server
// makeServer();

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <NavProvider>
        <ProductProvider>
          <WishProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishProvider>
        </ProductProvider>
      </NavProvider>
    </AuthProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
