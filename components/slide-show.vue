<template>
    <div>
        <p id='head1' class='header'>Welcome.</p>
        <p id='head2' class='header'>TK</p>
        <p id='head3' class='header'>Tyler Kuipers</p>
    </div>
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
.header{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  color: white;
  font-size: 2em;
}

#head1, #head2,#head3, #head4, #head5{
  opacity: 0;
}

#head1{
  -webkit-animation: fadeOut 1 3s ease-in;
  -moz-animation: fadeOut 1 3s ease-in;
  -o-animation: fadeOut 1 3s ease-in;
  animation: fadeOut 1 3s ease-in;
}

#head2{
  -webkit-animation: fadeOut 1 1s ease-in;
  -moz-animation: fadeOut 1 1s ease-in;
  -o-animation: fadeOut 1 1s ease-in;
  animation: fadeOut 1 1s ease-in;
  -webkit-animation-delay: 4s;
  -moz-animation-delay: 4s;
  -o-animation-delay: 4s;
  animation-delay: 4s;
  font-weight: 900;
}

#head3{
  -webkit-animation: finalFade 1 5s ease-in;
  -moz-animation: finalFade 1 5s ease-in;
  -o-animation: finalFade 1 5s ease-in;
  animation: finalFade 1 5s ease-in;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-delay: 5s;
  -moz-animation-delay: 5s;
  -o-animation-delay: 5s;
  animation-delay: 5s;
}

@-webkit-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@-moz-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@-o-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@-webkit-keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@-moz-keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@-o-keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@keyframes fadeOut{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 0;}
}

@-webkit-keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}

@-moz-keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}

@-o-keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}

@keyframes finalFade{
  0%{opacity: 0;}
  30%{opacity: 1;}
  80%{opacity: .9;}
  100%{opacity: 1;}
}
</style>