<template>
    <div class="main">
      <link href="https://fonts.googleapis.com/css?family=Roboto:100" rel="stylesheet">
        <lights-background>
          <slide-show slide1="Welcome." slide2="TK" slide3="Tyler Kuipers"></slide-show>
          <nav-list></nav-list>
        </lights-background>
    </div>
</template>
<style>
.main {
    margin: 0;
    height: 100vh;
    font-weight: 100;
    background: radial-gradient(#709baa,black);
    /* -webkit-overflow-Y: hidden;
    -moz-overflow-Y: hidden;
    -o-overflow-Y: hidden;
    overflow-y: hidden; */
    -webkit-animation: fadeIn 1 1s ease-out;
    -moz-animation: fadeIn 1 1s ease-out;
    -o-animation: fadeIn 1 1s ease-out;
    animation: fadeIn 1 1s ease-out;
    
}



#footer{
  font-family: 'Roboto', sans-serif;
  font-size: 1.2em;
  color: white;
  position: fixed;
  -webkit-transform: translate(95vw,90vh);
  -moz-transform: translate(95vw,90vh);
  transform: translate(95vw,90vh);
  transform: translate(95vw,90vh);
}
</style>