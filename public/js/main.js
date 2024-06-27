import melu from "./meeeenu/melu";
import medu from "./meeenu/medu";
import menuu from "./meenu/meenu";
import menu from "./menu/menu";
import product_d1 from "./pro.1/pro.1";
import product_d2 from "./pro.2/pro.2";
import product_d3 from "./pro.3/pro.3";
import product_d4 from "./pro.4/pro.4";
import product from "./product/product";
import slider from "./slider/slider";
function initslider() {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
async function allData() {
  await menu();
  await menuu();
  await medu();
  await melu();
  await product();
  await product_d1();
  await product_d2();
  await product_d3();
  await product_d4();
  await slider();
  // await product();
  initslider();
}

allData();
