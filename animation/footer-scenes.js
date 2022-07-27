import gsap from 'gsap'

export default {
  init: () => {
    gsap.from('#footer-segment', {
      scrollTrigger: {
        trigger: '#contact-segment',
        toggleActions: 'play none none none',
        start: 'top center',
        end: 'center bottom',
        // scrub: 1,
      },
      delay: 0.5,
      y: 500,
      opacity: 0,
    })
  },
}
