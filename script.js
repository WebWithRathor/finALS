const tl = gsap.timeline({
    scrollTrigger: {
        scroller: 'body',  // Corrected 'scoller' to 'scroller'
        trigger: '.circlePage',
        start: 'top -1%',
        end: 'top -100%',
        markers: true,  // Corrected 'marksers' to 'markers'
        scrub:1,
    }
});

tl.to('.circleDiv img', {
    scale:2
},'a')
.to('.circleDiv', {
    delay:.1,
    height:'310vh',
    width:'310vh',
},'a')
.to('.circleDiv', {
    right:'50%',
},'a')

