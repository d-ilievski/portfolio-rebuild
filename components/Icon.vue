<template>
  <div
    class="icon"
    v-html="icon"
    :style="{
      width: `${size * 8}px`,
      height: `${size * 8}px`,
      margin: '4px 0',
      fill: color,
    }"
  ></div>
</template>

<script>
export default {
  props: {
    icon: String,
    size: Number,
    color: String,
  },
}
</script>