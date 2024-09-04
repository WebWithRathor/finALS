
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
            scaleY:28,
            scale: 1,
            duration: .5
        }, '.2+a')
        .to('#transition-circle',{
            opacity:0,
            duration:.1
        },"qum")
        .to("#introContent", {
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100% )"
        },"qum")
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
        clutter += `<span class="text-transparent bgImg">${e}</span>`;
    })
    large_text.innerHTML = clutter;
    gsap.set('#idm-vton span', { display: 'inline-block' })
    gsap.from('#idm-vton span', {
        transform: 'translateY(100%)',
        stagger: 0.05,
        duration: 1,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 20%',
            end: '10% top',
            scrub: 2,
            // markers: true,.
        }
    })
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

function textHover(){
    const texts = document.querySelectorAll('.text-hover');

texts.forEach(e => {
    var clutter = '';

    e.textContent.trim().split('').forEach(letter => {
        if (letter == ' ') {
            clutter += `<span class='letter font-[900]'>&nbsp;</span>`;
            return
        };
        clutter += `<span class='letter font-[900]'>${letter}</span>`;
    });
    e.innerHTML = clutter;
    // console.log(e);

    let isAnimating = false;
    e.addEventListener('mouseenter', function () {
        if (!isAnimating) {
            isAnimating = true;
                gsap.to(e.querySelectorAll('span'), {
                    fontWeight: 100,
                    transform: 'scale(1, .4)',
                    stagger: 0.1,
                    duration:.5,
                    onStart: () => {
                        gsap.to(e.querySelectorAll('span'), {
                            delay:0.6,
                            stagger: 0.1,
                            duration:.5,
                            fontWeight: 900,
                            transform: 'scale(1, 1)',
                        });
                    }
                });

            setTimeout(() => {
                isAnimating = false;
            }, 1000);
        }
    });
});

}

textHover();

function skewEffect(){
    let skewTime;

    gsap.to('.skew-bar h1',{
        translateX : '-100%',
        repeat:-1,
        ease:'linear',
        duration:5,
    })

    window.addEventListener('mousemove',(e)=>{
        clearTimeout(skewTime)
        if(e.movementX > 0){
            gsap.to('.skew-bar h1',{
                skewX : '-5deg'
            })
           
        }
        else{
            gsap.to('.skew-bar h1',{
                skewX : '5deg'
            })
        }
        skewTime = setTimeout(()=>{
            gsap.to('.skew-bar h1',{
                skewX : '0deg'
            })
        },100)
    })
}

skewEffect();


function circleAnime(){

    function circlePageAnime(){
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
        
        
    }
    function circlePageAnimeResponsive(){
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
            height:'210vh',
            width:'210vh',
        },'a')
        .to('.circleDiv', {
            right:'50%',
        },'a')
        .from('.leftText', {
            width:0,
        },'a')
        .from('.leftText h1', {
            left:'00%',
        },'a')
        .from('.rightText', {
            width:0,
        },'a')
        .from('.rightText h1', {
            left:'-100%',
        },'a')
        
        .to('.circleDiv', {
            right:'60%',
        },'b')
        .to('.circleDiv img', {
            scale:1.5,
            marginTop:'-35vh',
            marginLeft:'-5vh',
    
        },'b')
    
        .to('.rightText',{
            left:'37%',
            top:'40%'
        },'b')
        .to('.leftText',{
            left:'30%'
        },'b')
    
        .from('.ourMission', {
            opacity:0,
            right:'10%'
        },'b')
        
        
    }
    
    if(window.innerWidth > 600){
        circlePageAnime();
    }
    else{
        circlePageAnimeResponsive();
    }
}

circleAnime();




function introAnime(){

    const loading = document.querySelector('.loading')
    var x = Number(loading.innerText.split('%')[0])

    const loadingInterval = setInterval(() => {
        x += Math.floor(Math.random()*20)
        loading.innerText = x + '%';
        if(x >=100){
            loading.innerText = '100%';
            gsap.to('.intro',{
                transform:'rotateX(-70deg)',
                duration:.8,
                top:'60%',
            })
            clearInterval(loadingInterval)
        }
    }, 100);



}

introAnime();


function cursor(){
    const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

// for intro motion
let mouseMoved = false;

const pointer = {
    x: .5 * window.innerWidth,
    y: .5 * window.innerHeight,
}
const params = {
    pointsNumber: 40,
    widthFactor: .3,
    mouseThreshold: .6,
    spring: .4,
    friction: .5
};

const trail = new Array(params.pointsNumber);
for (let i = 0; i < params.pointsNumber; i++) {
    trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
    }
}

window.addEventListener("click", e => {
    updateMousePosition(e.clientX, e.clientY);
});
window.addEventListener("mousemove", e => {
    mouseMoved = true;
    updateMousePosition(e.clientX, e.clientY);
});
window.addEventListener("touchmove", e => {
    mouseMoved = true;
    updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
});

function updateMousePosition(eX, eY) {
    pointer.x = eX;
    pointer.y = eY;
}

setupCanvas();
update(0);
window.addEventListener("resize", setupCanvas);


function update(t) {

    // for intro motion
    if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
        pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? .4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
    });

    ctx.lineCap = "round";
    ctx.strokeStyle = "white"; 
	 ctx.beginPath();
    ctx.moveTo(trail[0].x, trail[0].y);

    for (let i = 1; i < trail.length - 1; i++) {
        const xc = .5 * (trail[i].x + trail[i + 1].x);
        const yc = .5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
    }
    ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
    ctx.stroke();
    
    window.requestAnimationFrame(update);
}

function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
}
cursor();
