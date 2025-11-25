import Boton from "./Boton";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <p className="categoria">{props.categoria}</p>
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-content">
        <h2 className="titulo-card">{props.title}</h2>
        <p className="precio">${props.precio}</p>

      <button className="btn-card">
        <Link
          className="ver-mas"
          to={`/producto/${props.id}`}
          state={{ producto: props }}
        >
        Ver detalles
        </Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
