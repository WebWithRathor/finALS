

function landingPageAnimation() {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.frontPage',
            start: 'top top',
            scrub: true,
        }
    })
    tl.to('.frontPage .center-box', {
        left: '50%',
        top: '50%',
        width: '100vw',
        height: '100vh',
    }, 'a')
        .from('#transition-circle', {
            top: '150%',
            rotate: 4 * 360,
            scale: 0,
        }, 'a')
        .to('.main-text', {
            left: '5rem',
            top: '2rem',
            fontSize: '2rem',
        }, 'a')
        .to('#transition-circle', {
            scaleY:28,
            scale: 1,
            duration: .5
        }, '.2+a')
        .to("#introContent", {
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100% )"
        })





}
landingPageAnimation()



function imgGlitchEffect() {

    let tl = gsap.timeline({
        repeat: -1,
        yoyo: true,
        ease: 'linear'
    })

    // tl

    tl
        .to('#img1', {
            opacity: 1,
            duration: 1,
        })
        .to('#img1', {
            opacity: 0,
            // duration: 1,
        }, "i0")

        .to('#img2', {
            opacity: 1,
            duration: 1,
        }, "i0")
        .to('#img2', {
            opacity: 0,
            // duration: 1,
        }, "i1")

        .to('#img3', {
            opacity: 1,
            duration: 1,
        }, "i1")
        .to('#img3', {
            opacity: 0,
            // duration: 1,
        }, "i2")

        .to('#img4', {
            opacity: 1,
            duration: 1,
        }, "i2")
        .to('#img4', {
            opacity: 0,
            // duration:0
        });


}
imgGlitchEffect()