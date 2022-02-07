<template>
  <div class="display flex flex-col justify-center items-center mt-12 px-6">
    <div class="w-full bg-emerald-400 rounded-xl p-4">
      <div class="flex justify-center mb-2">
        <div class="w-full md:w-3/4 lg:w-1/2 bg-white text-center border-4 border-gray-400 ring-2 ring-inset ring-gray-300">
          <h1 class="font-pokedex-title text-2xl uppercase py-2">
            {{language[getLanguage].msg}}
          </h1>
          <div class="flex justify-center">
            <LanguageToggler />
          </div>
        </div>
      </div>
      <div class="my-6 flex justify-center">
        <div class="flex flex-col items-center w-full bg-white border-4 border-yellow-500 md:w-3/4 rounded-lg shadow-lg ring-2 ring-inset ring-orange-300 p-4">
          <img src="@/assets/lost.png" alt="lost-img">
          <router-link class="bg-yellow-200 border-4 border-yellow-600 rounded-md py-4 px-7 ml-1 mr-2 flex justify-center mt-2 uppercase font-pokedex font-bold" :class="[getLanguage === 'en' && 'tracking-widest']" :to="{ name: 'Home' }">
            {{language[getLanguage].homeBtn}}
          </router-link>
        </div>
      </div>
      <div class="flex justify-center">
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import LanguageToggler from './LanguageToggler.vue';


export default {
  name: 'Lost',
  components: {
    LanguageToggler,
  },
  computed: mapGetters(["getLanguage"]),
  data() {
    return {
      language: {
        en: {
          msg: "Are you lost kid? Because this path doesn't exist",
          homeBtn: "home"
        },
        es: {
          msg: "Estás perdido chico? Porque esta ruta no existe",
          homeBtn: "inicio"
        }
      }
    }
  }
}
</script>

