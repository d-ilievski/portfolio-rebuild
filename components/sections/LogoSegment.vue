<template>
  <div class="logo-container">
    <div class="left-container">
      <logo />
      <div class='icon-scroll'></div>
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.logo-close-trigger {
  position: absolute;
  pointer-events: none;
  top: 60%;
  bottom: 0;
  left: 0;
  right: 0;
}

.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
  bottom: 64px;
  
}

.icon-scroll {
  width: 20px;
  height: 35px;
  box-shadow: inset 0 0 0 1px var(--foreground-color);
  border-radius: 25px;
  transform: translateX(-50%);
  opacity: 0;
  animation-delay: 3s;
  animation-duration: .2s;
  animation-fill-mode: forwards;
  animation-name: appear;
}

.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--foreground-color);
  top: 8px;
  margin-left: -4px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
}

@keyframes scroll {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(23px);
  }
}

@keyframes appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: .5;
  }
}

@media only screen and (max-width: 600px) {
  #logo-segment-navigation {
    display: none;
  }
}</style>