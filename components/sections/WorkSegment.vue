<template>
  <div class="segment-container">
    <segment-title invert text="Work" id="work-segment-title" class="close" />
    <work-carousel :items="workItems"></work-carousel>
    <div v-html="knockout"></div>
  </div>
</template>

<script>
import { jquery, knockout } from '@/utils/icons'

export default {
  data: () => ({
    knockout,
    workItems: [
      {
        id: 1,
        title: 'Obleci.me',
        paragraphs: [
          'A charity platform for helping homeless people and people in need. By creating ads, the people who would like to donate clothes or food are connected directly with the people in need so they can pick up the donation at a certain location.',
          "Obleci.me is a project that I developed by myself for my bachelor's thesis which covered the technology and practices of React.",
        ],
        technologies: [
          {
            icon: ['fab', 'react'],
            name: 'React',
          },
          {
            icon: ['fab', 'google'],
            name: 'Google Maps API',
          },
        ],
      },
      {
        id: 2,
        title: 'Lori',
        paragraphs: [
          'A personal project in form of a browser extension that reduces the time it takes to design creative materials for social media marketing campaigns. It allows the users to generate multiple marketing assets with a few simple steps.',
        ],
        technologies: [
          {
            icon: ['fab', 'vuejs'],
            name: 'Vue.js',
          },
          {
            icon: ['fab', 'chrome'],
            name: 'Chrome Extension API',
          },
        ],
      },
      {
        id: 3,
        title: 'Menusano',
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
          {
            icon: ['fab', 'bootstrap'],
            name: 'Bootstrap',
          },
        ],
      },
      {
        id: 4,
        title: 'Trackado',
        paragraphs: [
          'My work on this project included developing new features and maintaining the existing ones while improving and renewing the technology stack for the contract management solution, Trackado.',
          'Developed as part of EmitKnowledge',
        ],
        technologies: [
          {
            icon: ['fab', 'js'],
            name: 'JavaScript',
          },
          {
            icon: [jquery],
            name: 'jQuery',
          },
          {
            icon: [knockout],
            name: 'Knockout.js',
          },
        ],
      },
    ],
  }),
}
</script>

<style scoped>
</style>