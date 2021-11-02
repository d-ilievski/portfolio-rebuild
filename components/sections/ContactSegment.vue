<template>
  <div class="segment-container">
    <segment-title
      invert
      text="Contact"
      id="contact-segment-title"
      class="close"
    />
    <div class="wrapper">
      <div class="left">
        <p>
          If you would like to build something great or just say hi, email me at
          <a
            target="_top"
            href="mailto:daniel.d.ilievski@gmail.com"
            class="text-link invert"
            >daniel.d.ilievski@gmail.com</a
          >.
        </p>

        <p>
          Also, you can find me on
          <span class="text-link invert"
            ><a
              href="https://www.linkedin.com/in/daniel-ilievski/"
              target="_blank"
            >
              <fa :icon="['fab', 'linkedin']" /> LinkedIn
            </a></span
          >, see some of my projects on
          <span class="text-link invert"
            ><a
              href="https://github.com/d-ilievski"
              rel="noopener noreferrer"
              target="_blank"
              ><fa :icon="['fab', 'github']" /> GitHub</a
            ></span
          >
          or check out my
          <span class="text-link invert"
            ><a href="https://www.instagram.com/vo1d.mind/" target="_blank"
              ><fa :icon="['fab', 'instagram']" /> Instagram</a
            ></span
          >
          where I post some pictures I take.
        </p>
      </div>
      <div class="right">
        <!-- <button>
          <span>Grab my cv <fa :icon="['fas', 'download']" /></span>
        </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: flex-start;
  width: 100%;
  color: var(--background-color);
}

.wrapper .left {
  flex: 1;
}

.wrapper .right {
  flex: 1;
  margin-left: 64px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  display: flex;
}

p {
  margin-bottom: 20px;
  font-size: 1.4em;
  line-height: 1.7em;
}

a::after,
.text-link::after {
  height: 3px;
}

button {
  background: none;
  padding: 16px;
  font-size: 1.3em;
  line-height: 1.7em;
  border: 4px solid var(--background-color);
  color: var(--background-color);
  text-transform: uppercase;
  cursor: pointer;
  transition: border 0.05s ease-in-out;
  margin: 10px 0;
  position: relative;
}

button:active {
  border-width: 1px;
}

button span {
  position: relative;
  padding-bottom: 4px;
}

button span::after {
  content: '';
  height: 3px;
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 100%;
  transition: right 0.2s ease-in-out;
  background: var(--background-color);
}
button:hover span::after {
  right: 0%;
}
</style>