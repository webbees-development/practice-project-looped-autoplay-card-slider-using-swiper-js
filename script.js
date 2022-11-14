const swiper = new Swiper(".card-swiper", {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 20,
    longSwipes: false,
    grabCursor: true,
    // roundLength: true,
    freeMode: {
      enabled: true,
      momentumBounce: false,
    },
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 5000,
});