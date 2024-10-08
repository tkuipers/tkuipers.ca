<script setup lang="ts">
import { ref } from 'vue';
import axios, { type AxiosError } from "axios";

const stockSymbol = ref('');
const receivedStockInfo = ref(false);
const stockError = ref(-1);
const loading = ref(false);
const stockInfo = ref({});

const fetchStockData = async () => {
  if (stockSymbol.value) {
    try {
      stockError.value = -1;
      loading.value = true;
      const response = await axios.get(`https://scrooge.tkuipers.ca/stocks/${stockSymbol.value}`);
      receivedStockInfo.value = true;
      stockInfo.value = response.data;
    } catch (error: any) {
      console.log(error)
      stockError.value = error.response.status;
    } finally {
      loading.value = false;
    }
  }
};

const handleSubmit = (event: Event) => {
  event.preventDefault();
  fetchStockData();
};

useSeoMeta({
  title: "Stocker | Tyler Kuipers",
  description: "This is a very simple stok prediction tool that tries to use sentiment analysis to predict whether a stock will go up or down in the next trading day."
});

</script>

<template>
  <main>
  <h1 class="text-2xl font-bold mb-4">Stocks</h1>
  <p>Input a stock ticker below and I'll use machine learning and sentiment analysis to
  try and determine whether the stock will go up or down within the next trading day.
  I have a hard time with some stocks, please be patient.</p>
  <div class="h-12"></div>
  <form @submit="handleSubmit" class="flex items-center space-x-4" v-if="!receivedStockInfo">
    <UInput
      v-model="stockSymbol"
      placeholder="Enter a stock symbol (MSFT, AAPL, etc...)"
      :class="{ 'error': stockError > 0 }"
      :disabled="loading"
      class="w-full" />
    <UButton :class="{ 'animate-pulse': loading }" type="submit" :disabled="loading">
      <span>Submit</span>
    </UButton>
  </form>
  <p v-if="stockError > 0 && stockError != 404" class="error-message">Error fetching stock data. Please try again.</p>
  <p v-if="stockError > 0 && stockError === 404" class="error-message">I couldn't find recent news articles for that stock, try another.</p>
  <StockInfo v-if="receivedStockInfo" :info="stockInfo"/>
  </main>
</template>

<style scoped>
.error {
  outline: 2px solid #e78284;
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
}

.error-message {
  color: #e78284;
  font-weight: bold;
  margin-top: 1rem;
}
</style>
