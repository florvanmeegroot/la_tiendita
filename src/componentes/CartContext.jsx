import { createContext, useState, useContext } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export function CartProvider({ children }) {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  // sweet alert al agregar al carrito
  const sweetAlert = () => {
    MySwal.fire({
      icon: "success",
      title: "Se agregó al carrito",
      showConfirmButton: true,
      showCloseButton: true,
      timer: 2000,
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
    setCart((prev) => {
      const item = prev.find((p) => p.id === producto.id);

      if (item) {
        return prev.map((p) =>
          p.id === producto.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }

      return [...prev, { ...producto, quantity: 1 }];
    });

    sweetAlert();
  };

  // sumar uno (botón +)
  const addOne = (id) => {
    setCart((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    );
  };

  // restar uno (botón -)
  const removeOne = (id) => {
    setCart((prev) => {
      const item = prev.find((p) => p.id === id);

      if (item.quantity === 1) {
        // si queda en 0, eliminarlo
        return prev.filter((p) => p.id !== id);
      }

      return prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      );
    });
  };

  // eliminar toda la fila
  const removeAll = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  // total del carrito
  const getTotal = () =>
    cart.reduce((acc, p) => acc + p.precio * p.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        addOne,
        removeOne,
        removeAll,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
