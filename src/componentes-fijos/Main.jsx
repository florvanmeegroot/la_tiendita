import React from "react";
import Card from "../componentes-variables/Card";
import Boton from "../componentes-variables/Boton";

function Main() {
  return (
    <main className="main">
      <Card
        imageUrl="../src/assets/img/producto1-negro.webp"
        title="Gorra Sport Negro"
        categoria="Accesorios"
      />
      <Card
        imageUrl="../src/assets/img/producto2-verde.webp"
        title="Gorra Sport Verde"
        categoria="Accesorios"
      />
      <Card
        imageUrl="./src/assets/img/producto3-violeta.webp"
        title="Gorra Sport Violeta"
        categoria="Accesorios"
      />

      <Card
        imageUrl="./src/assets/img/producto-4.webp"
        title="Zapatillas Converse Chuck Taylor All Star"
        categoria="Zapatillas"
      />

      <Card
        imageUrl="./src/assets/img/producto-5.webp"
        title="Zapatillas Converse Chuck Taylor All Star Rosa"
        categoria="Zapatillas"
      />

       <Card
        imageUrl="./src/assets/img/producto-6.webp"
        title="Zapatillas Converse Chuck Taylor All Star Rojo"
        categoria="Zapatillas"
      />

    </main>
  );
}

export default Main;
