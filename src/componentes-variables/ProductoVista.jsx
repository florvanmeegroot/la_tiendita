import { useLocation, useParams, Link } from "react-router-dom";
import productos from "../data/productos";
import { useCart } from "./CartContext";

function VistaProducto() {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useCart();

  const productoState = location.state?.producto;
  const producto = productoState || productos.find((p) => p.id == id);

  const precioNacional = (producto.precio / 1.21).toFixed(2);

  if (!producto) {
    return (
      <div>
        <h2>No se encontró el producto {id}</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div className="vista-producto">
      <div className="vista-producto-contenedor">
        <img
          className="producto-img"
          src={producto.imageUrl}
          alt={producto.title}
        />

        <div className="producto-info">
          <p className="categoria">Categoría: {producto.categoria}</p>
          <h2 className="titulo-card">{producto.title}</h2>
          <p className="descripcion">{producto.description}</p>
          <p className="precio">${producto.precio}</p>
          <p className="precio-nacional">
            Producto sin impuestos nacionales ${precioNacional}
          </p>

          <button className="btn-agregar" onClick={() => addToCart(producto)}>
            Agregar al carrito
          </button>
        </div>

        <div className="volver">
          <Link to="/" className="btn-volver">
            ← Volver
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VistaProducto;
