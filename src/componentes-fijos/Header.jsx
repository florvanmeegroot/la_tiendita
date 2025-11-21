function Header() {
  return (
    <header className="header">
      <img
        src="../src/assets/img/icono-tienda.png"
        alt="Logo Tiendita"
        className="logo"
      />
      <h1 className="tittle-header">La Tiendita</h1>
      <nav className="nav-header">
        <a href="#">Inicio</a>
        <a href="#categorias">Categorias</a>
        <a href="#">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;
