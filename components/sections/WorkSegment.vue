<template>
  <div class="segment-container">
    <segment-title invert text="Work" id="work-segment-title" class="close" />
    <work-carousel :items="workItems"></work-carousel>
  </div>
</template>

<script>
export default {
  data: () => ({
    workItems: [
      {
        id: 1,
        title: 'Menusano',
        image: 'profile-photo.png',
        paragraphs: [
          'Setting up the architecture, making technical decisions, and being fully responsible for the front-end part of the nutrition analysis software, MenuSano. I also developed the front end for the initial version of the nutritional analysis software, along with the admin panel and the nutritional label designer tool.',
          'Developed as part of EmitKnowledge',
        ],
        technologies: [
          {
            icon: ['fab', 'vuejs'],
            name: 'Vue.js',
          },
          {
            icon: ['fab', 'js'],
            name: 'JavaScript Canvas',
          },
        ],
      },
      {
        id: 2,
        title: 'Menusano',
        image: 'profile-photo.png',
        paragraphs: [
          'Setting up the architecture, making technical decisions, and being fully responsible for the front-end part of the nutrition analysis software, MenuSano. I also developed the front end for the initial version of the nutritional analysis software, along with the admin panel and the nutritional label designer tool.',
        ],
        technologies: [
          {
            icon: ['fab', 'vuejs'],
            name: 'Vue.js',
          },
        ],
      },
    ],
  }),
}
</script>

<style scoped>
</style>