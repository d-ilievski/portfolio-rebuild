<template>
  <div class="logo-container">
    <div class="left-container">
      <logo />
    </div>
    <navigation id="logo-segment-navigation" />
    <div class="logo-close-trigger"></div>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import Navigation from '~/components/Navigation'

export default {
  components: {
    logo: Logo,
    navigation: Navigation,
  },
}
</script>

<style scoped>
.logo-container {
  display: grid;
  grid-template-columns: auto max-content;
  grid-template-rows: 1fr;
  width: 100%;
}

.left-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-close-trigger {
  position: absolute;
  pointer-events: none;
  top: 60%;
  bottom: 0;
  left: 0;
  right: 0;
}

@media only screen and (max-width: 600px) {
  #logo-segment-navigation {
    display: none;
  }
}
</style>