let arr = [
    (
        "https://m.media-amazon.com/images/I/61mZ-u4wlYL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61xC6xsb7cL._SX679_.jpg"
    )
]
const totalPercentage = 100;
let currentPercentage = 0;

const digitsElement = document.getElementById('digits');

function updateLoading() {
    if (currentPercentage <= totalPercentage) {
        digitsElement.textContent = currentPercentage + '%';
        currentPercentage++;
    } else {
        clearInterval(loadingInterval);
        gsap.to('.loading-text',{
            delay : 1,
            // opacity : 0,
            bottom : '-10%'
        })
        gsap.to('.intro-page',{
            delay : 1.2,
            color: 'black',
            backgroundColor : 'white',
        })
        gsap.to('.center-text',{
            delay : 1.2,
            fontSize: "10vw",
            ease: "bounce.out", 
        })
    }
}
const loadingInterval = setInterval(updateLoading, 25);