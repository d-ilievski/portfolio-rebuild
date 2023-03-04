<template>
  <nav>
    <ul class="navigation">
      <li @click="navigateTo('about', 1)">ABOUT</li>
      <li @click="navigateTo('work', 2)">WORK</li>
      <!-- <li>
        <NuxtLink to="/blog">BLOG</NuxtLink>
      </li> -->
      <li @click="navigateTo('blog', 3)">BLOG</li>
      <li @click="navigateTo('contact', 4)">CONTACT</li>

      <li @click="toggleDarkMode">{{ colorMode === 'dark' ? '😎 LIGHT MODE' : "🌙 DARK MODE" }}</li>
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
    toggleDarkMode: function () {
      this.colorMode = this.colorMode === 'dark' ? 'light' : 'dark';

      localStorage.setItem('colorMode', this.colorMode);
      document.documentElement.setAttribute('data-theme', this.colorMode);
    }
  },
  data: function () {
    return {
      colorMode: 'light',
    }
  },
  mounted() {
    const colorMode = localStorage.getItem('colorMode');
    if (colorMode) {
      this.colorMode = colorMode;
    } else {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.colorMode = 'dark';
      } else {
        this.colorMode = 'light';
      }
    }
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
  color: var(--background-color);
  ;
  list-style: none;

  font-weight: bold;
  font-size: 1.2em;

  animation-fill-mode: forwards;
}

.navigation li {
  transition: transform 0.2s linear;
  transition: 0.2s;
  color: var(--background-color);
}

.navigation li a {
  color: var(--background-color);
}

.navigation li:hover {
  transform: scale(1.2);
  cursor: pointer;
}

.unstyled::after {
  display: none;
}
</style>