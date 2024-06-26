const melu = async () => {
    try {
      let data = await fetch("http://localhost:3000/menu__4");
      let res = await data.json();
      let menu = res.map((elem) => {
        return `<a
                      href="#"
                      class="block px-2 py-0 text-[#FFFFFF] w-fit font-normal text-right text-[11px] opacity-95 hover:text-[#F1A803] h-[37px] leading-[37px]"
                      role="menuitem"
                      tabindex="-1"
                      id="menu-item-0"
                      >${elem.name}</a
                    >`;
      });
      document
        .querySelector("div.mersede")
        .insertAdjacentHTML("beforeend", menu.join(""));
    } catch (error) {
      console.log(error.massage);
    }
  };
  export default melu;