const headerMenuList = document.getElementsByClassName('header-menu-list')
const header = document.querySelector('header');

for (let i = 0; i < headerMenuList.length; i++) {

    headerMenuList[i].addEventListener('mouseover', () => {
        removeActive();
        header.classList.add('open-menu');
        headerMenuList[i].classList.add('active');
    })
}


header.addEventListener('mouseleave', () => {
    removeActive();
    header.classList.remove('open-menu');
})


function removeActive() {
    for (let i = 0; i < headerMenuList.length; i++) {
        headerMenuList[i].classList.remove('active');
    }
}