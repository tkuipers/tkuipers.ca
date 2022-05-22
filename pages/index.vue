<template>
  <home-page></home-page>
</template>

<script lang="ts">
import Vue from 'vue'
import homePage from '~/components/home-page.vue'

export default Vue.extend({
  components: { homePage },
  name: 'IndexPage'
})
</script>
<style>
body {
    margin: 0;
    height: 100vh;
    font-weight: 100;
    background: radial-gradient(#a23982,#1f1013);
    -webkit-overflow-Y: hidden;
    -moz-overflow-Y: hidden;
    -o-overflow-Y: hidden;
    overflow-y: hidden;
    -webkit-animation: fadeIn 1 1s ease-out;
    -moz-animation: fadeIn 1 1s ease-out;
    -o-animation: fadeIn 1 1s ease-out;
    animation: fadeIn 1 1s ease-out;
}
</style>
