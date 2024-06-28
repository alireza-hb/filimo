const footer_1 = async () => {
  try {
    let data = await fetch("http://localhost:3000/footer_1");
    let res = await data.json();
    let footer = res.map((elem) => {
      return `<div>
              <a
                href="#"
                class="min-[1200px]:leading-[28px] max-sm:leading-[28px] block cursor-pointer text-[#959595] hover:text-[#fff] transition-all text-[10.5px] max-sm:text-[10px] mr-4"
                >${elem.name}</a
              >
            </div>`;
    });
    document
      .querySelector(".footer-1")
      .insertAdjacentHTML("beforeend", footer.join(""));
  } catch (error) {
    console.log(error.massage);
  }
};
export default footer_1;
