<template>
  <div class="logo" :class="{'open': isOpen, close: !isOpen}" @click="toggle">
    <div class="title">Daniel Ilievski</div>
    <div class="subtitle">Building awesome apps.</div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: true
  }),
  methods: {
    close() {
      this.isOpen = false;
    },
    open() {
      this.isOpen = true;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    }
  },
}
</script>


<style scoped>
.logo {
  max-width: 0;
  max-height: 0;

  overflow: hidden;

  
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  white-space: nowrap;

  transition: all 0.2s ease-in-out;
  animation-duration: 1.5s;

  border-width: 0px;
  border-style: solid;
  border-color: var(--foreground-color);
}

.logo:hover {
  cursor: pointer;
}

.logo.open {
  animation-delay: 2s;
  animation-name: grow;
}

.logo.close {
  animation-delay: 0s;
  animation-name: shrink;
}

.title {
  font-size: 4rem;
  margin: -0.5rem;
}

.subtitle {
  font-size: 100%;
}

@keyframes grow {
  0% {
    border-width: 5px;
    border-style: solid;
    border-color: var(--foreground-color);
    max-width: 0;
    max-height: 0;
    padding: 0;
  }

  40% {
    border-width: 5px;
    border-style: solid;
    border-color: var(--foreground-color);
    max-width: 0;
    max-height: 350px;
    padding: 20px 0px;
  }

  85% {
    border-width: 5px;
    border-style: solid;
    border-color: var(--foreground-color);
    max-width: 1500px;
    max-height: 350px;
    padding: 20px 50px;
  }

  100% {
    border-width: 5px;
    border-style: solid;
    border-color: var(--foreground-color);
    max-width: 1500px;
    max-height: 350px;
    padding: 20px 50px;
  }
}

@keyframes shrink {
  100% {
    border-width: 5px;
    border-style: solid;
    border-color: var(--foreground-color);
    max-width: 0;
    max-height: 0;
    padding: 0;
    visibility: hidden;
  }

  85% {
    border-width: 5px;
    border-style: solid;
    border-color: var(--foreground-color);
    max-width: 0;
    max-height: 350px;
    padding: 20px 0px;
  }

  40% {
    border-width: 5px;
    border-style: solid;
    border-color: var(--foreground-color);
    max-width: 1500px;
    max-height: 350px;
    padding: 20px 50px;
  }

  0% {
    border-width: 5px;
    border-style: solid;
    border-color: var(--foreground-color);
    max-width: 1500px;
    max-height: 350px;
    padding: 20px 50px;
  }
}
</style>
