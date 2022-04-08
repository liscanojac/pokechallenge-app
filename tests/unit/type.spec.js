import { mount } from "@vue/test-utils";
import Type from '@/components/Type.vue';
import store from '@/store/index.js'
import { createStore } from 'vuex'

describe('Type component', () => {

  test('typeName prop gets rendered correctly', () => {

    const typeNameProp = 'normal'
    const wrapper = mount(Type, {
      props: {
        typeName: typeNameProp
      },
      global: {
        mocks: {
          $store: store
        }
      }
    });

    expect(wrapper.text()).toContain(typeNameProp);
  })

  test('Pokemon Types get the color correctly', () => {

    const allTypes = {
      fire: 'bg-red-500 text-white',
      grass: 'bg-green-400 text-white',
      poison: 'bg-purple-800 text-white',
      normal: 'text-black ring-2 ring-inset ring-black',
      fighting: 'bg-pink-300 text-white',
      flying: 'bg-blue-200 text-black',
      ground: 'bg-yellow-600 text-white',
      rock: 'bg-gray-400 text-white',
      bug: 'bg-green-300 text-white',
      ghost: 'bg-indigo-900 text-white',
      steel: 'bg-gray-300 text-black',
      electric: 'bg-yellow-300 text-black',
      dragon: 'bg-pink-800 text-white',
      dark: 'bg-black text-white',
      fairy: 'bg-pink-200 text-black',
      ice: 'bg-indigo-200 text-black',
      psychic: 'bg-pink-600 text-white',
      shadow: 'bg-gray-700 text-white',
      water: 'bg-blue-500 text-white'
    }

    for (const type in allTypes) {

      const typeNameProp = `${type}`

      const wrapper = mount(Type, {
        props: {
          typeName: typeNameProp
        },
        global: {
          mocks: {
            $store: store
          }
        }
      });

      const typeDiv = wrapper.get('#type-div');

      expect(typeDiv.classes()).toEqual(expect.arrayContaining(allTypes[type].split(' ')));
      }
  })

  test('Types in spanish are translated correctly', () => {

    const myStore = createStore({
      state: {
        language: 'es'
      },
      getters: {
        getLanguage: (state) => state.language
      }
    })
    const typesTranslation = {
      grass: "hierba",
      fire: "fuego",
      poison: "veneno",
      normal: "normal",
      fighting: "lucha",
      flying: "volador",
      ground: "tierra",
      rock: "roca",
      bug: "insecto",
      ghost: "fantasma",
      steel: "acero",
      dragon: "dragon",
      dark: "oscuro",
      fairy: "hada",
      ice: "hielo",
      psychic: "psiquico",
      shadow: "sombra",
      water: "agua",
      electric: "electrico",
    }

    for (const type in typesTranslation) {

      const typeNameProp = `${type}`
      const wrapper = mount(Type, {
        props: {
          typeName: typeNameProp
        },
        global: {
          mocks: {
            $store: myStore
          }
        }
      });

      const typeTitle = wrapper.get('#type-title')
      expect(typeTitle.text()).toBe(typesTranslation[type]);
    }
  })
})