<template>
    <div>
        <ul class="list_nav">
            <li class="list_nav__item" @click="openLink('#stock-guesser', '_self')">Stock Guesser</li>
            <li class="list_nav__item" @click="openLink('https://www.github.com/tkuipers')">Github</li>
            <li class="list_nav__item" @click="openLink('https://www.linkedin.com/in/tyler-kuipers/')">LinkedIn</li>
            <li class="list_nav__item" @click="openLink('https://resume.tkuipers.ca')">Resume</li>
          </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    openLink(link: string, loc: string = '_blank') {
      window.open(link, loc);
    }
  }
});

</script>

<style>
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
  text-align: left;
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
</style>