import "./Card.css";

export default function Card({ name, style }) {
  return <p className="card" style={style}>{name}</p>;
}
