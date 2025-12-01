import { useCart } from "./CartContext";

function Carrito() {
  const { cart } = useCart();

  return (
    <div className="contenedor-carrito">
      <h1 className="title-carrito">Mi Carrito</h1>

      {cart.length === 0 && <p className="vacio">El carrito está vacío</p>}
      {cart.map((item) => (
        <div key={item.id} className="item-carrito">
          <img src={item.imageUrl} alt={item.title} />
          <h3 className="titulo-card">{item.title}</h3>
          <p className="precio">${item.precio}</p>
        </div>
    
      ))}
    </div>
  );
}

export default Carrito;

