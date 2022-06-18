<template>
<div>
    <div v-if="showQuery" class="ticker-form">
        <input type="text" ref="stockTicker" maxlength=5 placeholder="AAPL" class='ticker' @keyup.enter="getStockPrediction()" />
        <br/>
        <input value="Predict" title="Guess" type="submit" class="submit" @click="getStockPrediction()">
    </div>
    <div class="d-flex justify-content-center align-items-center">
        <loading-spinner v-if="showLoading" class="loading "></loading-spinner>
    </div>
    <div class="h-100 w-100 text-align-center result" v-if="showResult">
        <div class="text-center">Based on <a class='stock-article link-light' v-bind:href="result.article_url" target="_blank">this article</a>,</div><br/>
        <div class="text-center"> that stock should go </div>
        <div class="text-center"><p class="prediction__up" v-if="result.prediction">up</p><p class="prediction__down" v-if="!result.prediction">down</p></div>
        <div class="text-center">{{(result.confidence*100).toFixed(2)}}% confidence.</div>
        <div class="text-center confidence-disclaimer"><small>Confidence is determined by the certanty of the guess and the accuracy of the model</small></div>
    </div>
    <div class=" h-100 d-flex align-items-center justify-content-center error" v-if="showError">
        Could not predict this stock, something went wrong.
    </div>
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
                console.error(error);
            }
        },
    }
});
</script>


<style>
.stock-article {
    text-decoration: none;
    color: #ADD8E6;
}

.ticker-form {
    text-align: center;
    top: 40%;
    left: 40%;
    height: 50%;
}

.confidence-disclaimer {
    font-size: 0.8rem;
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
::placeholder {
  color: white;
  font-weight: 100;
  opacity: 1;
}

:-ms-input-placeholder {
  color: white;
}

::-ms-input-placeholder { 
  color: white;
}

.submit {
    background-color: transparent;
    border-radius: 8px;
    border: 1px solid white;
    color: white;
    font-size: 24px;
}

.result {
    color: white;
}

.error {
    color: white;
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
