<template>
  <div class="logo-container">
    <div class="left-container">
      <logo />
    </div>
    <navigation />
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import Navigation from '~/components/Navigation'

export default {
  components: {
    logo: Logo,
    navigation: Navigation
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
</style>