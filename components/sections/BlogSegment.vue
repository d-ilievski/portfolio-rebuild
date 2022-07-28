<template>
  <div class="segment-container">
    <segment-title text="Blog" id="blog-segment-title" class="close" />


    <NuxtLink to="/blog" class="unstyled">
      <div id="coming-soon">
        Coming soon!
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.unstyled::after {
  display: none;
}
</style>