<template>
  <nav :class="{ open: isOpen }">
    <ul class="navigation">
      <li>ABOUT</li>
      <li>WORK</li>
      <li>BLOG</li>
      <li>CONTACT</li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
  }),
  mounted() {
    setTimeout(() => {
      this.isOpen = true
    }, 2800)
  },
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  width: 0px;
  height: 100%;
  transition: width 0.25s ease-in-out;
}

nav.open {
  width: 250px;
}

.navigation {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: 100%;
  width: 100%;

  overflow: hidden;
  background: var(--foreground-color);
  color: white;
  list-style: none;

  font-weight: bold;
  font-size: 1.2em;

  animation-fill-mode: forwards;
}

.navigation li {
  transition: transform 0.2s linear;
  transition: 0.2s;
}

.navigation li:hover {
  transform: scale(1.2);
  cursor: pointer;
}
</style>