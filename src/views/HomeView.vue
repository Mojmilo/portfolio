<template>
  <div class="home">
    <!-- <h1>Home page</h1> -->
    <HomeSection/>
  </div>
</template>

<script>
  import HomeSection from '../components/HomeView/HomeSection.vue';

export default {
  name: 'HomeView',
  components: {
    HomeSection
}
}
</script>

<style scoped>
.home {
  width: 100%;
  position: relative;
  display: flex;
  /* align-items: center;
  justify-content: center; */
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease-out, transform 0.25s ease-out;
}
.slide-enter-active,
.slide-leave-actie {
  transition: opacity 0.5s ease-out, transform 0.25s ease-out;
}
</style>
