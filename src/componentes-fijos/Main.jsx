import React, { useState, useEffect } from "react";
import Card from "../componentes-variables/Card";
import Filtros from "./Filtros";

function Main() {
  const [productos, setProductos] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("src/data/productos.json"); 
        const data = await response.json();
        setProductos(data);
        setLoading(false);
      } catch (error) {
        console.error("Lo siento, hay un error al cargar los productos:", error);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

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
            categoria={item.categoria}
            precio={item.precio}
            id={item.id}   
            description={item.description}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;

