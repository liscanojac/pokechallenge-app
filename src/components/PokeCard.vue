<template>
  <router-link class="flex flex-col md:flex-row md:justify-between items-center p-4 bg-white border-2 border-yellow-500 mb-2 w-full md:w-3/4 rounded-lg shadow-lg" :to="{ name: 'Details', params: { id: pokemon.id } }">
  <!-- <div class="flex flex-col md:flex-row md:justify-between items-center p-4 bg-white border-2 border-yellow-500 mb-2 w-full md:w-3/4 rounded-lg shadow-lg"> -->
    <div class="grid grid-cols-2 gap-2 text-center order-2 md:order-1">
      <div>
        <h3>No {{pokemon.id}}</h3>
      </div>
      <div>
        <h1 class="uppercase font-bold">{{pokemon.name}}</h1>
      </div>
      <div>
        <h3 class="uppercase">{{language[getLanguage].height}}</h3>
      </div>
      <div>
        <h3>{{pokemon[language[getLanguage].height_unit_conversion]}} {{language[getLanguage].height_unit}}</h3>
      </div>
      <div>
        <h3 class="uppercase">{{language[getLanguage].weight}}</h3>
      </div>
      <div>
        <h3>{{pokemon[language[getLanguage].weight_unit_conversion]}} {{language[getLanguage].weight_unit}}</h3>
      </div>
      <div :key="type.url" v-for="type in pokemon.types">
        <Type :typeName="type.name" />
      </div>
    </div>
    <img class="w-20 mb-4 order-1 md:order-2 md:mb-0 md:mr-8" :src="pokemon.gif_front || pokemon.image_front" alt="poke-gif">
  <!-- </div> -->
  </router-link>
</template>

<script>
import Type from './Type.vue';
import { mapGetters } from "vuex";

export default {
  name: 'PokeCard',
  props: {
    pokemon: Object,
  },
  components: {
    Type
  },
  computed: mapGetters(["getLanguage"]),
  data() {
    return {
      language: {
        en: {
          height: "height",
          height_unit: "ft.",
          weight: "weight",
          weight_unit: "lbs.",
          weight_unit_conversion: "weight",
          height_unit_conversion: "height",
        },
        es: {
          height: "altura",
          height_unit: "cms.",
          weight: "peso",
          weight_unit: "kgs",
          weight_unit_conversion: "weight_kgs",
          height_unit_conversion: "height_cms",
        }
      }
    }
  }
}
</script>

<style>

</style>