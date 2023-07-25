

const hambergerButton = document.querySelector('.hamberger');
const hambergerClick = document.querySelector('.hamberger-click');
const hambergerNav = document.querySelector('.hamberger-nav')


hambergerButton.addEventListener('click',openHamburger)
function openHamburger() {
    hambergerButton.classList.add('active')
    hambergerClick.classList.add('active');

    setTimeout(() => {
        hambergerNav.style.transform = `none`;
    }, 1);

}