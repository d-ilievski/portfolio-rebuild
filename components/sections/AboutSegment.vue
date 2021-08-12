<template>
  <div class="segment-container">
    <segment-title text="About" />
    <div class="wrapper">
      <div class="left">
        <div class="name-card">
          <div class="image-container">
            <img
              alt="A picture of Daniel Ilievski"
              src="~/assets/profile-photo-daniel.jpg"
            />
          </div>
          <h3>Who's this guy?</h3>
          <p>
            My name is Daniel Ilievski and I live in
            <a
              class="grow"
              target="_blank"
              href="https://www.google.com/maps/place/Amsterdam"
              ><strong>Amsterdam</strong></a
            >. Working as an IT Engineer at
            <a class="grow" target="_blank" href="https://www.abnamro.com/">
              <strong>ABN AMRO</strong></a
            >.
          </p>
          <p>
            I love creating user-centric tech products with captivating UIs and
            intuitive UX.
          </p>
          <a class="text-link cta"
            ><strong>Lets create something great!</strong></a
          >
        </div>
      </div>
      <div class="right">
        <p class="experience">
          With 4 years of experience in the industry, I've worked, both as a
          backend and a frontend engineer on successful products in the Internet
          banking, gaming &amp; gambling, and IT service-providing industries.
        </p>
        <h2>Skills &amp; Technologies</h2>
        <ul class="skills-list">
          <li>
            <span>Skills: </span>
            Web Development, App Development, UI/UX design
          </li>
          <li>
            <span>Languages: </span>
            JavaScript, TypeScript
          </li>
          <li>
            <span>Libraries: </span>
            React, Vue.јs, Node.js, Express
          </li>
          <li>
            <span>Tools: </span>
            Figma, Adobe Illustrator
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
export default {
  name: 'About',
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
}

.image-container img {
  width: 100%;
}

.name-card {
  transition: all 2s ease;
  border-width: 4px;
  border-style: solid;
  border-color: var(--foreground-color);
  padding: 16px;
  padding-bottom: 24px;
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
}

.skills-list li span {
  text-transform: uppercase;
  font-weight: bold;
}
</style>