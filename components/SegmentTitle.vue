<template>
  <div class="title-container" :class="{ dark: dark }">
    <h1 class="title">{{ text }}</h1>
    <div class="underline"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    dark: Boolean,
  },
}
</script>

<style scoped>
.title-container {
  overflow: hidden;
  margin-bottom: 48px;
  position: relative;
  padding-bottom: 5px;
}

.title {
  color: var(--foreground-color);
  position: relative;
  font-weight: bold;
  transform: translateY(50px);
  animation: title-appear 0.5s ease-in-out 2.5s forwards;
  text-transform: uppercase;
}
.underline {
  content: '';
  position: absolute;
  left: 0;
  right: 100%;
  bottom: 0;
  background: var(--foreground-color);
  height: 4px;

  animation: underline 0.25s ease-in-out 2s forwards;
}

.title-container.dark .title {
  color: var(--background-color);
}
.title-container.dark .underline {
  background: var(--background-color);
}

@keyframes underline {
  0% {
    right: 100%;
  }

  100% {
    right: 0%;
  }
}

@keyframes title-appear {
  0% {
    transform: translateY(50px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>