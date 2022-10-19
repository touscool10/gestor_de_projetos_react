import './App.css';

const App =  () => {

  const url = 'https://via.placeholder.com/150';

  const name = 'Sètondé';
  return (
    <div className="App">
      <header>Oi { name }</header>
      <br />
      <img src={url} alt="Minha Imagem" />
    </div>
  );
}

export default App;
