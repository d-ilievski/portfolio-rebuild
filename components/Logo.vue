<template>
  <div class="logo" @click="scrollToAbout">
    <div class="title">Daniel Ilievski</div>
    <div class="subtitle">Building awesome web apps.</div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  methods: {
    scrollToAbout() {
      gsap.to(window, { duration: 1, scrollTo: '#about-segment' })
    },
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

  /* transition: all 0.2s ease-in-out; */
  animation-duration: 1.5s;

  border-width: 0px;
  border-style: solid;
  border-color: var(--foreground-color);
}

.logo:hover {
  cursor: pointer;
  transition: transform .1s linear;
  transform: scale(1.1);
}

.logo.open {
  animation-name: grow;
  animation-delay: .3s;
}

.logo.close {
  animation-delay: 0s;
  animation-name: shrink;
  animation-duration: 1s;
}

.title {
  font-size: 4rem;
  margin: -0.5rem;
}

.subtitle {
  font-size: 1rem;
}

@keyframes grow {
  0% {
    border-width: 15px;
    background-color: var(--foreground-color);
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

@media only screen and (max-width: 768px) {
  .logo {
    transform: scale(0.8);
  }
  .logo:hover, .logo:active {
    transform: scale(0.9);
  }

  .title {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .subtitle {
    font-size: 100%;
    margin-left: -0.4rem;
  }
}

@media only screen and (max-width: 330px) {
  .title {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: -0.2rem;
  }

  .subtitle {
    font-size: 100%;
    margin-left: -0.4rem;
  }
}

@media only screen and (min-width: 2200px) {
  .title {
    font-size: 5rem;
  }

  .subtitle {
    font-size: 2rem;
  }
}
</style>
