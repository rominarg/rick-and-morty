// import imageRickMorty from "./img/rick-morty.png";
import imageRickMorty from "./img/rick-morty.webp";
import "./App.css";

// Importamos el hook useState desde React para manejar el estado de los personajes
import { useState } from "react";

// Importamos el componente Characters
import Characters from "./components/Characters";

function App() {
  // Definimos el estado de los personajes usando el hook useState
  const [characters, setCharacters] = useState(null);

  // Función para realizar la solicitud a la API y obtener los personajes
  const resApi = async () => {
    // Realizamos la solicitud a la API
    const api = await fetch('https://rickandmortyapi.com/api/character');

    // Convertimos la respuesta de la API a formato JSON
    const charactersApi = await api.json();

    // Actualizamos el estado de los personajes con los datos obtenidos de la API
    setCharacters(charactersApi.results);
  }

  // Renderizamos el componente App
  return (
    <div className="App">
      <header className="App-header">
        {/* Título del proyecto */}
        <h1 className="title">Rick & Morty</h1>

        {/* Condicional para renderizar el componente Characters o el botón para buscar personajes */}
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            {/* Imagen de Rick & Morty / Ternario*/}
            <img src={imageRickMorty} alt="Rick & Morty" className="img-home" />

            {/* Botón para buscar personajes */}
            <button onClick={resApi} className="btn-search rounded-button">
              Buscar personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
