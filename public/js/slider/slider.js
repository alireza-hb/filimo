const slider = async () => {
  try {
    let data = await fetch("http://localhost:3000/slider");
    let res = await data.json();
    let slidd = res.map((elem) => {
      return `<div class="swiper-slide">
      
            <picture>
  <source media="(min-width:1200px)" srcset="${elem.image}">
  <source media="(min-width:0)" srcset="${elem.imageMobile}">
  <img src="${elem.mama}" alt="Flowers" style="width:auto;">
</picture>
      
      </div>`;
    });
    document
      .querySelector(".swiper-wrapper")
      .insertAdjacentHTML("beforeend", slidd.join(""));
  } catch (error) {
    console.log(error.massage);
  }
};
export default slider;
