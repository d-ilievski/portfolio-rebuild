import gsap from 'gsap'

export default {
  init: () => {
    gsap.from('#contact-segment p', {
      scrollTrigger: {
        trigger: '#contact-segment',
        toggleActions: 'play none none none',
        start: 'top center',
        end: 'bottom bottom',
      },
      delay: 0,
      stagger: 0.2,
      y: 100,
      opacity: 0,
    })
  },
}
