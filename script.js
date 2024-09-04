
function landingPageAnimation() {

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.frontPage',
            start: 'top top',
            scrub: true,
        }
    })
    tl.from('#transition-circle', {
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
            scaleY: 28,
            scale: 1,
            duration: .5
        }, '.2+a')
        .to('#transition-circle', {
            opacity: 0,
            duration: .1
        }, "qum")
        .to("#introContent", {
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100% )"
        }, "qum")
    // .from("#glitchImgs", {
    //     y:200,
    // },"qum")





}
// landingPageAnimation()

function jumpSmooth() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
jumpSmooth();

function footerAnimation() {
    function preventDefault() {
        document.querySelectorAll('a').forEach(e => {
            e.addEventListener('click', (event) => {
                event.preventDefault();
                console.log('clicked');
            })
            e.classList.add('hover')
        })
    }
    // preventDefault();

    const large_text = document.getElementById('idm-vton')
    const letters = large_text.textContent.split('')
    let clutter = "";
    letters.forEach(e => {
        clutter += `<span class="bgImg">${e}</span>`;
    })
    large_text.innerHTML = clutter;
    gsap.set('#idm-vton span', { display: 'inline-block' })
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 20%',
            end: '10% 10%',
            scrub: 2,
        }
    })
    tl.from('#idm-vton span', {
        transform: 'translateY(100%)',
        stagger: 0.05,
        duration: 2,
    })
    gsap.to('.ending-page .overlay', {
        y : -2,
        duration: 1,
        scrollTrigger: {
            trigger: '.ending-page',
            start: 'top 20%',
            end: '100% top',
            scrub: true,
            markers :true,
        }
    })
    gsap.to('.top-section, .middle-text', {
        transform: 'translateY(0)',
        duration: 1,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 20%',
            end: '10% top',
            scrub: true,
        }
    }, 'b')
}
footerAnimation()

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
        })




}
imgGlitchEffect()

function minmap() {

    const tl = gsap.timeline({
        scrollTrigger: {
            scroller: 'body',
            trigger: '.minimap-wrapper',
            start: 'top 0',
            end: 'top -200%',
            scrub: 1,
            snap: [0.00, 0.33, 0.67, 1.00]
        }
    })

    gsap.set('.minimap .images .img-box', {
        y: '160%'
    })

    tl
        .to('.virtual-photu', {
            scale: 0.8,
            x: '-50%',
            opacity: 0
        }, 'START')
        .from('.minimap .images , .minimap .showimage , .minimap .details', {
            x: '100vw',
        }, 'START')

        .to('.minimap  .imgBox', {
            y: '-=105%'
        }, 'a')
        .to('.minimap .images .img-box', {
            y: '-=115%'
        }, 'a')
        .to('.minimap .images .img-box', {
            y: '-=115%'
        }, 'b')
        .to('.minimap  .imgBox', {
            y: '-=105%'
        }, 'b')

}

minmap();

function textHover() {
    const texts = document.querySelectorAll('.text-hover');
    texts.forEach((elem) => {

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
    

textHover();

function skewEffect() {
    let skewTime;

    gsap.to('.skew-bar h1', {
        translateX: '-100%',
        repeat: -1,
        ease: 'linear',
        duration: 5,
    })

    window.addEventListener('mousemove', (e) => {
        clearTimeout(skewTime)
        if (e.movementX > 0) {
            gsap.to('.skew-bar h1', {
                skewX: '-5deg'
            })

        }
        else {
            gsap.to('.skew-bar h1', {
                skewX: '5deg'
            })
        }
        skewTime = setTimeout(() => {
            gsap.to('.skew-bar h1', {
                skewX: '0deg'
            })
        }, 100)
    })
}

skewEffect();


function circleAnime() {

    function circlePageAnime() {
        const tl = gsap.timeline({
            scrollTrigger: {
                scroller: 'body',  // Corrected 'scoller' to 'scroller'
                trigger: '.circlePage',
                start: 'top -1%',
                end: 'top -150%',
                scrub: 1,
            }
        });

        tl.to('.circleDiv img', {
            scale: 3
        }, 'a')
            .to('.circleDiv', {
                delay: .1,
                height: '510vh',
                width: '510vh',
            }, 'a')
            .to('.circleDiv', {
                right: '50%',
            }, 'a')
            .from('.leftText', {
                width: 0,
            }, 'a')
            .from('.leftText h1', {
                left: '200%',
            }, 'a')
            .from('.rightText', {
                width: 0,
            }, 'a')
            .from('.rightText h1', {
                left: '-300%',
            }, 'a')

            .to('.circleDiv', {
                right: '80%',
            }, 'b')
            .to('.circleDiv img', {
                scale: 3.5
            }, 'b')
            .from('.ourMission', {
                opacity: 0,
                right: '10%'
            }, 'b')


    }
    function circlePageAnimeResponsive() {
        const tl = gsap.timeline({
            scrollTrigger: {
                scroller: 'body',  // Corrected 'scoller' to 'scroller'
                trigger: '.circlePage',
                start: 'top -1%',
                end: 'top -150%',
                scrub: 1,
            }
        });

        tl.to('.circleDiv img', {
            scale: 3
        }, 'a')
            .to('.circleDiv', {
                delay: .1,
                height: '210vh',
                width: '210vh',
            }, 'a')
            .to('.circleDiv', {
                right: '50%',
            }, 'a')
            .from('.leftText', {
                width: 0,
            }, 'a')
            .from('.leftText h1', {
                left: '00%',
            }, 'a')
            .from('.rightText', {
                width: 0,
            }, 'a')
            .from('.rightText h1', {
                left: '-100%',
            }, 'a')

            .to('.circleDiv', {
                right: '60%',
            }, 'b')
            .to('.circleDiv img', {
                scale: 1.5,
                marginTop: '-35vh',
                marginLeft: '-5vh',

            }, 'b')

            .to('.rightText', {
                left: '37%',
                top: '40%'
            }, 'b')
            .to('.leftText', {
                left: '30%'
            }, 'b')

            .from('.ourMission', {
                opacity: 0,
                right: '10%'
            }, 'b')


    }

    if (window.innerWidth > 600) {
        circlePageAnime();
    }
    else {
        circlePageAnimeResponsive();
    }
}

circleAnime();

function stepsAnim(){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.mainstepwrapper',
            start:'top -1%',
            end:'-300%',
            scrub:1
        }
    })
    
    tl.from('.steps-text1 h1',{
        left:'20%',
        duration:4,
    },'a0')
    .from('.steps-text1 p',{
        left:'20%',
        duration:4,
        opacity:0
    },'a0')
    .to('.steps-text1',{
        delay:2,
        top:'-100%',
        duration:4,
        opacity:0
    },'a1')

    }
stepsAnim();