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
