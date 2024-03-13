import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(null);

  const resApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');

    const charactersApi = await api.json();
    setCharacters(charactersApi.results);
  
    // console.log(characters)
  }
  console.log(characters)
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Rick & Morty </h1>
      <img src={imageRickMorty} alt="Rick & Morty" className="img-home"></img>
      <button onClick={resApi} className="btn-search">
      Buscar Personajes</button>
      </header>
    </div>
  );
}

export default App;
