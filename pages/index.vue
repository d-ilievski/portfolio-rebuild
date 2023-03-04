<template>
  <div class="main-container">
    <fa class="icon" :class="{ open: mobileMenuOpen }" :icon="['fas', 'chevron-circle-down']"
      @click="toggleMobileMenuOpen" />
    <mobile-menu :open="mobileMenuOpen" @selected="toggleMobileMenuOpen"></mobile-menu>
    <div class="fullscreen-container" id="logo-segment">
      <logo-segment />
    </div>
    <div class="container" id="about-segment">
      <about-segment />
    </div>
    <div class="container invert" id="work-segment">
      <work-segment />
    </div>
    <div class="container" id="blog-segment">
      <blog-segment />
    </div>
    <div class="container invert" id="contact-segment">
      <contact-segment />
    </div>
    <div class="container night-sky">
      <footer-segment />
    </div>
  </div>
</template>

<script>
import AboutSegmentVue from '~/components/sections/AboutSegment.vue'
import BlogSegmentVue from '~/components/sections/BlogSegment.vue'
import ContactSegmentVue from '~/components/sections/ContactSegment.vue'
import FooterSegmentVue from '~/components/sections/FooterSegment.vue'
import LogoSegmentVue from '~/components/sections/LogoSegment.vue'
import WorkSegmentVue from '~/components/sections/WorkSegment.vue'
import { initAnimation } from '~/animation'
import MobileMenuVue from '~/components/MobileMenu.vue'

export default {
  components: {
    'logo-segment': LogoSegmentVue,
    'about-segment': AboutSegmentVue,
    'work-segment': WorkSegmentVue,
    'blog-segment': BlogSegmentVue,
    'contact-segment': ContactSegmentVue,
    'footer-segment': FooterSegmentVue,
    'mobile-menu': MobileMenuVue,
  },
  data: () => ({
    mobileMenuOpen: false,
  }),
  methods: {
    toggleMobileMenuOpen: function () {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    setColorMode: function () {
      const colorMode = localStorage.getItem('colorMode');
      if (colorMode) {
        document.documentElement.setAttribute('data-theme', colorMode);
      } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          document.documentElement.setAttribute('data-theme', 'dark');
        }
      }
    }
  },
  mounted() {
    initAnimation();
    this.setColorMode();
  },
}
</script>

<style scoped>
.main-container {
  background: var(--background-color);

  overflow: hidden;
}

.night-sky {
  background: rgb(34, 74, 82);
  background: linear-gradient(0deg,
      rgba(34, 74, 82, 1) 0%,
      rgba(34, 37, 38, 1) 25%,
      rgba(34, 32, 33, 1) 55%);
  position: relative;
}

[data-theme="dark"] .night-sky {
  background: var(--foreground-color);
  position: relative;
}

.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  mix-blend-mode: difference;
}

.navigation ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  padding-right: 56px;
}

.navigation li {
  margin: 10px;
}

.navigation li a {
  color: var(--background-color);
}

.icon {
  display: none;
}

@media only screen and (max-width: 600px) {
  .icon {
    display: block;
    position: fixed;
    color: var(--background-color);
    font-size: 50px;
    mix-blend-mode: difference;
    top: 16px;
    left: 16px;
    padding: 10px;
    transition: transform 0.2s linear, top 0.2s linear;
    z-index: 2;
  }

  [data-theme="dark"] .icon {
    color: unset;
  }

  .icon.open {
    transform: rotate(180deg);
    top: 320px;
  }
}
</style>
