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
const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll", _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 뱃지 숨기기
    // gsap.to (요소, 지속시간, 옵션)
    gsap.to(bageEl, .6, {
      opacity: 0,
      display: "none"
    });
    // 버튼 보이게
    gsap.to(toTopEl, .2, {
      x: 0
    })
  } else {
    gsap.to(bageEl, .6, {
      opacity: 1,
      display: "block"
    });
    // 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    })
  }
}, 300))

toTopEl.addEventListener("click", function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
})

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

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
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
    randow(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
      y: size, // y 축으로 이동할 위치
      repeat: -1, // repeat 반복 횟수 -1 (무한반복)
      yoyo: true, // 동작이 끝나면 역재생하는 속성
      ease: Power1.easeInOut, //  동작에 강도 
      delay: randow(0, delay) // 몇초 동안 대기후 동작할 것인지 
    })
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", .5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scoll-spy");

spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 뷰포트에서 어느지점을 지나면 트리거를 걸것인지 뷰포트 최상단 0 , 최하단 1  
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); // Scene : 스크롤 매직 특정한 요소를 감시하는 요소를 지정하는 함수
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();