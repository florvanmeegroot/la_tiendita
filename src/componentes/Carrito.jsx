import { useState } from "react";
import { useCart } from "./CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../data/firebase";
import Swal from "sweetalert2";

function Carrito() {
  const { cart, addToCart, removeOne, removeAll, getTotal } = useCart();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer: formData,
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        precio: item.precio,
        quantity: item.quantity,
      })),
      total: getTotal(),
      date: Timestamp.fromDate(new Date()),
      status: "generada",
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);

      // sweet alert para finalizar la compra
      Swal.fire({
        icon: "success",
        title: "¡Gracias por tu compra!",
        text: `Tu número de orden es: ${docRef.id}`,
        timer: 5000,
        timerProgressBar: true,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
          title: "alert-titulo",
        },
      });
    } catch (error) {
      console.error("Error al guardar la orden:", error);

      // sweet alert si hubo un error al procesar la compra
      Swal.fire({
        icon: "error",
        title: "Lo sentimos",
        text: "Hubo un problema al procesar tu compra. Intentá nuevamente.",
        timer: 5000,
        timerProgressBar: true,
        showCloseButton: false,
        showConfirmButton: false,
        customClass: {
          title: "alert-titulo",
        },
      });
    }
  };

  return (
    <div className="contenedor-carrito">
      <h1 className="title-carrito">Mi Carrito</h1>

      {cart.length === 0 && <p className="vacio">El carrito está vacío</p>}

      {cart.map((item) => (
        <div key={item.id} className="item-carrito">
          <img src={item.imageUrl} alt={item.title} />

          <div className="info">
            <h3 className="titulo-carrito">{item.title}</h3>
          </div>

          <div className="acciones-carrito">
            <button onClick={() => removeOne(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => addToCart(item)}>+</button>

            <p className="precio">${item.precio * item.quantity}</p>

            <button className="eliminar" onClick={() => removeAll(item.id)}>
              Eliminar
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <div className="total">
            <h2>Total: ${getTotal()}</h2>
          </div>

          <div className="form-final">
            <form className="form-checkout" onSubmit={handleSubmit}>
              <h3>Finalizar compra</h3>

              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />

              <button type="submit" className="btn-finalizar">
                Comprar
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;
