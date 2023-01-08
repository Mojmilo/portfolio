<template>
  <div class="about">
    <ContactSection/>
  </div>
</template>

<script>
  import ContactSection from '../components/ContactView/ContactSection.vue';
export default {
  name: 'ContactView',
  components: {
    ContactSection
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
