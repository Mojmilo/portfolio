<template>
  <div class="about">
    <ExperienceSection/>
  </div>
</template>

<script>
  import ExperienceSection from '../components/ExperienceView/ExperienceSection.vue';
export default {
  name: 'ExperienceView',
  components: {
    ExperienceSection
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
