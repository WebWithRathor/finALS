gsap.to('.shadow-text',{
    scaleX:'0.8',
    ease:"easeInOut",
    duration:3,
    repeat:-1,
    yoyo:true,
})

gsap.fromTo('.step3 img',{
    rotate:5
},{
    rotate:-5 ,
    repeat:-1,
    duration:2,
    yoyo:true,
})
