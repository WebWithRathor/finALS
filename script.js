
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.frontPage',
        start: 'top top',
        end: '150%',
        scrub: true,
        markers: true,
        // pin: true,
    }
})
tl.to('.frontPage .center-box', {
    left: '50%',
    top: '50%',
    width: '100vw',
    height: '100vh',
    duration: 2,
}, 'a')
    .to('.main-text', {
        delay: 1,
        color: 'white',
    }, 'a')
    .to('.main-text', {
        delay: 1,
        duration: 1,
        left: '5rem',
        top: '2rem',
        fontSize: '2rem',
    }, 'a')