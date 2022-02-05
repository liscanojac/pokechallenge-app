<template>
  <div class="rounded-md uppercase font-bold text-white py-1" :class="classColor[typeName]">
    <h4>{{typeName}}</h4>
  </div>
</template>

<script>


export default {
  name: 'Type',
  props: {
    typeName: String
  },
  data() {
    return {
      classColor: {
        fire: 'bg-red-500',
        grass: 'bg-green-400',
        poison: 'bg-purple-800',
        normal: 'text-black border-2 border-black',
        fighting: 'bg-pink-300',
        flying: 'bg-blue-200',
        ground: 'bg-yellow-600',
        rock: 'bg-gray-400',
        bug: 'bg-green-300',
        ghost: 'bg-indigo-900',
        steel: 'bg-gray-300 text-black',
        electric: 'bg-yellow-300 text-black',
        dragon: 'bg-pink-800',
        dark: 'bg-black',
        fairy: 'bg-pink 200 text-black',
        ice: 'bg-indigo-200 text-black',
        psychic: 'bg-pink-600',
        shadow: 'bg-gray-700'
      }
    };
  }
}
</script>

<style>

</style>