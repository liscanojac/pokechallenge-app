import Vue from 'vue';
import Vuex from 'vuex';
import { mount } from "@vue/test-utils";
import Pokedex from '@/components/Pokedex.vue';
import pokemonStore from '@/store/pokemon.js';

Vue.use(Vuex);
const store = new Vuex.Store(pokemonStore);

test('renders props.msg correctly', () => {

  const msg = 'test msg';
  const wrapper = mount(Pokedex, {
    store,
    props: { msg }
  });
  const pokedexTitle = wrapper.get('[data-test="pokedex-title"]');

  expect(pokedexTitle.text()).toBe(msg);
});


