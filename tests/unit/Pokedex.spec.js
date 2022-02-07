import { shallowMount, mount } from "@vue/test-utils";
import Pokedex from '@/components/Pokedex.vue';
import store from '@/store';

describe('Pokedex.vue', () => {

  it('renders props.msg correctly', () => {

    const msg = 'test msg';
    const wrapper = shallowMount(Pokedex, {
      props: { msg },
      global: {
        plugins: [store]
      }
    });
    const pokedexTitle = wrapper.get('[data-test="pokedex-title"]')
    expect(pokedexTitle.text()).toContain(msg);
  });

  it('renders props.msgTitle correctly', () => {

    const msgTitle ='test msgTitle';
    const wrapper = shallowMount(Pokedex, {
      props: { msgTitle },
      global: {
        plugins: [store]
      }
    });
    const pokedexTitle = wrapper.get('[data-test="pokedex-title"]')
    expect(pokedexTitle.text()).toContain(msgTitle);
  });

  // it('changes page correctly', () => {

  //   const wrapper = mount(Pokedex, {
  //     global: {
  //       plugins: [store]
  //     }
  //   });

  //   const nextPageButton = wrapper.get('#nextPageButton');

  //   nextPageButton.trigger('click');

  //   expect(store.state.pokemon.page).toBe(2);
  // })
});
