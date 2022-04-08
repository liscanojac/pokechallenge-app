import { mount } from "@vue/test-utils";
import LanguageToggler from '@/components/LanguageToggler.vue';
import { createStore } from "vuex";

describe('LanguageToggler component', () => {

  test('LanguageToggler changes the language state correctly', async () => {

    const myStore = createStore({
      state: {
        language: 'en'
      },
      getters: {
        getLanguage: (state) => state.language
      },
      mutations: {
        switchLanguage: (state) => state.language === 'en' ? state.language = 'es' : state.language = 'en'
      },
      actions: {
        changeLanguage({ commit }) {
          commit("switchLanguage");
        }
      }
    })
    const wrapper = mount(LanguageToggler, { global: { mocks: { $store: myStore }}});

    const toggler = wrapper.get('#toggle-example')


    await toggler.trigger('click');

    expect(myStore.state.language).toEqual('es')
  })

  test('LanguageToggler changes the language state back correctly', async () => {

    const myStore = createStore({
      state: {
        language: 'en'
      },
      getters: {
        getLanguage: (state) => state.language
      },
      mutations: {
        switchLanguage: (state) => state.language === 'en' ? state.language = 'es' : state.language = 'en'
      },
      actions: {
        changeLanguage({ commit }) {
          commit("switchLanguage");
        }
      }
    })
    const wrapper = mount(LanguageToggler, { global: { mocks: { $store: myStore }}});

    const toggler = wrapper.get('#toggle-example')


    await toggler.trigger('click');
    await toggler.trigger('click');

    expect(myStore.state.language).toEqual('en')
  })
})