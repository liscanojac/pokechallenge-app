<template>
  <div class="display flex flex-col justify-center items-center mt-12 px-6">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Pokedex msg="Choose a" msgTitle="Pokémon" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Pokedex from '@/components/Pokedex.vue'

export default {
  name: 'Home',
  components: {
    Pokedex
  }
}
</script>
