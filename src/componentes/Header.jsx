import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import { HashLink } from "react-router-hash-link";
import iconoTienda from "../assets/img/icono-tienda.png";
import iconoCarrito from "../assets/img/icono-carrito.png";

function Header() {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <img src={iconoTienda} alt="Logo Tiendita" className="logo" />

      <h1 className="tittle-header">La Tiendita</h1>

      <nav className="nav-header">
        <Link to="/">Inicio</Link>
        <HashLink smooth to="/#categorias">
          Ir a Categorías
        </HashLink>

        <Link to="/carrito">
          Mi carrito{" "}
          {totalQuantity > 0 && (
            <span className="cart-count">{totalQuantity}</span>
          )}
        </Link>
      </nav>

      <div className="cart-icon">
        <Link to="/carrito">
          <img
            src={iconoCarrito}
            alt="Icono Carrito"
            className="icono-carrito"
          />
        </Link>
        <p className="cantidad-carrito">{totalQuantity}</p>
      </div>
    </header>
  );
}

export default Header;
