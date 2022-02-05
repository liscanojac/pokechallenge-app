<template>
  <div class="flex flex-col md:flex-row md:justify-between items-center p-4 bg-white border-2 border-yellow-500 mb-2 w-full md:w-3/4 rounded-lg shadow-lg">
    <div class="grid grid-cols-2 gap-2 text-center order-2 md:order-1">
      <div>
        <h3>No {{pokemon.id}}</h3>
      </div>
      <div>
        <h1 class="uppercase font-bold">{{pokemon.name}}</h1>
      </div>
      <div>
        <h3>HT</h3>
      </div>
      <div>
        <h3>{{pokemon.height}} ft.</h3>
      </div>
      <div>
        <h3>WT</h3>
      </div>
      <div>
        <h3>{{pokemon.weight}} lbs.</h3>
      </div>
      <div :key="type.url" v-for="type in pokemon.types">
        <Type :typeName="type.name" />
      </div>
    </div>
    <img class="w-20 mb-4 order-1 md:order-2 md:mb-0 md:mr-8" :src="pokemon.gif_front" alt="poke-gif">
  </div>
</template>

<script>
import Type from './Type.vue';

export default {
  name: 'PokeCard',
  props: {
    pokemon: Object,
  },
  components: {
    Type
  }
}
</script>

<style>

</style>