<template>
  <div class="title-container" :class="{ invert: invert }">
    <h1 class="title">{{ text }}</h1>
    <div class="underline"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    invert: Boolean,
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
}

.title-container.open .title {
  animation: title-appear 0.5s ease-in-out 0.5s forwards;
}

.title-container.open .underline {
  animation: underline 0.25s ease-in-out 0s forwards;
}

.title-container.close .title {
  transform: translateY(0px);
  animation: title-appear-close 0.5s ease-in-out 0s forwards;
}

.title-container.close .underline {
  right: 0;
  animation: underline-close 0.25s ease-in-out 0.5s forwards;
}

.title-container.invert .title {
  color: var(--background-color);
}
.title-container.invert .underline {
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

@keyframes underline-close {
  0% {
    right: 0%;
  }
  100% {
    right: 100%;
  }
}

@keyframes title-appear-close {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(50px);
  }
}
</style>