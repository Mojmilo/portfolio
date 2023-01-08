<template>
  <div class="about">
    <AboutSection/>
  </div>
</template>

<script>
  import AboutSection from '../components/AboutView/AboutSection.vue';

export default {
  name: 'AboutView',
  components: {
    AboutSection
}
}
</script>

<style scoped>
.about {
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
