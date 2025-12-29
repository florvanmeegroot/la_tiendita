import { useState, useEffect } from "react";
import Card from "./Card";
import Filtros from "./Filtros";

function Main() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("/src/data/productos.json");
        const data = await response.json();
        setProductos(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar productos:", error);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  const productosFiltrados =
    categoriaSeleccionada === "todos"
      ? productos
      : productos.filter((p) => p.categoriaId === categoriaSeleccionada);

  return (
    <main className="main">
      <div id="categorias" className="botonera">
        <Filtros
          productos={productos}
          categoriaSeleccionada={categoriaSeleccionada}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
      </div>

      <div className="contenedor-cards">
        {productosFiltrados.map((item) => (
          <Card
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            precio={item.precio}
            id={item.id}
            description={item.description}
            categoriaId={item.categoriaId}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
