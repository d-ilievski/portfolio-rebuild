import gsap from 'gsap'

export default {
  init: () => {
    // skillset animation
    gsap.fromTo(
      '#coming-soon',
      {
        scale: 0,
      },
      {
        scrollTrigger: {
          trigger: '#blog-segment',
          toggleActions: 'restart',
          start: 'top center',
          end: 'bottom bottom',
          scrub: 1,
        },
        scale: 2,
        duration: 1,
      }
    )
  },
}
