import { shallowMount } from "@vue/test-utils";
import store from "../../src/store";
import NextButton from '@/components/NextButton.vue';

describe('NextButton.vue', () => {
  it('changes page correctly', () => {

    const wrapper = shallowMount(NextButton, {
      global: {
        plugins: [store]
      }
    });

    const nextPageButton = wrapper.get('#nextPageButton');

    nextPageButton.trigger('click');

    expect(store.state.pokemon.page).toBe(2);
  })
})