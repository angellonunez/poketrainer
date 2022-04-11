import React from "react";
  
class TeamBuilder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: []
    };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => response.json())
      .then(data => {
        let results = data.results;
        let promisesArray = results.map(result => {
          return fetch(result.url).then(response => response.json());
        });
        return Promise.all(promisesArray);
      })
      .then(data =>
        this.setState({ pokemons: data }, () =>
          console.log("Main Pokemon State: ", this.state.pokemons)
        )
      );
  }

  render() {
    return <PokeList pokemons={this.state.pokemons} />;
  }
}

const PokeList = ({ pokemons }) => {
  console.log(pokemons);

  if (pokemons.length === 0) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="poke-list">
      {pokemons.map(pokemon => (
        <Pokemon name={pokemon.name} sprite={pokemon.sprites.versions['generation-iii']['firered-leafgreen'].front_default} />
      ))}
    </div>
  );
};

export const Pokemon = ({ name, sprite }) => {
  return (
    <div className="poke-card" id="${name}" >
      {" "}
      <img alt="Pokemon sprite" src={sprite} />
      <h3>{name}</h3>{" "}
    </div>
  );
};

export default TeamBuilder