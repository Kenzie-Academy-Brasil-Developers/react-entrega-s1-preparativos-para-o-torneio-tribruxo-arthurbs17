import { useState } from "react";
import CharCard from "../CharCard";

const WizardsSelected = ({ list, choiceAgain }) => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 11));
  const [pickedWizards, setPickedWizards] = useState([]);
  const [loop, setLoop] = useState(0);

  const selectedRandom = () => {
    setNumber(Math.floor(Math.random() * 11));

    if (
      pickedWizards.every(
        (char) =>
          char.name !== list[number].name && char.house !== list[number].house
      )
    ) {
      setPickedWizards([...pickedWizards, list[number]]);
      setLoop(loop + 1);
    }
  };

  if (loop < 3) {
    selectedRandom();
  }

  return (
    <div>
      <h1>Esses são seus campeões</h1>
      <ul>
        {pickedWizards.map((char, index) => (
          <CharCard list={char} key={index} />
        ))}
      </ul>
      <button onClick={() => choiceAgain()}>Escolher novamente</button>
    </div>
  );
};

export default WizardsSelected;
