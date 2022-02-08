import store from '@/store';
import pokemon from '@/store/pokemon.js';

describe('Vue store', () => {

  test('should return the correct initial state', () => {

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

  test('setNextPage mutation works correctly', () => {

    const state = {
      page: 1,
      totalPages: 200,
    };

    pokemon.mutations.setNextPage(state);

    expect(state.page).toBe(2);
  });

  test('setPrevPage mutation works correctly', () => {
    
    const state = {
      page: 2,
    };

    pokemon.mutations.setPrevPage(state);

    expect(state.page).toBe(1);
  });

  test('setNextPage mutation doesnt go above the totalPages', () => {

    const state = {
      page: 10,
      totalPages: 10
    };

    pokemon.mutations.setNextPage(state);

    expect(state.page).toBe(10);
  });

  test('setPrevPage mutation doesnt go below 1', () => {

    const state = {
      page: 1
    };

    pokemon.mutations.setPrevPage(state);

    expect(state.page).toBe(1);
  });

  test('setPokemon mutation works correctly', () => {

    const pokemonFetched = ['testingmon'];
    const state = {
      pokemon: []
    };

    pokemon.mutations.setPokemon(state, pokemonFetched);;

    expect(state.pokemon).toBe(pokemonFetched);
  });

  test('totalPokemon mutation works correctly', () => {

    const totalPokemonOP = 150;
    const state = {
      totalPokemon: 0
    };

    pokemon.mutations.setTotalPokemon(state, totalPokemonOP);

    expect(state.totalPokemon).toBe(totalPokemonOP);
  });

  test('setTotalPages mutation works correctly', () => {
    const totalPokemonOP = 151;
    const state = {
      page_limit: 5,
      totalPages: 0
    };

    pokemon.mutations.setTotalPages(state, totalPokemonOP);

    expect(state.totalPages).toBe(31);
  });

  test('setPokemonDetails mutation works correctly', () => {

    const testingmon = {
      test: 'testProp'
    };
    const state = {
      pokemonDetails: {}
    };

    pokemon.mutations.setPokemonDetails(state, testingmon);

    expect(state.pokemonDetails).toBe(testingmon);
  });

  test('setPokemonDetailsCleared mutation works correctly', () => {

    const state =  {
      pokemonDetails: {
        name: 'testingmon', 
        testProp: 'test'
      }
    };

    pokemon.mutations.setPokemonDetailsCleared(state);

    expect(state.pokemonDetails).toEqual({});
  });

  test('setInitialPage mutation works correctly', () => {
    const state = {
      page: 12
    };

    pokemon.mutations.setInitialPage(state);

    expect(state.page).toBe(1);
  });

  test('setLastPage mutation works correctly', () => {

    const state = {
      page: 1,
      totalPages: 10
    };

    pokemon.mutations.setLastPage(state);

    expect(state.page).toBe(10);
  });

  test('switchLoading mutation changes false to true', () => {

    const state = {
      loading: false
    };

    pokemon.mutations.switchLoading(state);

    expect(state.loading).toEqual(true);
  });

  test('switchLoading mutation changes true back to false', () => {

    const state = {
      loading: true
    };

    pokemon.mutations.switchLoading(state);

    expect(state.loading).toEqual(false);
  });

  test('switchLanguage mutation changes en to es', () => {

    const state = {
      language: 'en'
    };

    pokemon.mutations.switchLanguage(state);

    expect(state.language).toBe('es');
  });

  test('switchLanguage mutation changes es back to en', () => {

    const state = {
      language: 'es'
    };

    pokemon.mutations.switchLanguage(state);

    expect(state.language).toBe('en');
  });

  test('getPokemon getter works correctly',() => {

    const state = {
      pokemon: [
        {
          name: 'testingmon'
        }
      ]
    };
    
    expect(pokemon.getters.getPokemon(state)).toEqual([
        {
          name: 'testingmon'
        }
    ]);
  });

  test('getPage getter works correctly', () => {

    const state = {
      page: 4
    };

    expect(pokemon.getters.getPage(state)).toEqual(4);
  });

  test('getTotalPages getter works correctly', () => {

    const state = {
      totalPages: 31
    };

    expect(pokemon.getters.getTotalPages(state)).toEqual(31);
  });

  test('getLoading getter works correctly', () => {

    const state = {
      loading: true
    };

    expect(pokemon.getters.getLoading(state)).toEqual(true);
  });

  test('getPokemonDetails getter works correctly', () => {
    const state = {
      pokemonDetails: {
        name: 'testingmon'
      }
    };

    expect(pokemon.getters.getPokemonDetails(state)).toEqual({
      name: 'testingmon'
    });
  });

  test('getLanguage getter works correcly', () => {

    const state = {
      language: 'en'
    };

    expect(pokemon.getters.getLanguage(state)).toEqual('en');
  });
});