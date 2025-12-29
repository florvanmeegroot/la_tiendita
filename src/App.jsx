import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import "./App.css";
import Header from "./componentes/header";
import Main from "./componentes/Main";
import Footer from "./componentes/Footer";
import ProductoVista from "./componentes/ProductoVista";
import { CartProvider } from "./componentes/CartContext";
import Carrito from "./componentes/Carrito";

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <CartProvider>
          <Header />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/producto/:id" element={<ProductoVista />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>

          <Footer />
        </CartProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;