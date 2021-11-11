<template>
  <div class="work-carousel">
    <div class="work-items-container" ref="carouselContainer">
      <div
        class="work-items-wrapper"
        :style="{
          width: `${items.length * itemWidth}px`,
          transform: `translateX(${currentPositionPx}px)`,
        }"
      >
        <template v-for="item in items">
          <work-item
            :style="{
              width: `${itemWidth}px`,
              maxWidth: '40%',
              margin: 'auto',
            }"
            :key="item.id"
            :item="item"
          ></work-item>
        </template>
      </div>
    </div>
    <paging
      class="paging"
      v-if="items.length"
      :numTotalPages="items.length"
      :arrows="true"
      @change="({ page }) => setIndex(page - 1)"
      invert
    ></paging>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentItemIndex: 0,
      itemWidth: 0,
    }
  },
  props: {
    items: {
      type: Array,
      default: () => [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    },
  },
  methods: {
    setIndex: function (index) {
      this.currentItemIndex = index
    },
    setItemWidth: function () {
      this.itemWidth = this.$refs.carouselContainer.offsetWidth
    },
  },
  computed: {
    currentPositionPx: function () {
      const basePosition = this.currentItemIndex * this.itemWidth * -1
      //   if (this.currentItemIndex) return basePosition - 100
      return basePosition
    },
  },
  mounted() {
    this.setItemWidth()
    window.addEventListener('resize', this.setItemWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.setItemWidth)
  },
}
</script>

<style scoped>
.work-carousel {
  width: 100%;
}

.segment-container {
  background: var(--foreground-color);
}

.work-items-container {
  width: 100%;
  height: 350px;
  overflow-x: hidden;
}

.work-items-wrapper {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.paging {
  margin-top: 40px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #888;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.5);
  transition: background 1s linear;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 1);
}
</style>