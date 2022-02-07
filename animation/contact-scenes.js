import gsap from 'gsap'

export default {
  init: () => {
    // skills languages bla bla
    gsap.from('#contact-segment .left p', {
      scrollTrigger: {
        trigger: '#contact-segment',
        toggleActions: 'play none none none',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      },
      delay: 1,
      stagger: 0.5,
      y: 100,
      opacity: 0,
    })
  },
}
