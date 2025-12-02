import { useCart } from "./CartContext";

function Carrito() {
  const { cart, addToCart, removeOne, removeAll, getTotal } = useCart();

  return (
    <div className="contenedor-carrito">
      <h1 className="title-carrito">Mi Carrito</h1>

      {cart.length === 0 && <p className="vacio">El carrito está vacío</p>}

      {cart.map((item) => (
        <div key={item.id} className="item-carrito">
          <div>
            <img src={item.imageUrl} alt={item.title} />
          </div>
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
        <div className="total">
          <h2>Total: ${getTotal()}</h2>
        </div>
      )}
    </div>
  );
}

export default Carrito;
