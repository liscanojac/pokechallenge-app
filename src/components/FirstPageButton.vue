<template>
  <button :disabled="getLoading" class="bg-yellow-200 border-4 border-yellow-600 rounded-md py-4 flex justify-center" :class="getLoading && 'cursor-wait'" @click="{
    initialPage();
    fetchPokemon(getPage);
    }">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
      </svg>
    </button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'FirstPageButton',
  methods: {
    ...mapActions(["nextPage", "prevPage", "initialPage", "lastPage", "fetchPokemon"]),
  },
  computed: mapGetters(["getPage", "getLoading"])
}
</script>