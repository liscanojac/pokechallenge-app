<template>
  <label for="toggle-example" class="flex items-center cursor-pointer relative mb-4">
    <span class="mr-3 text-gray-900 text-sm font-medium">EN</span>
    <input @click="changeLanguage()" type="checkbox" id="toggle-example" class="sr-only">
    <div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-sm"></div>
    <span class="ml-3 text-gray-900 text-sm font-medium">ESP</span>
  </label>
</template>

<script>
import { mapActions } from "vuex";


export default {
  name: 'LanguageToggler',
  methods: {
    ...mapActions(["changeLanguage"]),
  },
}
</script>

<style scoped>
.toggle-bg:after {
    content: '';
    @apply absolute top-0.5 left-7 bg-white border border-gray-300 rounded-sm h-5 w-5 transition shadow-sm;
}

input:checked + .toggle-bg:after {
    transform: translateX(100%);
    @apply border-white;
}

input:checked + .toggle-bg {
    @apply bg-blue-600 border-blue-600;
}
</style>