function Filtros({
  productos,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}) {
  const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))];

  return (
    <div className="filtros">
      {categorias.map((cat) => (
        <button
          key={cat}
          className={categoriaSeleccionada === cat ? "activo" : ""}
          onClick={() => setCategoriaSeleccionada(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filtros;
