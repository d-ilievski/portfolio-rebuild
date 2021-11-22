<template>
  <div>
    <div class="container" :class="{ invert }">
      <div v-if="arrows" class="navigate-left" @click="prev">
        <span>&lt;</span>
      </div>
      <div v-if="arrows" class="navigate-right" @click="next">
        <span>&gt;</span>
      </div>
      <div
        class="wrapper"
        v-touch:swipe.right="prev"
        v-touch:swipe.left="next"
        v-touch:swipe.up="(e) => e.preventDefault()"
        v-touch:swipe.down="(e) => e.preventDefault()"
      >
        <div class="box">
          <div class="pages" :style="{ left: left + 'px' }">
            <span
              v-for="i in numTotalPages"
              :key="i"
              :class="{ accent: i === page }"
              v-touch:tap="() => setPage(i)"
              >{{ i }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="autoplay-controls" @click="toggleAutoplay">
      {{ isAutoplayPaused ? 'autoplay' : 'pause' }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      isAutoplayPaused: false,
      autoplayIntervalInstance: null,
    }
  },
  props: {
    numTotalPages: Number,
    invert: Boolean,
    arrows: Boolean,
  },
  methods: {
    next: function () {
      let page = this.page
      if (page === this.numTotalPages) {
        page = 1
      } else {
        page++
      }
      this.setPage(page)
    },
    prev: function () {
      let page = this.page
      if (page === 1) {
        page = this.numTotalPages
      } else {
        page--
      }
      this.setPage(page)
    },
    setPage: function (page) {
      this.page = page
      this.resetInterval()
      this.$emit('change', { page: this.page })
    },
    resetInterval: function () {
      clearInterval(this.autoplayIntervalInstance)
      this.autoplayIntervalInstance = setInterval(() => {
        this.next()
      }, 10000)
    },
    toggleAutoplay: function () {
      this.isAutoplayPaused = !this.isAutoplayPaused
      if (!this.isAutoplayPaused) {
        this.resetInterval()
      } else {
        clearInterval(this.autoplayIntervalInstance)
      }
    },
  },
  computed: {
    left: function () {
      // initial left - distance between numbers * which page it is - page starts from 1
      return -14 - 60 * (this.page - 1)
    },
  },
  mounted() {
    this.resetInterval()
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  user-select: none;
  position: relative;
  overflow: hidden;
}

.navigate-left,
.navigate-right {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}

.navigate-left {
  left: 0;
  right: 80%;
  background: linear-gradient(
    90deg,
    var(--foreground-color) 0%,
    var(--foreground-color) 45%,
    rgba(34, 32, 33, 0) 100%
  );
}

.navigate-right {
  right: 0;
  left: 80%;
  background: linear-gradient(
    -90deg,
    var(--foreground-color) 0%,
    var(--foreground-color) 45%,
    rgba(34, 32, 33, 0) 100%
  );
}

.navigate-right span,
.navigate-left span {
  opacity: 0.2;
  transition: opacity linear 0.5s;
}

.navigate-right:hover span,
.navigate-left:hover span {
  opacity: 1;
}

.wrapper {
  height: 72px;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  justify-content: center;
}

.pages {
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
  transition: left linear 0.4s;
  display: flex;
  /* left: calc( left -60px) */
}

.box {
  width: 32px;
  height: 32px;
  border: 4px solid var(--foreground-color);
  position: relative;
}

.pages span {
  margin-right: 20px;
  margin-left: 10px;
  transition: opacity linear 0.5s;
  opacity: 0.2;
  width: 30px;
  text-align: center;
  line-height: 1.1;
}
.pages span:hover {
  opacity: 0.5;
  cursor: pointer;
}
.pages span.accent {
  opacity: 1;
}

.draw {
  transition: color 0.25s;
}
.draw::before,
.draw::after {
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

.draw::before {
  top: 0;
  left: 0;
}

.draw::after {
  bottom: 0;
  right: 0;
}

.draw:hover::before,
.draw:hover::after {
  width: 100%;
  height: 100%;
}

.draw:hover::before {
  border-top-color: white;
  border-right-color: white;
  transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
}

.draw:hover::after {
  border-bottom-color: white;
  border-left-color: white;
  transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s,
    height 0.25s ease-out 0.75s;
}

.container.invert .box,
.container.invert .pages span {
  border-color: var(--background-color);
  color: var(--background-color);
}

.autoplay-controls {
  position: relative;
  text-align: center;
  color: white;
  transition: opacity linear 0.5s;
  opacity: 0.2;
  cursor: pointer;
}

.autoplay-controls:hover {
  opacity: 0.5;
}

@media screen and (max-width: 480px) {
  .paging {
    margin-top: 0;
  }

  .autoplay-controls {
    margin-top: 24px;
  }
}
</style>