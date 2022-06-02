<template>
<div class='page'>
    <stock-guesser class='center' name='stock-guesser' id='stock-guesser'></stock-guesser>
</div>
</template>

<style>
.page {
    height: 100vh;
    font-weight: 100;
    background: radial-gradient(#709baa,black);
    -webkit-animation: fadeIn 1 1s ease-out;
    -moz-animation: fadeIn 1 1s ease-out;
    -o-animation: fadeIn 1 1s ease-out;
    animation: fadeIn 1 1s ease-out;
}

.center {
    top: 50%;
    position: relative;
}
</style>