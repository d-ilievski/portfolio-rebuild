<template>
  <div class="segment-container">
    <segment-title text="About" id="about-segment-title" class="close" />
    <div class="wrapper">
      <div class="left">
        <div class="name-card">
          <div class="image-container">
            <nuxt-img class="background" format="webp" alt="A picture of Daniel's Room" width="260" height="385"
              src="/profile-photo-bg.jpg" />
            <nuxt-img class="person" format="webp" alt="A picture of Daniel Ilievski" width="260" height="385"
              src="/profile-photo.png" />
          </div>
          <h2 class="name-card-title">In a nutshell...</h2>
          <p>
            👋 My name is Daniel Ilievski.
          </p>
          <p>
            📌 <a class="grow" target="_blank" rel="noopener noreferrer"
              href="https://www.google.com/maps/place/Amsterdam"><strong>Amsterdam, Netherlands</strong></a>
          </p>
          <p>
            💻 I'm a Lead Software Engineer at
            <a class="grow" target="_blank" href="https://www.abnamro.com/" rel="noopener noreferrer">
              <strong>ABN AMRO</strong></a>.
          </p>
          <p>
            🔗 I created <a class="grow" target="_blank" rel="noopener noreferrer"
              href="https://www.clinktags.com/"><strong>Clink</strong></a> and <a class="grow" target="_blank" rel="noopener noreferrer"
              href="https://anonimno.mk/"><strong>anonimno.mk</strong></a> in my free time.
          </p>
          <span @click="navigateToContact" class="text-link cta"><strong>👇 Let's get in touch!</strong></span>
        </div>
      </div>
      <div class="right">
        <p class="experience">
          I love creating user-centric web tech products, focusing on intuitive UX, performance, and clean code
          practices. As a front-end focused full stack engineer, I enjoy creating real-time, complex, and accessible web
          applications using modern JavaScript technologies.
        </p>
        <h2 id="skills-technologies-title">Skills &amp; Technologies</h2>
        <ul class="skills-list">

          <li>
            <span>Front-end: </span>
            TypeScript, Vue.js (Nuxt), React (Next.js), LitElement, jQuery, Knockout, TestCafe
          </li>

          <li>
            <span>Back-end: </span>
            TypeScript, Node.js, Express, Nest.js, GraphQL, MySQL, MongoDB
          </li>

          <li>
            <span>Infrastructure: </span>
            Microsoft Azure, AWS, Docker, Jenkins, Firebase
          </li>

          <li>
            <span>Tools: </span>
            Git, Figma, Adobe Creative Suite
          </li>

          <li>
            <span>Skills: </span>
            Web Development, Product Management, Prototyping, Design, Leadership, Pragmatic approach
          </li>

        </ul>

        <skillset-animation />
      </div>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'About',
  methods: {
    navigateToContact() {
      gsap.to(window, {
        scrollTo: `#contact-segment`,
        ease: 'power4.out',
        duration: 3,
      })
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: flex-start;
  width: 100%;
}

.wrapper .left {
  width: 300px;
}

.wrapper .right {
  flex: 1;
  margin-left: 64px;
}

.image-container {
  max-height: 300px;
  overflow: hidden;
  position: relative;
}

.image-container img {
  width: 100%;

}

.image-container .person {
  position: absolute;
  top: 260px;
  left: 0;
}

.name-card {
  border-width: 4px;
  border-style: solid;
  border-color: var(--foreground-color);
  padding: 16px;
  padding-bottom: 24px;
  height: 340px;
  overflow: hidden;
}

p {
  margin-bottom: 16px;
}

.experience {
  margin-bottom: 48px;
  font-size: 1.3rem;
  line-height: 1.5;
}

.skills-list {
  list-style: none;
  margin-bottom: 56px;
}

.skills-list li {
  margin-bottom: 16px;
  opacity: 0;
}

.skills-list li span {
  text-transform: uppercase;
  font-weight: bold;
}

#skills-technologies-title {
  opacity: 0;
}

.name-card-title {
  display: block;
  font-size: 1.17em;
  margin: 1rem 0;
  font-weight: bold;
  text-transform: none;
}

@media only screen and (max-width: 600px) {
  .wrapper {
    display: block;
  }

  .wrapper .left {
    width: auto;
    margin: auto;
  }

  .image-container {
    width: fit-content;
    margin: auto;
    margin-bottom: 32px;
  }


  .wrapper .right {
    flex: 1;
    margin-left: 0;
    margin-top: 32px;
  }
}
</style>