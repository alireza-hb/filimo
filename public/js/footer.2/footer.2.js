const footer_2 = async () => {
  try {
    let data = await fetch("http://localhost:3000/footer_2");
    let res = await data.json();
    let footer = res.map((elem) => {
      return `
                <a
                  href="#"
                  class="min-[1200px]:leading-[28px] max-sm:leading-[28px] block cursor-pointer text-[#959595] hover:text-[#fff] transition-all text-[10.5px] max-sm:text-[10px] mr-4"
                  >${elem.name}</a
                >
            `;
    });
    document
      .querySelector(".footer-2")
      .insertAdjacentHTML("beforeend", footer.join(""));
  } catch (error) {
    console.log(error.massage);
  }
};
export default footer_2;
