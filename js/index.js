const badgeEl = document.querySelector('.top-header .badges');
const toTopEl= document.querySelector('#to-top');

// gsap 을 이용한 이미지 사라지기
window.addEventListener('scroll', _.throttle(()=>{
  if(window.scrollY > 200){
    gsap.to(badgeEl, .3, {
      opacity: 0,
      display : 'none',
    });
    gsap.to(toTopEl, .2, {
      x: 0,
    });
  }else{
    gsap.to(badgeEl, .2, {
      opacity: 1,
      display : 'block',
    });
    gsap.to(toTopEl, .2, {
      x: 150,
    });
  }
},500));

// 최상단으로 스크롤
toTopEl.addEventListener('click', () => {
  gsap.to(window, .7, {
    scrollTo: 0,
  });
})

// 아이콘 누르면 색상 바뀌게하기 - toggle
// store-nav
const navBtn = document.querySelectorAll('.store-nav__list-comp');

navBtn.forEach( e => {
  e.addEventListener('click', () => {
    e.classList.toggle('navActive');
  })
})


/*최상단 스와이프 이미지 */
new Swiper('.slider-section .swiper-container', {
  autoplay: true,
  loop: true,
  speed: 500,
},);

new Swiper('.exhibition-section .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 5,
  pagination:{
    el : '.exhibition-section .swiper-pagination',
    clickable: true,
  },
},
);

// best-ranking 좋아요 버튼
const likeBtns = document.querySelectorAll('.best-ranking__heart');

likeBtns.forEach(e => {
  e.addEventListener('click', () => {
    e.classList.toggle('btnActive');
  });
});

/** 유튜브 영상 재생(iframe_api) */
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: '2q37GdBjOSk',
    playerVars: {
      autoplay: true,
      loop: true,
      playlist:'2q37GdBjOSk',
    },
    events: {
      onReady: (e) => {
        e.target.mute();
      }
    },
  });
}