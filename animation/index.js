import LogoScenes from '~/animation/logo-scenes'
import AboutScenes from '~/animation/about-scenes'
// import BlogScenes from '~/animation/blog-scenes'
import ContactScenes from '~/animation/contact-scenes'
import FooterScenes from '~/animation/footer-scenes'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

const addOpenClass = (elementQuery) => {
  const element = document.querySelector(elementQuery)
  if (!element.classList.contains('open')) element.classList.add('open')
}

const initSegmentTitles = (titles) => {
  titles.forEach((title) => {
    const element = `#${title}-segment-title`
    const trigger = `#${title}-segment`
    gsap.to(element, {
      scrollTrigger: {
        trigger,
        toggleActions: 'play none none none',
        start: 'top center',
        end: title !== 'contact' ? 'center center' : 'bottom center', // we want contact to remain visible when scrolled to bottom
        end: 'center top', // we want contact to remain visible when scrolled to bottom
        onEnter: () => addOpenClass(element),
        // onEnterBack: () => toggleOpenClass(element),
        // onLeave: () => title !== 'blog' && toggleOpenClass(element), // this stays like this until blog gets some content
        // onLeaveBack: () => title !== 'blog' && toggleOpenClass(element),
      },
    })
  })
}

export const initAnimation = () => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)

  initSegmentTitles(['about', 'work', 'blog', 'contact'])

  LogoScenes.init()
  AboutScenes.init()
  // BlogScenes.init()
  ContactScenes.init()
  FooterScenes.init()
}
