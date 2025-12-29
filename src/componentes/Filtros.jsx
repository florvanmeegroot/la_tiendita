function Filtros({
  productos,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}) {
  const categorias = [
    { id: "todos", nombre: "Todos" },
    ...Array.from(
      new Set(productos.map((p) => p.categoriaId))
    ).map((cat) => ({
      id: cat,
      nombre: cat,
    })),
  ];

  return (
    <div className="filtros">
      {categorias.map((cat) => (
        <button
          key={cat.id}
          className={categoriaSeleccionada === cat.id ? "activo" : ""}
          onClick={() => setCategoriaSeleccionada(cat.id)}
        >
          {cat.nombre}
        </button>
      ))}
    </div>
  );
}

export default Filtros;