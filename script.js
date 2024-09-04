
function minimap(){
    let tl = gsap.timeline({
        scrollTrigger:{
            scroller:'body',
            trigger:'.minimap',
            start:'top 0%',
            scrub:1,
            markers:true,
            pin:true
        }
    })

        tl.to(`.showimage .imgBox:nth-child(2)`,{
            top:0
        },'first')
        .to('.img-box',{
            translateY:"-=115%"
        },'first')
        .to(`.showimage .imgBox:nth-child(3)`,{
            top:0
        },'a')
        .to('.img-box',{
            translateY:"-=115%"
        },'a')
        .to(`.showimage .imgBox:nth-child(4)`,{
            top:0
        },'b')
        .to('.img-box',{
            translateY:"-=115%"
        },'b')
        .to(`.showimage .imgBox:nth-child(5)`,{
            top:0
        },'c')
        .to('.img-box',{
            translateY:"-=115%"
        },'c')
        .to(`.showimage .imgBox:nth-child(6)`,{
            top:0
        },'d')
        .to('.img-box',{
            translateY:"-=115%"
        },'d')

}

minimap();