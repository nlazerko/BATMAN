const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close')

burger.addEventListener('click', () => {
  navigation.classList.add('navigation_active')
})
navigationClose.addEventListener('click', () => {
  navigation.classList.remove('navigation_active')
})


try {
  const mute = document.querySelector('.mute__checkbox');
  const audio = new Audio('audio/music.mp3');
  
  const checkMute = () => {
    mute.checked ? audio.play().catch(() => { mute.checked = false }) : audio.pause()
  }
  mute.addEventListener('change', checkMute);

  if (mute) { setTimeout(checkMute, 2000) }

} catch  {
  console.log('На этой странице нет музыки')
}


try {
  const pagination = document.querySelector('.pagination');
  const paginationButton = document.querySelector('.pagination__arrow');
  const sliderThumbs = new Swiper('.slider-thumbs', {
    preloadImages: true,
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
    loopedSlides: 4
  });

  sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex)
  })

  const sliderMain = new Swiper('.slider-main', {
    preloadImages: true,
    loop: true,
    autoHeight: true,
    loopedSlides: 4,
    keyboard: {
      enabled: true,
    },
  });

  sliderThumbs.controller.control = sliderMain;
  sliderMain.controller.control = sliderThumbs;

  const videos = document.querySelectorAll('video');

  sliderMain.on('slideChange', () => {
    for (let i = 0; i < videos.length; i++) {
      videos[i].pause();
    }
  })

  paginationButton.addEventListener('click', () => {
    pagination.classList.toggle('pagination_active');
  })
} catch  {
  console.log('На этой странице нет слайдера')
}