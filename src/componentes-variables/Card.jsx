function Card(props) {
    return (
    <div className="card">
      <img src={props.imageUrl} alt={props.title} />
      <div className="card-content">
        <h2>{props.title}</h2>
        <h3>{props.description}</h3>
        <p>{props.categoria}</p>
      </div>
    </div>
    )
};

export default Card;

