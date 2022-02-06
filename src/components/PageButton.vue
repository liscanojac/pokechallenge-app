<template>
  <button class="bg-yellow-200 border-4 border-yellow-600 rounded-md py-4" :class="getLoading && 'cursor-wait'" @click="{
    nextPage();
    fetchPokemon(getPage);
    }">{{buttonType}}</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'PageButton',
  props: {
    buttonType: String,
  },
  methods: {
    ...mapActions(["nextPage", "prevPage", "initialPage", "lastPage", "fetchPokemon"]),
  },
  computed: mapGetters(["getPage", "getLoading"])
}
</script>

<style>

</style>