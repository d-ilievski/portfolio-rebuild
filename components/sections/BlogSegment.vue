<template>
  <div class="segment-container">
    <segment-title text="Blog" id="blog-segment-title" class="close" />

    <p>I write about software development, product, UX, and tech philosophy.</p>

    <div class="blog-link">
      <a href="https://daniel.btw.so/" target="_blank">Check out my blog!
        <fa class="icon" :icon="['fa', 'external-link-alt']" />
      </a>
    </div>
  </div>
</template>

<script>

export default {}
</script>

<style scoped>
.unstyled::after {
  display: none;
}

.blog-link {
  margin-top: 16px;
  font-size: 1.3rem;
}

.blog-link .icon {
  font-size: .8rem;
  margin-bottom: .3rem;
}
</style>