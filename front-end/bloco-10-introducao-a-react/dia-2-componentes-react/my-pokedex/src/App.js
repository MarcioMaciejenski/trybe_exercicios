import './App.css';
import Pokedex from './Components/Pokedex';
import pokemons from './data';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Pokedex key={pokemons.id} pokemons={pokemons} />
      </main>
    </>
  );
}

export default App;
