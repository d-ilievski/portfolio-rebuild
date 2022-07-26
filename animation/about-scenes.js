import gsap from 'gsap'

export default {
  init: () => {
    gsap.to('.person', {
      scrollTrigger: {
        trigger: '#about-segment',
        toggleActions: 'play none none none',
        start: 'top center',
        end: 'center center',
        scrub: 1,
      },
      y: -300,
      duration: 1,
    })

    // animate text

    gsap.fromTo(
      '.experience',
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#about-segment',
          toggleActions: 'play none none none',
          start: 'top center',
          end: 'center bottom',
        },
        y: 0,
        opacity: 1,
      }
    )

    gsap.fromTo(
      '#skills-technologies-title',
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#about-segment',
          toggleActions: 'play none none none',
          start: '30% center',
          end: 'center bottom',
        },
        y: 0,
        opacity: 1,
      }
    )

    // skills languages bla bla
    gsap.fromTo(
      '.skills-list li',
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#about-segment',
          toggleActions: 'play none none none',
          start: '30% center',
          end: 'center bottom',
        },
        stagger: 0.1,
        delay: 0.2,
        y: 0,
        opacity: 1,
      }
    )

    // skillset animation
    gsap.from('.slider-row', {
      scrollTrigger: {
        trigger: '#about-segment',
        toggleActions: 'play none none none',
        start: 'center center',
        end: 'center bottom',
        // scrub: 1,
      },
      stagger: 0.5,
      // opacity: 0,
    })

    // name card animation
    gsap.fromTo(
      '.name-card',
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#about-segment',
          toggleActions: 'play none none none',
          start: 'top center',
          end: '30% center',
        },
        opacity: 1,
        duration: 0.5,
      }
    )

    gsap.to('.name-card', {
      scrollTrigger: {
        trigger: '#about-segment',
        toggleActions: 'play none none none',
        start: 'top center',
        end: 'bottom center',
      },
      height: 'auto',
      delay: 1,
      duration: 0.5,
    })
  },
}
