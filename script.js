function minmap() {

    const tl = gsap.timeline({
        scrollTrigger: {
            scroller: 'body',
            trigger: '.minimap-wrapper',
            start: 'top 0',
            end:'top -200%',
            scrub: 1,
            snap: [0, 0.20, 0.40, 0.60, 0.80, 1.0]
        }
    })

    gsap.set('.minimap .images .img-box', {
        y: '200%'
    })

    tl
        .to('.minimap  .imgBox', {
            y: '-=105%'
        }, 'a')
        .to('.minimap .images .img-box', {
            y: '-=118%'
        }, 'a')
        .to('.minimap .images .img-box', {
            y: '-=118%'
        }, 'b')
        .to('.minimap  .imgBox', {
            y: '-=105%'
        }, 'b')
        .to('.minimap .images .img-box', {
            y: '-=118%'
        }, 'c')
        .to('.minimap  .imgBox', {
            y: '-=105%'
        }, 'c')
        .to('.minimap .images .img-box', {
            y: '-=118%'
        }, 'd')
        .to('.minimap  .imgBox', {
            y: '-=105%'
        }, 'd')
        .to('.minimap .images .img-box', {
            y: '-=118%'
        }, 'e')
        .to('.minimap  .imgBox', {
            y: '-=95%'
        }, 'e')
}

minmap();