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
      onReady: function(e) {
        e.target.mute();
      }
    },
  });
}