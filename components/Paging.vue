<template>
  <div class="container" @click="next">
    <div
      class="wrapper"
      v-touch:swipe.right="prev"
      v-touch:swipe.left="next"
      v-touch:swipe.up="(e) => e.preventDefault()"
      v-touch:swipe.down="(e) => e.preventDefault()"
    >
      <div class="box draw"></div>
      <div class="pages" :style="{ left: left + 'px' }">
        <span
          v-for="i in numTotalPages"
          :key="i"
          :class="{ accent: i === page }"
          v-touch:tap="() => setPage(i - 1)"
          >{{ i }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
    }
  },
  props: {
    numTotalPages: Number,
  },
  methods: {
    next: function () {
      if (this.isLast) {
        this.page = 1
      } else {
        this.page++
      }
    },
    prev: function () {
      if (this.page === 1) {
        this.page = this.numTotalPages
      } else {
        this.page--
      }
    },
    setPage: function (page) {
      this.page = page
    },
  },
  computed: {
    isLast: function () {
      console.log(this.left + 10, this.numTotalPages * -60)
      // this.numTotalPages - 1 zaso prviot element e na pozicija
      // -60 turned out to be a magic number for a reason im too high to understand
      return this.left + 10 === (this.numTotalPages - 1) * -60
    },
    left: function () {
      return -10 - 60 * (this.page - 1)
    },
  },
}
</script>

<style scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  user-select: none;
}

.wrapper {
  height: 72px;
  display: flex;
  align-items: center;
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
}

.pages span {
  margin-right: 20px;
  margin-left: 10px;
  transition: opacity linear 0.5s;
  opacity: 0.2;
  width: 30px;
  text-align: center;
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
</style>