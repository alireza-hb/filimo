const product_d = async () => {
  try {
    let data = await fetch("http://localhost:3000/product-up");
    let res = await data.json();
    let product_d = res.map((elem) => {
      return ``;
    });
    document
      .querySelector("")
      .insertAdjacentHTML("beforeend", product_d.join(""));
  } catch (error) {
    console.log(error.massage);
  }
};
export default product_d;
