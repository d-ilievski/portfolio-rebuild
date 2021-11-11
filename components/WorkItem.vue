<template>
  <div class="wrapper">
    <div class="left">
      <div class="image" v-if="item.image">
        <div class="image-backdrop"></div>
        <div class="image-container">
          <img :src="require(`@/assets/${item.image}`)" />
        </div>
      </div>
    </div>
    <div class="right">
      <h1 class="title">{{ item.title }}</h1>
      <p class="paragraph" v-for="(p, index) in item.paragraphs" :key="index">
        {{ p }}
      </p>
      <div class="icons">
        <div
          class="icon-container"
          v-for="(t, index) in item.technologies"
          :key="index"
        >
          <fa v-if="t.icon.length > 1" class="icon" :icon="t.icon" />
          <v-icon v-else :size="4" :icon="t.icon[0]"></v-icon>
          <div class="icon-desc">{{ t.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  props: {
    item: Object,
  },
  components: {
    'v-icon': Icon,
  },
}
</script>

<style scoped>
* {
  color: var(--background-color);
}

.wrapper {
  /* if i disable flex here i can still use the carousel */
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.wrapper .left {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
}

.wrapper .right {
  flex: 1;
  margin-left: 64px;
  padding-right: 32px;
}

.image-container {
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px solid var(--foreground-color);
  position: relative;
  overflow: hidden;
}
.image {
  position: relative;
}
.image-backdrop {
  width: 250px;
  height: 250px;
  background: var(--background-color);
  position: absolute;
  top: 30px;
  left: 30px;
}
.image-container img {
  width: 100%;
  height: auto;
}
.title {
  margin-bottom: 24px;
}

.paragraph {
  margin-bottom: 16px;
}

.icons {
  margin-top: 32px;
  font-size: 2em;
  display: flex;
  align-items: center;
}
.icon-container {
  position: relative;
  display: inline-block;
  margin: 0px 16px;
}
.icon {
  opacity: 0.5;
  transition: opacity 0.2s linear;
}
.icon-container:hover .icon,
.icon-container:hover .icon-desc {
  opacity: 1;
}
.icon-desc {
  font-size: 1rem;
  color: var(--background-color);
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s linear;
  white-space: nowrap;
}
</style>