<template>
  <div class="main-container">
    <div class="navigation" v-if="false">
      <ul>
        <li>
          <a> ABOUT </a>
        </li>
        <li>
          <a> WORK </a>
        </li>
        <li>
          <a> BLOG </a>
        </li>
        <li>
          <a> CONTACT </a>
        </li>
      </ul>
    </div>
    <div class="fullscreen-container">
      <logo-segment />
    </div>
    <div class="container">
      <about-segment />
    </div>
    <div class="container dark">
      <work-segment />
    </div>
    <div class="container">
      <blog-segment />
    </div>
    <div class="container dark">
      <contact-segment />
    </div>
    <div class="container night-sky">
      <footer-segment />
      <div class="stars" id="stars"></div>
      <div class="stars" id="stars2"></div>
      <div class="stars" id="stars3"></div>
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

export default {
  components: {
    'logo-segment': LogoSegmentVue,
    'about-segment': AboutSegmentVue,
    'work-segment': WorkSegmentVue,
    'blog-segment': BlogSegmentVue,
    'contact-segment': ContactSegmentVue,
    'footer-segment': FooterSegmentVue,
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
.stars {
  position: absolute;
  bottom: -100%;
  left: 0;
  right: 0;
  height: 100px;
}
</style>
