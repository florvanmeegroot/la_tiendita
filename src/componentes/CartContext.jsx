import { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const CartContext = createContext();

export function CartProvider({ children }) {
  const MySwal = withReactContent(Swal);

  const sweetAlert = () => {
    MySwal.fire({
      icon: "success",
      title: "Se agregó al carrito",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      customClass: {
        popup: "mi-popup",
        title: "mi-titulo",
        icon: "mi-icono",
      },
    });
  };

  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    setCart((prev) => [...prev, producto]);
    sweetAlert();
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
