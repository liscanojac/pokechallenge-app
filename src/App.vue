<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="font-pokedex">
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=VT323&display=swap');

body {
  background-image: url('assets/pokemon_background.jpg');
  background-position: center;
  background-repeat: unset;
  /* font-family: 'DotGothic16', sans-serif; */
}
/* .pokedex-title {
  font-family: 'VT323', monospace;
} */
</style>
