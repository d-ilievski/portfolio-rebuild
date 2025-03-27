<template>
  <div class="wrapper">
    <div class="left">
      <div class="image" v-if="item.image">
        <div class="image-container">
          <img loading="lazy" :src="require(`../static/${item.image}`)" />
        </div>
      </div>
    </div>
    <div class="right">
      <h2 class="title">{{ item.title }}</h2>
      <p class="paragraph" v-for="(p, index) in item.paragraphs" :key="index" v-html="p">
      </p>
      <div class="skills">
        <h4>Technologies</h4>
        <p>
          {{ getSkillsString(item.technologies, 'name') }}
        </p>
      </div>
      <div class="skills">
        <h4>Skills and responsibilities</h4>
        <p>
          {{ item.skills }}
        </p>
      </div>
      <div class="icons">
        <div class="icon-container" v-for="(t, index) in item.technologies" :key="index">
          <fa v-if="t.icon.length > 1" class="icon" :icon="t.icon" />
          <v-icon v-else :size="4" :icon="t.icon[0]" color="var(--background-color)"></v-icon>
          <div class="icon-desc">{{ t.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'
export default {
  props: {
    item: Object,
  },
  components: {
    'v-icon': Icon,
  },
  methods: {
    getSkillsString: function (skillsArray, key) {
      if (!skillsArray?.length) {
        return
      }

      let skillsString = '';
      skillsArray.forEach((s, index) => {
        skillsString += `${key ? s[key] : s}${index !== skillsArray.length - 1 ?
          ', '
          : '.'}`
      })

      return skillsString;
    }
  }
}
</script>

<style scoped>
* {
  color: var(--background-color);
}

.wrapper {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: flex-start;
}

.wrapper .left {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
}

.wrapper .right {
  flex: 1;
  margin-left: 64px;
  padding-right: 32px;
}

.image-container {
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 10px solid var(--foreground-color);
  position: relative;
  overflow: hidden;
}

.image {
  position: relative;
}

.image-container img {
  width: 100%;
  height: auto;
}

.title {
  margin-bottom: 24px;
  display: block;
  font-size: 1.6em;
}

.paragraph {
  margin-bottom: 16px;
}

.icons {
  margin-top: 32px;
  font-size: 2em;
  display: flex;
  align-items: center;
}

.icon-container {
  position: relative;
  display: inline-block;
  margin: 0px 16px;
}

.icon {
  opacity: 0.5;
  transition: opacity 0.2s linear;
}

.icon-container:hover .icon,
.icon-container:hover .icon-desc {
  opacity: 1;
}

.icon-desc {
  font-size: 1rem;
  color: var(--background-color);
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s linear;
  white-space: nowrap;
}

.skills {
  margin-bottom: 16px;
}

@media screen and (max-width: 480px) {

  .wrapper {
    display: block;
  }

  .wrapper .right {
    margin-left: 0;
  }

  .wrapper .left {
    margin-left: 0;
  }

  .image-container {
    width: auto;
    height: auto;
  }

  .title {
    margin-bottom: 16px;
    font-size: 1.6em;
  }
}
</style>