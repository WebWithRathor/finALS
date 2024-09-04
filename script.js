
// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: 'footer',
//         start: 'top top',
//         end: '150%',
//         scrub: true,
//         markers: true,
//         // pin: true,
//     }
// })
function jumpSmooth(){
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
    function preventDefault(){
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
        duration : 1,
        scrollTrigger: {
            trigger: 'footer',
            start: 'top 20%',
            end: '10% top',
            scrub: 2,
            // markers: true,.
        }
    })
}
footerAnimation();