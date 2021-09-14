import "./index.css";
const CharCard = ({ list }) => {
  let className = `card ${list.house}`;
  return (
    <li className={className}>
      <img src={list.image} alt={list.name} />
      <h3>{list.name}</h3>
      <h3>{list.house}</h3>
    </li>
  );
};

export default CharCard;
