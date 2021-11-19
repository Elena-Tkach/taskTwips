import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const swiper2 = new Swiper(`.js-slide`, {

    slidesPerView: 1,

    spaceBetween: 10,
    // centeredSlides: true,
    // loop: true,
    grabCursor: true,
    preventClicks: true,

    speed: 500,

    keyboard: true,

    pagination: {
        el: `.js-pagination`,
        type: `bullets`,
        clickable: true,
    },

})
