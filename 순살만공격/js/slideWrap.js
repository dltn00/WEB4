const slidewrap = document.querySelector(".slidewrap");
const slidescnt = document.querySelectorAll(".slide").length;
const slideContainer = document.getElementsByClassName("slides");
const slideWidth = slidewrap.offsetWidth;
let currentSlide = 0;

/*  공통으로 이용할 함수

        슬라이드 이동 함수
            해당 기능에는 페이지네이션 HTML에 class를 이동하여 현 위치를 마크해야함
        CSS 삽입 함수
*/

//슬라이드 이동 함수
function goToSlide(index){
    currentSlide = index;
    slideContainer[0].style.transition = 'transform 0.5s ease';
    slideContainer[0].style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

//CSS 삽입 함수
function AddStyle(style){
    const styleTag = document.createElement('style');
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);
}

/*  페이지네이션 생성 함수
        HTML 삽입
        CSS 삽입 (공통함수 사용)
        페이지네이션 이벤트 등록 (공통함수 이벤트 함수)
*/

/*  버튼 생성 함수
        HTML 삽입
        CSS 삽입 (공통함수 사용)
        버튼 이벤트 등록 (공통함수 이벤트 함수)
*/
/* 슬라이드 터치 또는 스와이프 생성 함수

*/
/*  무한 루프 자동 슬라이드 구현 (사실 next slide일 뿐)

*/
/*  무한 루프 자동 슬라이드 구현 (사실 next slide일 뿐)

*/
let Autoslideactive = null ; // 슬라이드 자동 이동 호출을 변수 화
function autoslide(){
    const index = (currentSlide+1) < slidescnt ? currentSlide+1 : 0;
    goToSlide(index);
}

/*  마우스 감지 시 슬라이드 자동 멈추기

*/
function Createmousedetector(){
    //마우스가 슬라이드에 올라왔을 때
    slideContainer[0].addEventListener("mouseover",(event)=>{

        clearInterval(Autoslideactive);
    })
    //마우스가 슬라이드에서 나온 경우 다시 실행
    slideContainer[0].addEventListener("mouseout",(event)=>{

        Autoslideactive = setInterval(autoslide,5000);
    })
}
Autoslideactive = setInterval(autoslide,5000); //일정 시간마다 호출
Createmousedetector();