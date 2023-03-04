<template>
  <div class="menu-wrapper">
    <ul class="menu" :class="{ open }">
      <li @click="navigateTo('about', 1)">ABOUT</li>
      <li @click="navigateTo('work', 2)">WORK</li>
      <li @click="navigateTo('blog', 3)">BLOG</li>
      <li @click="navigateTo('contact', 4)">CONTACT</li>
      <li @click="toggleDarkMode">{{ colorMode === 'dark' ? '😎 LIGHT MODE' : "🌙 DARK MODE" }}</li>
    </ul>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  props: {
    open: Boolean,
  },
  data: function () {
    return {
      colorMode: 'light',
    }
  },
  methods: {
    navigateTo: function (segmentName, duration) {
      gsap.to(window, {
        scrollTo: `#${segmentName}-segment`,
        ease: 'power4.out',
        duration,
      })
      this.$emit('selected')
    },
    toggleDarkMode: function () {
      this.colorMode = this.colorMode === 'dark' ? 'light' : 'dark';

      localStorage.setItem('colorMode', this.colorMode);
      document.documentElement.setAttribute('data-theme', this.colorMode);
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
.menu-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.menu {
  background: var(--foreground-color);
  color: var(--background-color);
  list-style: none;

  font-weight: bold;
  font-size: 1.2em;
  text-align: center;
  height: 300px;
  padding-top: 32px;
  padding-bottom: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  left: 0;
  right: 0;
  top: -300px;

  transition: top 0.2s linear;
}

.menu.open {
  top: 0px;
}
</style>