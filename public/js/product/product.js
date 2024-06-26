const product = async () => {
  try {
    let data = await fetch("http://localhost:3000/product-up");
    let res = await data.json();
    let product = res.map((elem) => {
      return `<div
                class="h-[213px] max-sm:h-[140px] rounded cursor-pointer relative group overflow-hidden"
              >
                <img
                  src="${elem.image}"
                  alt=""
                  class="block w-full h-full rounded object-cover"
                />
                <div
                  class="w-[81px] h-[24px] bg-[#1cb561] absolute top-2 left-2 rounded-xl"
                >
                  <span
                    class="leading-[19px] text-[#F3F3F3] text-[10px] font-medium pr-2 text-center h-full"
                    >${elem.span}</span
                  >
                </div>
                <div
                  class="coover w-full h-full bg-[rgb(41,41,41)]/70 absolute transition-[0ms] group-hover:block right-[100%] group-hover:right-[0]"
                >
                  <div class="subcover mt-[160px]  max-sm:mt-[90px] pr-2">
                    <div class="text-[#fff] text-[11px] font-normal mb-[8px]">
                      ${elem.name}
                    </div>
                    <div class="text-[#fff] text-[11px] font-normal mb-[8px]">
                      ${elem.baner}
                    </div>
                  </div>
                </div>
              </div>`;
    });
    document
      .querySelector("div.arshia")
      .insertAdjacentHTML("beforeend", product.join(""));
  } catch (error) {
    console.log(error.massage);
  }
};
export default product;
