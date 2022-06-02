<template>
<div>
    <div v-if="showQuery" class="ticker-form">
        <input type="text" ref="stockTicker" maxlength=5 placeholder="Stock Ticker" class='ticker' />
        <br/>
        <input value="Predict" title="Guess" type="submit" class="submit" @click="getStockPrediction()">
    </div>
    <loading-spinner v-if="showLoading" class="loading"></loading-spinner>
    <div class="result" v-if="showResult">
        Based on <a class='stock-article' v-bind:href="result.article_url" target="_blank">this article</a>, stock should go <p class="prediction__up" v-if="result.prediction">up</p><p class="prediction__down" v-if="!result.prediction">down</p>
        {{(result.confidence*100).toFixed(2)}}% confidence.
    </div>
    <div class="error" v-if="showError"></div>
</div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios';
Vue.prototype.$http = axios;


export default Vue.extend({
    data: () => {
        return {
            showQuery: true,
            showLoading: false,
            showResult: false,
            showError: false,
            result: {}
        }
    },
    methods: {
        async getStockPrediction() {
            
            try {
                this.$data.showQuery = false
                this.$data.showLoading = true
                let stock = this.$refs.stockTicker.value.toString();
                stock = stock.toUpperCase();
                const response = await this.$http.get(
                    `https://stock-guesser.tkuipers.ca?stock=${stock}`
                );
                this.$data.result = response.data;
                this.showLoading = false;
                this.showResult = true;
                console.log(response.data)
            } catch (error) {
                this.showLoading = false;
                this.showError = true;
                console.log(error);
            }
        },
    }
});
</script>


<style>
.stock-article {
    text-decoration: none;
}
.ticker-form {
    text-align: center;
    /* position: absolute; */
    top: 40%;
    left: 40%;
    height: 50%;
}

.ticker {
    backdrop-filter: blur(5px);
    background-color: transparent;
    border-radius: 8px;
    font-size: 32px;
    border: 1px solid white;
    color: white;

    margin-bottom: 10px;
}
.ticker:focus {
    outline: 1px solid white;  
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;
  font-weight: 100;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: white;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: white;
}

.submit {
    background-color: transparent;
    border-radius: 8px;
    border: 1px solid white;
    color: white;
    font-size: 24px;
}

.loading {
    text-align: center;
    /* position: absolute; */
    top: 45%;
    left: 48%;
    height: 50%;
}

.result {
    color: white;
    text-align: center;
    /* position: absolute; */
    top: 42%;
    left: 42%;
    height: 50%;
}

.prediction__up {
    font-size: 32px;
    color: lightgreen;
    font-family: 'Roboto', sans-serif;
}

.prediction__down {
    font-size: 32px;
    color: lightcoral;
}
</style>