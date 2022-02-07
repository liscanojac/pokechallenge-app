<template>
  <div class="w-full bg-emerald-400 rounded-xl p-4">
    <div class="w-full flex justify-center" v-if="getLoading">
      <img class="h-40" src="@/assets/loading-gif.gif" alt="loading-gif">
    </div>
    <div v-else>
      <div class="flex justify-center mb-2">
        <div class="w-full md:w-3/4 lg:w-1/2 bg-white text-center border-4 border-gray-400 ring-2 ring-inset ring-gray-300">
          <h1 class="font-pokedex-title text-2xl uppercase py-2">
            {{getPokemonDetails.name}}
          </h1>
          <div class="flex justify-center">
            <LanguageToggler />
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-col items-center p-4 bg-white border-4 border-yellow-500 mb-2 w-full md:w-3/4 rounded-lg shadow-lg ring-2 ring-inset ring-orange-300">
          <img class="h-64 mb-10" :src="getPokemonDetails.svg_image || getPokemonDetails.official_artwork" alt="pokemon-image">
          <div class="grid grid-cols-1 md:grid-cols-2 w-full mb-4 gap-y-3">
            <div class="col-span-2 md:col-span-1">
              <div class="grid grid-cols-2 gap-2">
                <div class="w-full text-center text-lg bg-gray-500 text-white rounded-lg px-2 font-medium">No</div>
                <div class="text-lg font-medium">{{getPokemonDetails.id}}</div>
                <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">{{language[getLanguage].name_title}}</div>
                <div class="text-lg font-medium uppercase">{{getPokemonDetails.name}}</div>
                <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">{{language[getLanguage].weight_title}}</div>
                <div class="text-lg font-medium uppercase">{{getPokemonDetails[language[getLanguage].weight_unit_conversion]}} {{language[getLanguage].weight_unit}}</div>
                <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">{{language[getLanguage].height_title}}</div>
                <div class="text-lg font-medium uppercase">{{getPokemonDetails[language[getLanguage].height_unit_conversion]}} {{language[getLanguage].height_unit}}</div>
                <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">{{language[getLanguage].shape_title}}</div>
                <div class="text-lg font-medium uppercase">{{getPokemonDetails.shape}} pokémon</div>
              </div>
            </div>
            <div class="col-span-2 md:col-span-1">
              <div class="grid grid-col-2 gap-2">
                <div class="col-span-2 w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">
                  <h4>{{language[getLanguage].type_title}}</h4>
                </div>
                <div :key="type.url" v-for="type in getPokemonDetails.types">
                  <Type :typeName="type.name" />
                </div>
                <div class="col-span-2 w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">
                  <h4>{{language[getLanguage].ability_title}}</h4>
                </div>
                <div :key="ability.url" v-for="ability in getPokemonDetails[language[getLanguage].abilities_language]">
                  <Ability :abilityName="ability.name" />
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 w-full mb-4 gap-3">
            <div>
              <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase mb-2">
                <h4>{{language[getLanguage].happiness_title}}</h4>
              </div>
              <div class="h-3 relative">
                <div class="w-full h-full bg-gray-200 absolute"></div>
                <div class="h-full bg-green-500 absolute" :style="{'width':getPokemonDetails.base_happiness + '%'}"></div>
              </div>
            </div>
            <div>
              <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase mb-2">
                <h4>{{language[getLanguage].capture_rate_title}}</h4>
              </div>
              <div class="h-3 relative">
                <div class="w-full h-full bg-gray-200 absolute"></div>
                <div class="h-full bg-orange-500 absolute" :style="{'width':getPokemonDetails.capture_rate + '%'}"></div>
              </div>
            </div>
          </div>
          <div class="w-full p-4 text-lg">
            <p>{{getPokemonDetails[language[getLanguage].description]}}</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Type from './Type.vue';
import Ability from './Ability.vue';
import LanguageToggler from './LanguageToggler.vue';

export default {
  name: 'PokeDetails',
  components: {
    Type,
    Ability,
    LanguageToggler,
  },
  computed: mapGetters(["getPokemonDetails", "getLanguage", "getLoading"]),
  data() {
    return {
      language: {
        en: {
          description: "description_en",
          name_title: "name",
          weight_title: "weight",
          weight_unit: "lbs.",
          weight_unit_conversion: "weight",
          height_title: "height",
          height_unit: "ft.",
          height_unit_conversion: "height",
          shape_title: "shape",
          type_title: "type",
          ability_title: "ability",
          abilities_language: "abilities",
          happiness_title: "happiness",
          capture_rate_title: "capture rate",
        },
        es: {
          description: "description_es",
          name_title: "nombre",
          weight_title: "peso",
          weight_unit: "kgs.",
          weight_unit_conversion: "weight_kgs",
          height_title: "altura",
          height_unit: "cms.",
          height_unit_conversion: "height_cms",
          shape_title: "forma",
          type_title: "tipo",
          ability_title: "habilidad",
          abilities_language: "abilities_es",
          happiness_title: "felicidad",
          capture_rate_title: "probabilidad de captura"
        }
      }
    }
  }
}
</script>
