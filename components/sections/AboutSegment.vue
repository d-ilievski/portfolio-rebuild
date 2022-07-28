<template>
  <div class="segment-container">
    <segment-title text="About" id="about-segment-title" class="close" />
    <div class="wrapper">
      <div class="left">
        <div class="name-card">
          <div class="image-container">
            <nuxt-img format="webp" alt="A picture of Daniel's Room" src="/profile-photo-bg.jpg" />
            <nuxt-img format="webp" alt="A picture of Daniel Ilievski" src="/profile-photo.png" class="person" />
          </div>
          <h3>Who's this guy?</h3>
          <p>
            My name is Daniel Ilievski. I love creating user-centric tech products that solve
            customer pain points with focus on intuitive UX and clean code practices.
          </p>
          <p>
            I live in
            <a class="grow" target="_blank"
              href="https://www.google.com/maps/place/Amsterdam"><strong>Amsterdam</strong></a> and work as an IT
            Engineer at
            <a class="grow" target="_blank" href="https://www.abnamro.com/">
              <strong>ABN AMRO</strong></a>.
          </p>
          <span @click="navigateToContact" class="text-link cta"><strong>Lets create something great!</strong></span>
        </div>
      </div>
      <div class="right">
        <p class="experience">
          Throught my years of experience in the industry, I've worked as a software engineer developing successful
          products in the Internet
          banking, gaming, and IT consultancy industries.
        </p>
        <h2 id="skills-technologies-title">Skills &amp; Technologies</h2>
        <ul class="skills-list">
          <li>
            <span>Skills: </span>
            Web Development, Product Research, Product Management, Prototyping
          </li>
          <li>
            <span>Languages: </span>
            JavaScript, TypeScript
          </li>
          <li>
            <span>Frameworks: </span>
            React, Vue, Node.js, Express
          </li>
          <li>
            <span>Tools: </span>
            Figma, Adobe Creative Suite
          </li>
          <li>
            <span>Cloud: </span>
            Azure, Firebase
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
  margin-bottom: 32px;
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

@media only screen and (max-width: 600px) {
  .wrapper {
    display: block;
  }

  .wrapper .left {
    width: 300px;
    margin: auto;
  }

  .wrapper .right {
    flex: 1;
    margin-left: 0;
    margin-top: 32px;
  }
}
</style>