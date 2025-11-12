import iconoTienda from "../assets/img/icono-tienda.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="icon-footer" src={iconoTienda} alt="icono tienda" />
      <p>Todos los derechos reservados | Copyright © 2025</p>
    </footer>
  );
}

export default Footer;
