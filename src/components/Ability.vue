<template>
  <div class="rounded-md uppercase font-bold p-1 text-center bg-yellow-100">
    <h4>{{abilityName}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Ability',
  props: {
    abilityName: String,
  }
}
</script>

<style>

</style>