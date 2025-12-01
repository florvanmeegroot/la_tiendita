import { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export function CartProvider({ children }) {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const sweetAlert = () => {
    MySwal.fire({
      icon: "success",
      title: "Se agregó al carrito",
      showConfirmButton: true,
      confirmButtonText: "Ir al carrito",
      customClass: {
        title: "alert-titulo",
        confirmButton: "alert-boton",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/carrito");
      }
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
