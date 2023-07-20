

function makeScrollContents(scrollContent, vector) {
    if (vector === 'left') {
        for (let i = 0; i < scrollContent.length; i++) {
            scrollContent[i].classList.add('left')
        }
    } else {
        for (let i = 0; i < scrollContent.length; i++) {
            scrollContent[i].classList.add('right')
        }
    }
    for (let i = 0; i < scrollContent.length; i++) {
        scrollContent[i].classList.add('scroll-contents')
    }

    window.addEventListener('scroll', (e) => {
        // -300에 나타나기 시작해서
        // -900에 완전히 나타나게 하고싶다!
        for (let i = 0; i < scrollContent.length; i++) {
            if (scrollContent[i].getBoundingClientRect().top - window.innerHeight < 0) {
                scrollContent[i].classList.add('active');
            } else {
                scrollContent[i].classList.remove('active');
            }
        }
    })
}