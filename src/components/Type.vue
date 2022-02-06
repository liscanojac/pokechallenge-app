<template>
  <div class="rounded-md uppercase font-bold p-1 text-center" :class="classColor[typeName]">
    <h4>{{typeName}}</h4>
  </div>
</template>

<script>


export default {
  name: 'Type',
  props: {
    typeName: String,
  },
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
      }
    };
  }
}
</script>
