import Boton from "./Boton";

function Card(props) {
  return (
    <div className="card">
      <p className="categoria">{props.categoria}</p>
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-content">
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
        <h4>${props.precio}</h4>

        <Boton text="Ver detalles" />
      </div>
    </div>
  );
}

export default Card;
