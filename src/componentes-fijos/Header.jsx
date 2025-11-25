import { Link } from "react-router-dom";
import { useCart } from "../componentes-variables/CartContext";

function Header() {
  const { cart } = useCart();

  return (
    <header className="header">
      <img
        src="../src/assets/img/icono-tienda.png"
        alt="Logo Tiendita"
        className="logo"
      />

      <h1 className="tittle-header">La Tiendita</h1>

      <nav className="nav-header">
        <Link to="/">Inicio</Link>
        <a href="/#categorias">Categorías</a>
        <Link to="/contacto">Contacto</Link>
        <Link to="/carrito">Mi Carrito</Link>
      </nav>
      <div className="cart-icon">
        <Link to="/carrito">
          <img
            src="../src/assets/img/icono-carrito.png"
            alt="Icono Carrito"
            className="icono-carrito"
          />
        </Link>
        <p className="cantidad-carrito">{cart.length}</p>
      </div>
    </header>
  );
}

export default Header;
