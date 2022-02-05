<template>
  <div class="w-full bg-emerald-400 rounded-xl p-4">
    <div class="flex justify-center mb-2">
      <h1 class="w-full md:w-3/4 lg:w-1/2 bg-white text-center font-pokedex-title text-2xl border-4 border-gray-400 py-2">{{msg}} <span class="uppercase">{{msgTitle}}</span></h1>
    </div>
    <div :key="pokemon.id" class="flex justify-center" v-for="pokemon in getPokemon">
      <PokeCard :pokemon="pokemon" />
    </div>
    <div class="grid grid-cols-4 text-center">
      <PageButton buttonType="next" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PokeCard from './PokeCard.vue';
import PageButton from './PageButton.vue';


export default {
  name: 'Pokedex',
  components: {
    PokeCard,
    PageButton,
  },
  props: {
    msg: String,
    msgTitle: String,
  },
  methods: {
    ...mapActions(["fetchPokemon", "fetchTotalPokemon", "clearPokemonDetails"]),
  },
  computed: mapGetters(["getPage", "getPokemon"]),
  created() {
    this.fetchTotalPokemon();
    this.fetchPokemon();
  }
}
</script>
