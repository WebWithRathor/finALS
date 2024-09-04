

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
landingPageAnimation()

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
        clutter += `<span class="">${e}</span>`;
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