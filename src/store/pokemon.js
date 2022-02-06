import axios from "axios";

const state = {
  pokemon: [],
  page: 1,
  page_limit: 5,
  totalPokemon: 0,
  totalPages: 0,
  pokemonDetails: {},
  loading: false,
};

const getters = {
  getPokemon: (state) => state.pokemon,
  getPage: (state) => state.page,
  getTotalPages: (state) => state.totalPages,
  getLoading: (state) => state.loading,
};

const actions = {
  async fetchPokemon({ commit }, page) {
    let offset = (page * state.page_limit) - state.page_limit;
    commit("switchLoading");

    const response = await axios(`https://pokeapi.co/api/v2/pokemon?limit=${state.page_limit}&offset=${offset}`)
      .then(res => res.data.results)
      .catch((e) => console.log(e));

    let pokemons = [];

    for (let i = 0; i < response.length; i++) {

      let pokemonFullDetails = await axios(response[i].url)
        .then(res => res.data)
        .catch(e => console.log(e));
      
      
      let pokemonUsefulDeatils = {
        name: pokemonFullDetails.name,
        id: pokemonFullDetails.id,
        abilities: pokemonFullDetails.abilities.map(ability => ability.ability),
        svg_image: pokemonFullDetails.sprites.other.dream_world.front_default,
        gif_front: pokemonFullDetails['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
        gif_back: pokemonFullDetails['sprites']['versions']['generation-v']['black-white']['animated']['back_default'],
        types: pokemonFullDetails.types.map(type => type.type),
        weight: pokemonFullDetails.weight,
        height: pokemonFullDetails.height,
        // descriptionUrl: pokemonFullDetails.species.url,
      };
      
      pokemons.push(pokemonUsefulDeatils);
    }
    commit("setPokemon", pokemons);
    commit("switchLoading");
  },
  nextPage({ commit }) {
    commit("setNextPage");
  },
  prevPage({ commit }) {
    commit("setPrevPage");
  },
  initialPage({ commit }) {
    commit("setInitialPage");
  },
  lastPage({ commit }) {
    commit("setLastPage");
  },
  async fetchTotalPokemon({ commit }) {

    try {

      let response = await axios('https://pokeapi.co/api/v2/pokemon');

      let totalPokemon = response.data.count;

      commit("setTotalPokemon", totalPokemon);
      commit("setTotalPages", totalPokemon);

    } catch(err) {
      console.log(err);
    }
  },
  async fetchPokemonDetails({ commit }, id) {

    const pokemonFullDetails = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
    
    const fullDescription = await axios(pokemonFullDetails.species.url)
      .then(res => res.data)
      .catch(err => console.log(err));

    let full_en_description = fullDescription.flavor_text_entries.find(entry => entry.language.name === "en");

    let description_en = full_en_description.flavor_text.replace(/(\r\n|\n|\r)/gm, " ");

    let full_es_description = fullDescription.flavor_text_entries.find(entry => entry.language.name === "es");

    let description_es = full_es_description.flavor_text.replace(/(\r\n|\n|\r)/gm, " ");



    let pokemonUsefulDeatils = {
      name: pokemonFullDetails.name,
      id: pokemonFullDetails.id,
      abilities: pokemonFullDetails.abilities.map(ability => ability.ability),
      svg_image: pokemonFullDetails.sprites.other.dream_world.front_default,
      gif_front: pokemonFullDetails['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
      gif_back: pokemonFullDetails['sprites']['versions']['generation-v']['black-white']['animated']['back_default'],
      types: pokemonFullDetails.types.map(type => type.type),
      weight: pokemonFullDetails.weight,
      height: pokemonFullDetails.height,
      base_happiness: fullDescription.base_happiness,
      capture_rate: fullDescription.capture_rate,
      description_en,
      description_es,
      growth_rate: fullDescription.growth_rate.name,
      is_legendary: fullDescription.is_legendary,
      is_mythical: fullDescription.is_mythical,
      shape: fullDescription.shape.name,
    };

    commit("setPokemonDetails", pokemonUsefulDeatils);
  },
  clearPokemonDetails({ commit }) {
    commit("setPokemonDetailsCleared");
  },
}

const mutations = {
  setPokemon: (state, pokemon) => (state.pokemon = pokemon),
  setNextPage: (state) => state.page = state.page + 1,
  setPrevPage: (state) => state.page = state.page--,
  setTotalPokemon: (state, totalPokemon) => state.totalPokemon = totalPokemon,
  setTotalPages: (state, totalPokemon) => state.totalPages = Math.ceil(totalPokemon / state.page_limit),
  setPokemonDetails: (state, pokemon) => state.pokemonDetails = pokemon,
  setPokemonDetailsCleared: (state) => state.pokemonDetails = {},
  setInitialPage: (state) => state.page = 1,
  setLastPage: (state) => state.page = state.totalPages,
  switchLoading: (state) => state.loading = !state.loading,
}

export default {
  state,
  getters,
  actions,
  mutations
}