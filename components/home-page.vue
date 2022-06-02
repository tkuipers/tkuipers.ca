<script>
import Vue from 'vue'

export default Vue.extend({
  methods: {
    openLink(link) {
      window.open(link, '_blank');
    }
  }
});

</script>
<template>
    <div class="main">
        <lights-background>
          <slide-show slide1="Welcome." slide2="TK" slide3="Tyler Kuipers"></slide-show>
          <ul class="list_nav">
            <li class="list_nav__item" @click="openLink('https://www.github.com/tkuipers')">My Work</li>
            <li class="list_nav__item" @click="openLink('https://resume.tkuipers.ca')">Resume</li>
            <li class="list_nav__item" @click="openLink('https://www.linkedin.com/in/tyler-kuipers/')">LinkedIn</li>
          </ul>
        </lights-background>
    </div>
</template>
<style>
.main {
    margin: 0;
    height: 100vh;
    font-weight: 100;
    background: radial-gradient(#709baa,black);
    -webkit-overflow-Y: hidden;
    -moz-overflow-Y: hidden;
    -o-overflow-Y: hidden;
    overflow-y: hidden;
    -webkit-animation: fadeIn 1 1s ease-out;
    -moz-animation: fadeIn 1 1s ease-out;
    -o-animation: fadeIn 1 1s ease-out;
    animation: fadeIn 1 1s ease-out;
    font-family: 'Roboto', sans-serif;
}

.list_nav {
  color: white;
  text-decoration: none;
  list-style: none;
  position: absolute;
  right: 0px;
}

.list_nav__item {
  margin-right: 10px;
  padding-top: 5px;
  position: relative;
  text-align: right;
}

.list_nav__item::after {
  position: absolute;
  content: '';
  height: 2px;
  left: 0px;
  bottom: -4px;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}
.list_nav__item:hover:after {
  width: 100%;
  background: #709BAA;
  transform: scaleX(1);
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