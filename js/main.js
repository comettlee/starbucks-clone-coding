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

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
});

// 공지사항 슬라이드
new Swiper(".notice-line .swiper-container", {
  direction: "vertical", // 슬라이드 방향 기본값은 horizontal (수평적, 가로) , vertical (수직, 세로)
  autoplay: {
    delay: 3000, // 하나의 슬라이드에서 다음 슬라이드 또는 이전 슬라이드 이동 시 소요 시간
    disableOnInteraction: false
  },
  loop: true
});

// 프로모션 슬라이드 
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한번에 보여질 슬라이드 갯수
  spaceBetween: 10, // 슬라이드 사이 간격 (px)
  centeredSlides: true, // 1번 슬라이드가 가운데 보이도록 
  loop: true, // 슬라이드가 종료되지 않도록 반복하는 속성
  autoplay: {
    delay: 5000, // 하나의 슬라이드에서 다음 슬라이드 또는 이전 슬라이드 이동 시 소요 시간
    disableOnInteraction: false
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }

})

const promotionEl = document.querySelector(".promotion");
const promtionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promtionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김
    promotionEl.classList.add("hide");
  } else {
    // 보임
    promotionEl.classList.remove("hide");

  }
})

function randow(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자 
    randow(1.5, 2.5),  // 애니메이션 동작 시간
    { // 옵션
      y: size,     // y 축으로 이동할 위치
      repeat: -1,  // repeat 반복 횟수 -1 (무한반복)
      yoyo: true,  // 동작이 끝나면 역재생하는 속성
      ease: Power1.easeInOut,   //  동작에 강도 
      delay: randow(0, delay)   // 몇초 동안 대기후 동작할 것인지 
    })
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", .5, 15);
floatingObject(".floating3", 1.5, 20);
