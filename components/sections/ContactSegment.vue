<template>
  <div class="segment-container">
    <segment-title invert text="Contact" id="contact-segment-title" class="close" />
    <div class="wrapper">
      <!-- <div class="left">
      </div>
      <div class="right">
        <button>
          <span>Grab my cv <fa :icon="['fas', 'download']" /></span>
        </button>
      </div> -->
      <div class="contact-info-content">
        <p>
          If you would like to build something great, hire me, or just to say hi, use the contact form below. I'll get back to you in no time!
        </p>

        <p>
          You can find me on
          <span class="text-link invert"><a href="https://www.linkedin.com/in/daniel-ilievski/"
              rel="noopener noreferrer" target="_blank">
              <fa :icon="['fab', 'linkedin']" /> LinkedIn,
            </a></span>
          see some of my stuff on
          <span class="text-link invert"><a href="https://github.com/d-ilievski" rel="noopener noreferrer"
              target="_blank">
              <fa :icon="['fab', 'github']" /> GitHub
            </a></span>
          or check out my
          <span class="text-link invert"><a href="https://daniel.btw.so/" target="_blank" rel="noopener noreferrer">
              <fa :icon="['fas', 'blog']" /> Blog
            </a></span>
          where I write about things that interest me.
        </p>

        <form name="contact" method="POST" netlify>
          <input type="hidden" name="form-name" value="contact">
          <p>
            <label>Your Name: <input type="text" name="name"></label>
          </p>
          <p>
            <label>Your Email: <input type="email" name="email"></label>
          </p>
          <p>
            <label>Message: <textarea name="message" rows="6"></textarea></label>
          </p>

          <p class="button-row">
            <button type="submit"><span>Send</span></button>
          </p>
        </form>


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
  padding: 8px 16px;
  font-size: 1.3rem;
  /* border: 4px solid var(--background-color); */
  border: none;
  color: var(--background-color);
  text-transform: uppercase;
  cursor: pointer;
  transition: border 0.05s ease-in-out;
  margin: 10px 0;
  position: relative;
  font-weight: bold;
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

.contact-info-content {
  padding: 0 64px;
}

form {
  margin: auto;
  width: 600px;
  margin-top: 92px;
}

form input,
form textarea {
  background: none;
  color: var(--background-color);
  outline: none;
  border: none;
  border-bottom: 1px solid var(--background-color);
  padding: .3rem;
  font-size: 1.3rem;
  min-height: 2rem;
  width: 400px;
  resize: vertical;
}

form label {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  white-space: nowrap;
}

form .button-row {
  display: flex;
  justify-content: flex-end;
}

@media screen and (max-width: 480px) {}
</style>