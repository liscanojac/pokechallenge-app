<template>
  <div class="display flex flex-col justify-center items-center mt-12 px-6">
    <PokeDetails />
  </div>
  <!-- <div class="text-white text-4xl">{{getPokemonDetails.name}}</div> -->
</template>

<script>
import { mapActions } from "vuex";
import PokeDetails from '@/components/PokeDetails.vue';

export default {
  name: 'Details',
  components: {
    PokeDetails,
  },
  data() {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    ...mapActions(["fetchPokemonDetails"]),
  },
  created() {
    this.fetchPokemonDetails(this.id);
  }
}
</script>

<style>

</style>