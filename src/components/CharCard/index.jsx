const CharCard = ({ list }) => {
  return (
    <li>
      <img src={list.image} alt={list.name} />
      <h3>{list.name}</h3>
      <h3>{list.house}</h3>
    </li>
  );
};

export default CharCard;
