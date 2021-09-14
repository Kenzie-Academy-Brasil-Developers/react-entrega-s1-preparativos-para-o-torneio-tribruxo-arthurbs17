const WelcomePage = ({ showChamps }) => {
  return (
    <div>
      <h1>Bem vindos ao Torneio Tribruxo!</h1>
      <p>Clique no botão para saber quais os campeões selecionados</p>
      <button onClick={() => showChamps()}>Começar!</button>
    </div>
  );
};

export default WelcomePage;
