const animationContainer = document.querySelector('.cover-animation');
const animationPlus = document.querySelector('.circle-inner-plus')
const animationText = document.querySelector('.animation-text');

const template = ['Finance', 'Service', 'People', 'Tech', 'Experience', 'future', '헤헤', '아무거나', '넣는다'];

const viewTextTime = 2000;
const exportCharTime = 100;
const animationPlayTime = viewTextTime * template.length + 2000

playAnimation();
setInterval(() => {
    playAnimation();
}, animationPlayTime);


function playAnimation() {

    reset();

    setTimeout(() => {

        containerGrow();
    }, 10);

    setTimeout(() => {
        exportPlus()
    }, 500);
    setTimeout(() => {
        exportText()

    }, 1000);

}

function reset() {
    animationPlus.style.transition = '0s';
    animationContainer.style.transition = '0s';
    animationPlus.style.opacity = '0';
    animationContainer.style.width = '20px';
    animationText.innerText = ''
    setTimeout(() => {

        animationPlus.style.transition = '0.5s';
        animationContainer.style.transition = '0.5s';
    }, 1);
}

function containerGrow() {
    animationContainer.style.width = '88px'
}


function exportPlus() {
    animationPlus.style.opacity = '1';
}

function exportText() {

    for (let i = 0; i < template.length; i++) {

        setTimeout(() => {

            animationText.innerText = ''
            for (let j = 0; j < template[i].length; j++) {
                setTimeout(() => {

                    animationText.innerText += template[i][j];
                }, j * exportCharTime);
            }
        }, i * viewTextTime);


    }
}