<template>
  <footer id="footer-segment">
    <img src="~/assets/astro.svg" alt="Astronaut floating" class="astronaut" />
    <div>
      Crafted with
      <span class="heart">❤</span>
      in outer space.
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  font-family: 'Courier New', monospace;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 24px;
  position: relative;
  color: var(--background-color);
}
.heart {
  color: #e25555;
}
.astronaut {
  position: absolute;
  bottom: 20px;
  left: calc(50% + 45px);
  height: 80px;

  animation: astroFloat 5s ease;
  animation-iteration-count: infinite;
  fill: #e25555;
}

@keyframes astroFloat {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>