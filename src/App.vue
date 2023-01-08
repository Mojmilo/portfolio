<template>
  <TopBar/>
  <BurgerPanel/>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is='Component'></component>
    </transition>
  </router-view>
  <SocialButton/>
  <TopButton/>
</template>

<script>
import TopBar from './components/TopBar.vue'
import BurgerPanel from './components/BurgerPanel.vue'
import SocialButton from './components/SocialButton.vue'
import TopButton from './components/TopButton.vue'


export default {
  name: 'App',
  components: {
    TopBar,
    BurgerPanel,
    SocialButton,
    TopButton
}
}
</script>

<!-- <style src="./assets/tailwind.css"></style> -->

<style lang="scss">
  @media screen and (max-width: 900px) {
    :root {
      --font-size-text: 1px;
      --font-size-title: 6px;
    }
  }
  :root {
      --bgd-color-principal: var(--bgd-color-principal-dark);
      --bgd-color-secondaire: var(--bgd-color-secondaire-dark);
      --color-principal: var(--color-principal-dark);
      --color-secondaire: var(--color-secondaire-dark);
      --color-troisième: #d9d9d980;
      --color-quatrième: #6fffe91A;

      --bgd-color-principal-dark: #0B132B;
      --bgd-color-secondaire-dark: #151c31;
      --color-principal-dark: #D9D9D9;
      --color-secondaire-dark: #6FFFE9;

      --bgd-color-principal-light: #D9D9D9;
      --bgd-color-secondaire-light: #a79b9b;
      --color-principal-light: #0B132B;
      --color-secondaire-light: #6FFFE9;

      --font-size-text: 15px;
      --font-size-title: 65px;
  }
  body {
    background-color: var(--bgd-color-principal);
    margin: 0;
    padding: 0;
    // height: 10000px;
    height: 100%;
  }

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
