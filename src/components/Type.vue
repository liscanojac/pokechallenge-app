<template>
  <div class="rounded-md uppercase font-bold p-1 text-center" :class="classColor[typeName]">
    <h4>{{language[getLanguage][typeName]}}</h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Type',
  props: {
    typeName: String,
  },
  computed: mapGetters(["getLanguage"]),
  data() {
    return {
      classColor: {
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
      },
      language: {
        en: {
          [this.typeName]: this.typeName
        },
        es: {
          grass: "hierba",
          fire: "fuego",
          poison: "veneno",
          normal: this.typeName,
          fighting: "lucha",
          flying: "volador",
          ground: "tierra",
          rock: "roca",
          bug: "insecto",
          ghost: "fantasma",
          steel: "acero",
          dragon: this.typeName,
          dark: "oscuro",
          fairy: "hada",
          ice: "hielo",
          psychic: "psiquico",
          shadow: "sombra",
          water: "agua",
          electric: "electrico",
        }
      }
    };
  }
}
</script>
