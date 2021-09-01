


> # 스타벅스 클론  코딩   
[스타벅스 예제 완성본](https://stupefied-euclid-0cb098.netlify.app)
![Starbucks](https://raw.githubusercontent.com/ParkYoungWoong/starbucks-vanilla-app/master/_assets/main_screenshot.jpg)

## Description
 스타벅스 메인 페이지 클론 코딩


## Environment

**페이지 제작시 개발환경** 
OS : window 
browser : chrome
IDE : VSCODE

## Browser Support

| 브라우저 | 지원여부 |
|:---:|:---:|
|<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/512px-Google_Chrome_icon_%28September_2014%29.svg.png" width="30px" height="30px">|지원|
|<img src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-lg-high-res.fbc7ffbb50fd.png" width="30px" height="30px">|지원|
|<img src="https://w.namu.la/s/1ecd9d98e849872b3fa5a0f9f3add277d373212aabc10d9ef1e705847324abb342e420df735182b9db9f4ef20e6a0a2dbdd9b5d27c4d61dae4d3cfcd0f21c5460e4218b28b0f01a468377026f418b7ae818c616e2503f1389732d53ab8820063" width="30px" height="30px">|지원|

## Using Library

swiper : 슬라이더 기능 구현
lodash : 스크롤 이벤트 제어 
gsap & scrollToPlugin : 스크롤 시 뱃지 display 제어 , 요소 클릭시 scrollTo(스크롤위치) 제어
scrollMagic : 스크롤 시 요소 애니메이션 동작 제어

    <!-- SWIPER --> 
    <link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-     bundle.min.css" />
    <script defer src="https://unpkg.com/swiper@6.8.4/swiper-bundle.min.js"></script>

    <!-- LODASH -->
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <!-- GSAP & ScrollToPlugin -->
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js" integrity="sha512-UxP+UhJaGRWuMG2YC6LPWYpFQnsSgnor0VUF3BHdD83PS/pOpN+FYbZmrYN+ISX8jnvgVUciqP/fILOXDjZSwg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/ScrollToPlugin.min.js" integrity="sha512-1OG9UO4krPizjtz/c9iDbjCqtXznBYdJeD4ccPaYfJHzC6F1qoQ3P1bgQ3J8lgCoK5qGVCqsY4+/RKjLDzITVQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <!-- ScrollMagic -->
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" integrity="sha512-8E3KZoPoZCD+1dgfqhPbejQBnQfBXe8FuwL4z/c8sTrgeDMFEnoyTlH3obB4/fV+6Sg0a0XF+L/6xS4Xx1fUEg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
	
	
    

