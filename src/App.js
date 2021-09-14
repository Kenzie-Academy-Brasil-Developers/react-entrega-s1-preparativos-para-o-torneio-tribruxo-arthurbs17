import { useEffect, useState } from "react";
import "./App.css";
import WelcomePage from "./components/WelcomePage";
import WizardsSelected from "./components/WizardsSelected";

function App() {
  const [students, setStudents] = useState([]);
  const [viewWizards, setViewWizards] = useState(false);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((erro) => console.log(erro));
  }, []);

  const showChamps = () => {
    setViewWizards(true);
  };
  const choiceAgain = () => {
    setViewWizards(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        {viewWizards === true ? (
          <WizardsSelected list={students} choiceAgain={choiceAgain} />
        ) : (
          <WelcomePage showChamps={showChamps} />
        )}
      </header>
    </div>
  );
}

export default App;
