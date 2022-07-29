<template>
  <nav>
    <ul class="navigation">
      <li @click="navigateTo('about', 1)">ABOUT</li>
      <li @click="navigateTo('work', 2)">WORK</li>
      <li>
        <NuxtLink to="/blog" :style="{ color: 'white' }">BLOG</NuxtLink>
      </li>
      <li @click="navigateTo('contact', 4)">CONTACT</li>
    </ul>
  </nav>
</template>

<script>
import gsap from 'gsap'
export default {
  methods: {
    navigateTo(segmentName, duration) {
      gsap.to(window, {
        scrollTo: `#${segmentName}-segment`,
        ease: 'power4.out',
        duration,
      })
    },
  },
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  width: 0px;
  height: 100%;
  transition: width 0.25s ease-in-out;
}

nav.open {
  transition-delay: 1.8s;
  width: 250px;
}

.navigation {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
  width: 100%;

  overflow: hidden;
  background: var(--foreground-color);
  color: white;
  list-style: none;

  font-weight: bold;
  font-size: 1.2em;

  animation-fill-mode: forwards;
}

.navigation li {
  transition: transform 0.2s linear;
  transition: 0.2s;
}

.navigation li:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.unstyled::after {
  display: none;
}
</style>