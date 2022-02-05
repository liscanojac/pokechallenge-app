import axios from "axios";

const state = {
  pokemon: [],
  page: 1,
};

const getters = {
  getPokemon: (state) => state.pokemon,
  getPage: (state) => state.page,
};

const actions = {
  async fetchPokemon({ commit }, page) {
    let offset = (page * 5) - 5;

    const response = await axios(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${offset}`)
      .then(res => res.data.results)
      .catch((e) => console.log(e));

    let pokemons = [];

    for (let i = 0; i < response.length; i++) {

      let allPokemonDetails = await axios(response[i].url)
        .then(res => res.data)
        .catch(e => console.log(e));
      
      
      let pokemonUsefulDeatils = {
        name: allPokemonDetails.name,
        id: allPokemonDetails.id,
        abilities: allPokemonDetails.abilities.map(ability => ability.ability),
        svg_image: allPokemonDetails.sprites.other.dream_world.front_default,
        gif_front: allPokemonDetails['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
        gif_back: allPokemonDetails['sprites']['versions']['generation-v']['black-white']['animated']['back_default'],
        types: allPokemonDetails.types.map(type => type.type),
        weight: allPokemonDetails.weight,
        height: allPokemonDetails.height,
      };
      
      pokemons.push(pokemonUsefulDeatils);
    }
    commit("setPokemon", pokemons);
  },
  nextPage({ commit }) {
    commit("setNextPage");
  },
  prevPage({ commit }) {
    commit("setPrevPage");
  }
}

const mutations = {
  setPokemon: (state, pokemon) => (state.pokemon = pokemon),
  setNextPage: (state) => state.page = state.page + 1,
  setPrevPage: (state) => state.page = state.page--,
}

export default {
  state,
  getters,
  actions,
  mutations
}