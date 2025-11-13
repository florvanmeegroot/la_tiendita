import React from "react";
import Card from "../componentes-variables/Card";

function Main() {
  return (
    <main className="main">
      <Card
        imageUrl="../src/assets/img/producto1-negro.webp"
        title="Negro"
        description="Contenido de la tarjeta"
        categoria="Categoria 1"
      />
      <Card
        imageUrl="../src/assets/img/producto2-verde.webp"
        title="Verde"
        description="Más contenido aquí"
        categoria="Categoria 2"
      />
      <Card
        imageUrl="./src/assets/img/producto3-violeta.webp"
        title="Violeta"
        description="Tercer contenido aquí"
        categoria="Categoria 3"
      />

            <Card
        imageUrl="./src/assets/img/producto3-violeta.webp"
        title="Violeta"
        description="Tercer contenido aquí"
        categoria="Categoria 3"
      />

            <Card
        imageUrl="./src/assets/img/producto3-violeta.webp"
        title="Violeta"
        description="Tercer contenido aquí"
        categoria="Categoria 3"
      />
    </main>
  );
}

export default Main;
