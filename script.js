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

function magneticHover(){
    document.querySelectorAll('.magnet-hover').forEach((elem)=>{
            
        elem.addEventListener("mousemove", (e) => {
            let x = e.offsetX;
            let y = e.offsetY;
            let btnWidth = elem.offsetWidth / 2;
            let btnHeight = elem.offsetHeight / 2;
            let tranX = x - btnWidth;
            let tranY = y - btnHeight;
            elem.style.transform = `translateX(${tranX}px) translateY(${tranY}px)`;
        });
        elem.addEventListener("mouseout", () => {
            elem.style.transform = 'translate(0,0)';
        });
    })

}

magneticHover();
