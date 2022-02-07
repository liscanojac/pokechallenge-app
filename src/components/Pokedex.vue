<template>
  <div class="w-full bg-emerald-400 rounded-xl p-4">
    <div class="flex justify-center mb-2">
      <div class="w-full md:w-3/4 lg:w-1/2 bg-white text-center border-4 border-gray-400 ring-2 ring-inset ring-gray-300">
        <h1 data-test="pokedex-title" class="font-pokedex-title text-2xl py-2">
          {{msg}} <span class="uppercase">{{msgTitle}}</span>
        </h1>
        <div class="flex justify-center">
          <LanguageToggler />
        </div>
      </div>
    </div>
    <div v-if="getLoading" class="flex w-full justify-center">
      <img class="h-40" src="@/assets/loading-gif.gif" alt="loading-gif">
    </div>
    <div v-else>
      <div :key="pokemon.id" class="flex justify-center" v-for="pokemon in getPokemon">
        <PokeCard :pokemon="pokemon" />
      </div>
    </div>
    <div class="grid grid-cols-4 text-center w-full md:w-3/4 mx-auto">
      <FirstPageButton />
      <PrevButton />
      <NextButton />
      <LastPageButton />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PokeCard from './PokeCard.vue';
import NextButton from './NextButton.vue';
import PrevButton from './PrevButton.vue';
import LastPageButton from './LastPageButton.vue';
import FirstPageButton from './FirstPageButton.vue';
import LanguageToggler from './LanguageToggler.vue';


export default {
  name: 'Pokedex',
  components: {
    PokeCard,
    NextButton,
    PrevButton,
    LastPageButton,
    FirstPageButton,
    LanguageToggler,
  },
  props: {
    msg: String,
    msgTitle: String,
  },
  methods: {
    ...mapActions(["fetchPokemon", "fetchTotalPokemon", "clearPokemonDetails"]),
  },
  computed: mapGetters(["getPokemon", "getPage", "getLoading"]),
  created() {
    this.fetchTotalPokemon();
    this.fetchPokemon(this.getPage);
    this.clearPokemonDetails();
  }
}
</script>


