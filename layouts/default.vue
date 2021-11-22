<template>
  <Nuxt />
</template>

<style>
html {
  --foreground-color: #222021;
  --background-color: #fff;
  --accent-color: #842bbb;

  font-family: 'Lato', sans-serif, 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  color: var(--foreground-color);
  background-color: var(--background-color);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a,
.text-link {
  color: var(--foreground-color);
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
}

a::after,
.text-link::after {
  content: '';
  height: 2px;
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 100%;
  transition: right 0.2s ease-in-out;
  background: var(--foreground-color);
}

a.invert,
.text-link.invert a {
  color: var(--background-color);
}
a.invert::after,
.text-link.invert::after {
  background: var(--background-color);
}

a:hover::after,
.text-link:hover::after {
  right: 0%;
}

h1,
h2 {
  text-transform: uppercase;
}

h2 {
  margin-bottom: 24px;
}

h3 {
  margin: 1rem 0;
}

p {
  line-height: 1.4;
}

.container {
  display: flex;
  justify-content: center;
}

.container.invert {
  background: var(--foreground-color);
}

.fullscreen-container {
  min-height: 100vh;
  display: flex;
}

.segment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 64px 48px;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

@media screen and (max-width: 480px) {
  .segment-container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
