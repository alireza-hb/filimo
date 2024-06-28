const product_d7 = async () => {
    try {
      let data = await fetch("http://localhost:3000/product_d_7");
      let res = await data.json();
      let product_d = res.map((elem) => {
        return `<div
                  class="h-[325px] max-sm:h-[240px] rounded cursor-pointer relative group overflow-hidden"
                >
                  <img
                    src="${elem.image}"
                    alt=""
                    class="block w-full h-[302px] max-sm:h-[192px] pt-[10px] rounded object-cover"
                  />
                  <div
                    class="w-[81px] h-[24px] bg-[#1cb561] absolute top-4 left-2 rounded-xl"
                  >
                    <span
                      class="leading-[19px] text-[#F3F3F3] text-[10px] font-medium pr-2 text-center h-full"
                      >${elem.span}</span
                    >
                  </div>
                  <h4
                    class="block text-right max-sm:truncate font-normal text-[#F3F3F3] pl-[30px] text-[11px] mt-[8px]"
                  >
                    ${elem.h4}
                  </h4>
                  <div
                    class="coover w-full h-[292px]  max-sm:h-[182px] mt-[10px] box-border bg-[rgb(41,41,41)]/70 absolute transition-[0ms] group-hover:block right-[100%] group-hover:right-[0]"
                  >
                    <div class="subcover mt-[240px] max-sm:mt-[120px] pr-2">
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
        .querySelector(".pro-d-7")
        .insertAdjacentHTML("beforeend", product_d.join(""));
    } catch (error) {
      console.log(error.massage);
    }
  };
  export default product_d7;