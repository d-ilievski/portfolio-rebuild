import gsap from 'gsap'

const toggleOpenClass = (selector) => {
  const element = document.querySelector(selector)
  if (
    !element.classList.contains('open') &&
    !element.classList.contains('close')
  ) {
    element.classList.add('open')
  } else {
    element.classList.toggle('open')
    element.classList.toggle('close')
  }
}

export default {
  init: () => {
    gsap.to('.logo', {
      scrollTrigger: {
        trigger: '#logo-segment',
        toggleActions: 'play none none none',
        start: 'top 1px',
        end: '70% center',
        onEnter: () => toggleOpenClass('.logo'),
        // onEnterBack: () => toggleOpenClass('.logo'),
        // onLeave: () => toggleOpenClass('.logo'),
        // onLeaveBack: () => toggleOpenClass('.logo'),
      },
    })

    gsap.to('#logo-segment-navigation', {
      scrollTrigger: {
        trigger: '#logo-segment',
        toggleActions: 'restart',
        start: 'top 1px',
        end: '70% center',
        onEnter: () => toggleOpenClass('#logo-segment-navigation'),
        onEnterBack: () => toggleOpenClass('#logo-segment-navigation'),
        onLeave: () => toggleOpenClass('#logo-segment-navigation'),
        onLeaveBack: () => toggleOpenClass('#logo-segment-navigation'),
      },
    })
  },
}
