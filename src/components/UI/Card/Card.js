import "./Card.scss";

const Card = (props) => {
  return (
    <div className={`card ${props.className}`}>
      <h1 className="card__title">{props.title}</h1>
      {props.children}
    </div>
  );
};

export default Card;
