<template>
  <div class="w-full bg-emerald-400 rounded-xl p-4">
    <div class="flex flex-col items-center justify-center mb-2">
      <h1 class="w-full md:w-3/4 lg:w-1/2 bg-white text-center font-pokedex-title text-2xl border-4 border-gray-400 py-2 uppercase">{{getPokemonDetails.name}}</h1>
    </div>
    <div class="flex justify-center">
      <div class="flex flex-col items-center p-4 bg-white border-2 border-yellow-500 mb-2 w-full md:w-3/4 rounded-lg shadow-lg">
        <img class="h-64 mb-10" :src="getPokemonDetails.svg_image || getPokemonDetails.official_artwork" alt="pokemon-image">
        <div class="grid grid-cols-1 md:grid-cols-2 w-full mb-4 gap-y-3">
          <div class="col-span-2 md:col-span-1">
            <div class="grid grid-cols-2 gap-2">
              <div class="w-full text-center text-lg bg-gray-500 text-white rounded-lg px-2 font-medium">No</div>
              <div class="text-lg font-medium">{{getPokemonDetails.id}}</div>
              <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">Name</div>
              <div class="text-lg font-medium uppercase">{{getPokemonDetails.name}}</div>
              <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">wt</div>
              <div class="text-lg font-medium uppercase">{{getPokemonDetails.weight}}</div>
              <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">ht</div>
              <div class="text-lg font-medium uppercase">{{getPokemonDetails.height}}</div>
              <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">shape</div>
              <div class="text-lg font-medium uppercase">{{getPokemonDetails.shape}} pokémon</div>
            </div>
          </div>
          <div class="col-span-2 md:col-span-1">
            <div class="grid grid-col-2 gap-2">
              <div class="col-span-2 w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">
                <h4>Type</h4>
              </div>
              <div :key="type.url" v-for="type in getPokemonDetails.types">
                <Type :typeName="type.name" />
              </div>
              <div class="col-span-2 w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase">
                <h4>Ability</h4>
              </div>
              <div :key="ability.url" v-for="ability in getPokemonDetails.abilities">
                <Ability :abilityName="ability.name" />
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 w-full mb-4 gap-3">
          <div>
            <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase mb-2">
              <h4>Happiness</h4>
            </div>
            <div class="h-3 relative">
              <div class="w-full h-full bg-gray-200 absolute"></div>
              <div class="h-full bg-green-500 absolute" :style="{'width':getPokemonDetails.base_happiness + '%'}"></div>
            </div>
          </div>
          <div>
            <div class="w-full bg-gray-500 text-center text-lg text-white rounded-lg px-2 font-medium uppercase mb-2">
              <h4>Capture rate</h4>
            </div>
            <div class="h-3 relative">
              <div class="w-full h-full bg-gray-200 absolute"></div>
              <div class="h-full bg-orange-500 absolute" :style="{'width':getPokemonDetails.capture_rate + '%'}"></div>
            </div>
          </div>
        </div>
        <div class="w-full p-4 text-lg">
          <p>{{getPokemonDetails.description_en}}</p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Type from './Type.vue';
import Ability from './Ability.vue';

export default {
  name: 'PokeDetails',
  components: {
    Type,
    Ability,
  },
  computed: mapGetters(["getPokemonDetails"]),
}
</script>
