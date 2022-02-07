import store from '@/store';
// import pokemon from '@/store/pokemon.js';

describe('Vue store', () => {

  it('should return the correct initial state', () => {

    const initialState = {
      pokemon: [],
      page: 1,
      page_limit: 5,
      totalPokemon: 0,
      totalPages: 0,
      pokemonDetails: {},
      loading: false,
      language: 'en',
    };
    expect(store.state).toEqual({ pokemon: initialState });
  });
});