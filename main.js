const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
})

searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
})

searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
})

const bageEl = document.querySelector("header .badges");

window.addEventListener("scroll", _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    gsap.to(bageEl, .6, {
      opacity: 0,
      display: "none"
    });
  } else {
    gsap.to(bageEl, .6, {
      opacity: 1,
      display: "block"
    });
  }
}, 300))

const fadeEls = document.querySelectorAll(".fade-in");

fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay:(index + 1) *.7 , 
    opacity: 1
  })
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical" ,
  autoplay: {
    delay:3000,// 하나의 슬라이드에서 다음 슬라이드 또는 이전 슬라이드 이동 시 소요 시간
    disableOnInteraction: false
  },
  loop:true
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,  // 한번에 보여질 슬라이드 갯수
  spaceBetween: 10,  // 슬라이드 사이 간격 (px)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이도록 
  loop: true,
  autoplay: {
    delay: 5000,// 하나의 슬라이드에서 다음 슬라이드 또는 이전 슬라이드 이동 시 소요 시간
    disableOnInteraction: false
  },
  pagination:{
    el: ".promotion .swiper-pagination" , //페이지 번호 요소 선택자
    clickable : true
  },
  navigation: {
    pervEl: ".promtion .swiper-prev",
    nextEl: ".promotion .swiper-next"
  }

})