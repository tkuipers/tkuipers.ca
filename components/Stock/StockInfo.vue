<script setup lang="ts">
defineProps({
  info: {
    type: Object as PropType<StockInformation>,
    required: true,
  },
});
</script>

<template>
  <div class="">
    <h3> Based on
      <ULink class="text-blue-600 underline hover:text-blue-800" target="_blank" ariaCurrentValue="location" :to="info.article_url">this</ULink>
      article, I am {{ ((info.confidence ?? 0) * 100).toFixed(0) }}% sure that {{ info.longname }} will go:</h3>
    <div :class="{'stock-predict-down': !info.prediction, 'stock-predict-up': info.prediction}" class="pt-8 text-center text-4xl font-bold">{{ info.prediction ? "up": "down" }}</div>
  </div>

</template>

<style scoped>
 .stock-predict-up {
   color: #a6d189;
 }
  .stock-predict-down {
    color: #e78284;
  }
</style>
