<template>
  <label for="toggle-example" class="flex items-center cursor-pointer relative mb-4">
    <span class="mr-3 text-gray-900 text-sm font-medium">EN</span>
    <input :checked="getLanguage === 'es'" @click="changeLanguage()" type="checkbox" id="toggle-example" class="sr-only">
    <div id="toggle-bg" class="toggle-bg bg-emerald-200 border-2 border-gray-200 h-6 w-11 rounded-sm"></div>
    <span class="ml-3 text-gray-900 text-sm font-medium">ESP</span>
  </label>
</template>

<script>
import { mapActions, mapGetters } from "vuex";


export default {
  name: 'LanguageToggler',
  methods: {
    ...mapActions(["changeLanguage"]),
  },
  computed: mapGetters(["getLanguage"]),
}
</script>

<style scoped>
.toggle-bg:after {
    content: '';
    @apply absolute top-0.5 left-7 bg-orange-300 border border-orange-300 rounded-sm h-5 w-5 transition shadow-sm;
}

input:checked + .toggle-bg:after {
    transform: translateX(100%);
    @apply border-orange-300;
}

input:checked + .toggle-bg {
    @apply bg-emerald-600 border-emerald-600;
}
</style>