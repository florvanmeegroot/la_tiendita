import React, { useState } from "react";
import Card from "../componentes-variables/Card";
import productos from "../data/productos.json";
import Filtros from "./Filtros";

function Main() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  const productosFiltrados =
    categoriaSeleccionada === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <main className="main">
    <div id="categorias" className="botonera">
      {/* Filtros dinámicos */}
      <Filtros
        productos={productos}
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
      />
      </div>
      {/* Cards filtradas */}
      <div className="contenedor-cards">
        {productosFiltrados.map((item) => (
          <Card
            key={item.id}
            imageUrl={item.imageUrl}
            title={item.title}
            categoria={item.categoria}
            precio={item.precio}
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
