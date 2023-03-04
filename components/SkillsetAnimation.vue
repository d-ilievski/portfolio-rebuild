<template>
  <div
    class="slider-container"
    :style="{
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      height: '200px',
    }"
  >
    <template v-for="(row, index) in styledSkills">
      <div
        class="slider-row"
        :style="{
          top: `${index * 50}px`,
          animationDuration: row.speed,
        }"
        :class="{ right: index % 2 }"
        :key="index"
      >
        <template v-for="(skill, index) in row.items">
          <span
            :style="{
              fontSize: skill.size,
              marginRight: skill.gap,
            }"
            :key="skill.name + index"
            class="skill"
            >{{ skill.name }}</span
          >
        </template>
      </div>
    </template>
  </div>
</template>

<script>
const skillSet = [
  'Windows',
  'Slack',
  'Azure',
  'Jira',
  'Visual Studio Code',
  'Git',
  'Programming',
  'Internet Protocols',
  'Mathematics',
  'Computers',
  'Software Engineering',
  'Agile',
  'Nuxt',
  'JavaScript',
  'Vue.js',
  'AngularJS',
  'Jenkins',
  'ServiceNow',
  'LitElement',
  'TestCafe',
  'Jest',
  'Atlassian Confluence',
  'TypeScript',
  'Knockout.js',
  'jQuery',
  'Adobe Experience Design (XD)',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Canva',
  'Java EE',
  'Java',
  'Hibernate',
  'JSON Web Tokens (JWT)',
  'MySQL',
  'Maven',
  'React',
  'React Native',
  'Node.js',
  'Figma',
  'Canvas',
  'UI Design',
  'Bootstrap',
  'Vuex',
  'Google Maps API',
  'Chrome API',
  'Fabric.js',
  'Graphic Design',
  'Web Development',
  'App Development',
  'UI/UX Design',
]

const shuffleArray = (array) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

const randomNumber = (min, max, round) => {
  const rand = Math.random() * (max - min) + min
  if (round) {
    return Math.floor(rand)
  } else {
    return rand
  }
}

export default {
  name: 'SkillsetAnimation',
  data: function () {
    return {
      skills: skillSet,
    }
  },
  computed: {
    styledSkills: function () {
      const containerArray = []
      for (let i = 0; i < 4; i++) {
        const shuffledSkills = shuffleArray(this.skills)
        const row = shuffledSkills.map((skill) => {
          const size = randomNumber(0.7, 2, false)
          const margin = randomNumber(8, 64, true)
          return {
            name: skill,
            size: `${size}rem`,
            gap: `${margin}px`,
          }
        })
        const speed = randomNumber(60, 120, true) + 's'
        containerArray.push({ items: row, speed })
      }
      return containerArray
    },
  },
}
</script>

<style scoped>
.slider-row {
  animation: rotate linear infinite alternate;
  position: absolute;
  white-space: nowrap;
}
.slider-row.right {
  animation-direction: alternate-reverse;
}

.slider-row:hover {
  animation-play-state: paused;
}

.skill {
  color: var(--foreground-color);
  opacity: 0.4;
}

.skill:hover {
  color: var(--foreground-color);
  cursor: default;
}

@keyframes rotate {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-6000px);
  }
}
</style>