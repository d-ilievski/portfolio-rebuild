import gsap from 'gsap'

export default {
  init: () => {
    gsap.from('#footer-segment', {
      scrollTrigger: {
        trigger: '#contact-segment',
        toggleActions: 'restart',
        start: 'center center',
        end: 'center bottom',
        scrub: 1,
      },
      delay: 1,
      y: 500,
      opacity: 0,
    })
  },
}