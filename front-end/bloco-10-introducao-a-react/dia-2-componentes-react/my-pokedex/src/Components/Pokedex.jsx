import React from "react";
import Pokemon from "./Pokemons";

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <>
        {pokemons.map((pokemon) => (
          <Pokemon poke={pokemon} />
        ))}
      </>
    )
  }
}

export default Pokedex;
