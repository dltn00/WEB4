
const header = document.querySelector('header');
let 이전좌표 = 0;
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled');
    }

    //scroll 이벤트리스너일때
    //스크롤을 올렸는지 내렸는지 파악하려면
    //변수를 하나 선언 해야 한다.
    if (이전좌표 < window.scrollY) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    이전좌표 = window.scrollY;
})

const scrollContent = document.querySelectorAll('.advantage > *')
makeScrollContents(scrollContent);

makeCountUp(document.querySelector('.count-up'), 8985351, 4000, 24);


const incline = document.querySelector('.incline');

incline.style.left = '50%';

window.addEventListener('scroll', () => {
    if (incline.getBoundingClientRect().top - window.innerHeight < 0) {
        incline.style.left = '0%';
    }
})




const hamburgerButton = document.querySelector('.hamburger');
const hamburgerClick = document.querySelector('.hamburger-click');
const hamburgerNav = document.querySelector('.hamburger-nav');
const hambergerTranstion = 500;




hamburgerButton.addEventListener('click',(e)=>{
    e.preventDefault();
    if(hamburgerButton.classList.contains('active')){
        closeHamburger(hambergerTranstion);
    }else{
        openHamburger(hambergerTranstion);
    }
})

window.addEventListener('scroll',()=>{
    if(hamburgerButton.classList.contains('active'))
    closeHamburger(0);
})

function openHamburger() {
    hamburgerButton.classList.add('active')
    hamburgerClick.classList.add('active');

    setTimeout(() => {
        hamburgerNav.style.transform = `none`;
    }, 0);

}

hamburgerNav.style.transition = `${hambergerTranstion}ms`;

function closeHamburger(transition){
hamburgerButton.classList.remove('active');
hamburgerNav.style.transform = 'translateX(100%)';


setTimeout(() => {
    hamburgerClick.classList.remove('active');
}, transition);
}

