import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componentes-fijos/header";
import Main from "./componentes-fijos/Main";
import Footer from "./componentes-fijos/Footer";
import ProductoVista from "./componentes-variables/ProductoVista";
import { CartProvider } from "./componentes-variables/CartContext";

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/producto/:id" element={<ProductoVista />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
