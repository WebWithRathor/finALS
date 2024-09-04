const tl = gsap.timeline({
    scrollTrigger: {
        scroller: 'body',  // Corrected 'scoller' to 'scroller'
        trigger: '.circlePage',
        start: 'top -1%',
        end: 'top -150%',
        markers: true,  // Corrected 'marksers' to 'markers'
        scrub:1,
    }
});

tl.to('.circleDiv img', {
    scale:3
},'a')
.to('.circleDiv', {
    delay:.1,
    height:'510vh',
    width:'510vh',
},'a')
.to('.circleDiv', {
    right:'50%',
},'a')
.from('.leftText', {
    width:0,
},'a')
.from('.leftText h1', {
    left:'200%',
},'a')
.from('.rightText', {
    width:0,
},'a')
.from('.rightText h1', {
    left:'-300%',
},'a')

.to('.circleDiv', {
    right:'80%',
},'b')
.to('.circleDiv img', {
    scale:3.5
},'b')
.from('.ourMission', {
    opacity:0,
    right:'10%'
},'b')

