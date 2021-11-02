<template>
  <div class="main-container">
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

export default {
  components: {
    'logo-segment': LogoSegmentVue,
    'about-segment': AboutSegmentVue,
    'work-segment': WorkSegmentVue,
    'blog-segment': BlogSegmentVue,
    'contact-segment': ContactSegmentVue,
    'footer-segment': FooterSegmentVue,
  },

  mounted() {
    initAnimation()
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
  background: linear-gradient(
    0deg,
    rgba(34, 74, 82, 1) 0%,
    rgba(34, 37, 38, 1) 25%,
    rgba(34, 32, 33, 1) 55%
  );
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
  color: #fff;
}
</style>
