import gsap from 'gsap'

export default {
  init: () => {
    gsap.from('#footer-segment', {
      scrollTrigger: {
        trigger: '#contact-segment',
        toggleActions: 'restart',
        start: 'top center',
        end: 'center bottom',
        scrub: 1,
        markers: true,
      },
      delay: 2,
      y: 500,
      opacity: 0,
    })
  },
}
