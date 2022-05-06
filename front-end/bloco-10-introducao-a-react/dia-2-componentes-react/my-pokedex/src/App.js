import './App.css';
import Pokedex from './Components/Pokedex';
import pokemons from './data';

function App() {
  return (
    <main>
      <Pokedex key={pokemons.id} pokemons={pokemons} />
    </main>
  );
}

export default App;
