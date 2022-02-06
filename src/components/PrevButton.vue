<template>
  <button class="bg-yellow-200 border-4 border-yellow-600 rounded-md py-4 ml-2 mr-1" :class="getLoading && 'cursor-wait'" @click="{
    prevPage();
    fetchPokemon(getPage);
    }">{{buttonType}}</button>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'PrevButton',
  props: {
    buttonType: String,
  },
  methods: {
    ...mapActions(["nextPage", "prevPage", "initialPage", "lastPage", "fetchPokemon"]),
  },
  computed: mapGetters(["getPage", "getLoading"])
}
</script>