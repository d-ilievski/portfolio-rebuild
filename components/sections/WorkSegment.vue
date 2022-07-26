<template>
  <div class="segment-container">
    <segment-title invert text="Work" id="work-segment-title" class="close" />
    <work-carousel :items="workItems"></work-carousel>
  </div>
</template>

<script>
import { jquery, knockout, graphql } from '@/utils/icons'

export default {
  data: () => ({
    workItems: [
      {
        id: 'primewood',
        title: 'Primewood.la',
        paragraphs: [
          'A print on demand web designer application for creating custom skateboards.',
          'Freelance project available on <a class="text-link invert" href="http://primewood.la/" target="_blank">primewood.la</a>.',
        ],
        technologies: [
          {
            icon: ['fab', 'react'],
            name: 'React',
          },
          {
            icon: ['fab', 'js'],
            name: 'JavaScript Canvas',
          },
          {
            icon: ['fab', 'aws'],
            name: 'AWS',
          },
          {
            icon: ['fab', 'node'],
            name: 'Node.js',
          },
          {
            icon: ['fab', 'shopify'],
            name: 'Shopify',
          },
        ],
        skills: 'Prototyping, UX design, research, frontend development, backend development, documentation.'
      },
      {
        id: 'fly',
        title: 'Hiring Tech Assessment Platform',
        paragraphs: [
          'A product that helps companies identify creative and technical talent. This Canadian startup allows companies to assess potential hires in a high-security virtual environment.',
          'Freelance project'
        ],
        technologies: [
          {
            icon: ['fab', 'react'],
            name: 'React',
          },

          {
            icon: ['fab', 'aws'],
            name: 'AWS',
          },
          {
            icon: [graphql],
            name: 'GraphQL',
          },
        ],
        skills: 'Frontend development, design iterations, ensuring secure environment on the frontend.',
      },
      // {
      //   id: 1,
      //   title: 'Obleci.me',
      //   paragraphs: [
      //     'A charity platform for helping homeless people and people in need. By creating ads, the people who would like to donate clothes or food are connected directly with the people in need so they can pick up the donation at a certain location.',
      //     "Obleci.me is a project that I developed by myself for my bachelor's thesis which covered the technology and practices of React.",
      //   ],
      //   technologies: [
      //     {
      //       icon: ['fab', 'react'],
      //       name: 'React',
      //     },
      //     {
      //       icon: ['fab', 'google'],
      //       name: 'Google Maps API',
      //     },
      //   ],
      //   skills: '',
      // },
      {
        id: 'lori',
        title: 'Lori',
        paragraphs: [
          'A web application in a form of a browser extension that reduces the time it takes to design creative materials for social media marketing campaigns. It allows the users to generate multiple marketing assets with a few simple steps.',
          'Personal project - <a class="text-link invert" href="http://iamlori.app/" target="_blank">iamlori.app</a>'
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
            icon: ['fab', 'chrome'],
            name: 'Chrome Extension API',
          },
        ],
        skills: 'Product research, development of the whole application.'
      },
      {
        id: 'menusano',
        title: 'Menusano',
        paragraphs: [
          'Nutrition analysis software, MenuSano. I also developed the front end for the initial version of the nutritional analysis software, along with the admin panel and the nutritional label designer tool.',
          'Developed as part of EmitKnowledge, available on <a href="http://menusano.com" target="_blank" class="text-link invert">menusano.com</a>',
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
        skills: 'Setting up the architecture, making technical decisions, leading and being fully responsible for the front-end web applicatin.'
      },
      {
        id: 'trackado',
        title: 'Trackado',
        paragraphs: [
          'Enterprise contract management solution.',
          'Developed as part of EmitKnowledge, available on <a href="https://www.trackado.com/#jupiterx-main" target="_blank" class="text-link invert">trackado.com</a>',
        ],
        technologies: [
          {
            icon: [jquery],
            name: 'jQuery',
          },
          {
            icon: [knockout],
            name: 'Knockout.js',
          },
          {
            icon: ['fab', 'vuejs'],
            name: 'Vue.js',
          },
        ],
        skills: 'Developing new features on the frontend, maintenance, improving and renewing the technology stack with gradually implementing Vue'
      },
    ],
  }),
}
</script>

<style scoped>
</style>