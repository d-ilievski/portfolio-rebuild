<template>
  <div class="segment-container">
    <segment-title invert text="Work" id="work-segment-title" class="close" />
    <work-carousel :items="workItems"></work-carousel>
  </div>
</template>

<script>
import { graphql } from '@/utils/icons'

export default {
  data: () => ({
    workItems: [
      {
        id: 'ideal2.0',
        title: 'iDeal 2.0',
        paragraphs: [
          'Planning and leading the development efforts of the web front-end for iDeal 2.0, a Dutch high-impact payment system with a SLA of 99.88%, processing ~30 transactions per second.',
          'Delivered as part of ABN AMRO. <a class="text-link invert" href="https://www.abnamro.nl/en/personal/payments/making-payments/ideal.html" target="_blank" rel="noopener noreferrer">Read More</a>.',
        ],
        technologies: [
          {
            icon: ['fab', 'vuejs'],
            name: 'Vue.js',
          },
          {
            icon: ['fab', 'microsoft'],
            name: 'Microsoft Azure',
          },
        ],
        skills: 'Team leadership, development, testing automation, setting up infrastructure and processes, roadmap, backlog and stakeholder management',
        image: 'ideal.svg'
      },
      {
        id: 'primewood',
        title: 'Primewood.la',
        paragraphs: [
          'A print on demand web designer application for creating custom skateboards. I developed the feature end-to-end from design and planning to implementation.',
          'Freelance project available on <a class="text-link invert" href="http://primewood.la/" target="_blank" rel="noopener noreferrer">primewood.la</a>.',
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
        skills: 'Prototyping, UX design, research, frontend development, backend development, documentation.',
        image: 'primewood.png'
      },
      {
        id: 'fly',
        title: 'Examplery',
        paragraphs: [
          'A product that helps companies identify creative and technical talent. This Canadian startup allows companies to assess potential hires\' technical skills in a high-security virtual environment. I developed the highly-secure web virtual environment.',
          'Freelance project - <a class="text-link invert" target="_blank" rel="noopener noreferrer" href="https://www.examplery.com/demo.html">Demo</a>'
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
        image: 'examplery.png'
      },
      {
        id: 'traliant',
        title: 'Traliant LMS',
        paragraphs: [
          'Development of a LMS for engaging and interactive workplace compliance training including a complex admin panel.',
          'Freelance project'
        ],
        technologies: [
          {
            icon: ['fab', 'vuejs'],
            name: 'Vue.js',
          },

          {
            icon: ['fab', 'docker'],
            name: 'Docker',
          }
        ],
        skills: 'Frontend development, implementation of testing practices, open-source contribution.',
        image: 'traliant.png'
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
          'A web application in the form of a browser extension that reduces the time it takes to design creative materials for social media marketing campaigns. It allows the users to generate multiple marketing assets with a few simple steps.',
          'Personal project'
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
          {
            icon: ['fab', 'node'],
            name: 'Node.js',
          },
        ],
        skills: 'Product research, development of the whole application.',
        image: 'lori.png'
      },
      {
        id: 'menusano',
        title: 'MenuSano',
        paragraphs: [
          'I developed the front-end for the nutritional analysis software MenuSano, along with the admin panel and the nutritional label designer tool.',
          'Developed as part of EmitKnowledge, available on <a href="http://menusano.com" target="_blank" rel="noopener noreferrer" class="text-link invert">menusano.com</a>',
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
        skills: 'Setting up the architecture, ensuring performance of the designer tool, development of the application, leading and being fully responsible for the front-end.',
        image: 'menusano.png'
      },
      // {
      //   id: 'trackado',
      //   title: 'Trackado',
      //   paragraphs: [
      //     'Enterprise contract management solution.',
      //     'Developed as part of EmitKnowledge, available on <a href="https://www.trackado.com/" target="_blank" rel="noopener noreferrer" class="text-link invert">trackado.com</a>',
      //   ],
      //   technologies: [
      //     {
      //       icon: [jquery],
      //       name: 'jQuery',
      //     },
      //     {
      //       icon: [knockout],
      //       name: 'Knockout.js',
      //     },
      //     {
      //       icon: ['fab', 'vuejs'],
      //       name: 'Vue.js',
      //     },
      //   ],
      //   skills: 'Developing new features on the frontend, maintenance, improving and renewing the technology stack with gradually implementing Vue'
      // },
    ],
  }),
}
</script>

<style scoped></style>