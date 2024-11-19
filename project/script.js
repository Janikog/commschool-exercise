const drawgrid = (products) => {
  console.log(products);
  let card = "";
  for (let i = 0; i < products.length; i++) {
    let starnumber = "";
    const number = Math.round(products[i].rating);
    if (number === 10 || number === 9) {
      starnumber = ` <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/fullstar.png" />`;
    } else if (number === 8 || number === 7) {
      starnumber = ` <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/star.png" />`;
    } else if (number === 6 || number === 5) {
      starnumber = ` <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/star.png" />
                    <img src="./assets/images/star.png" />`;
    } else if (number === 4 || number === 3) {
      starnumber = ` <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/star.png" />
                    <img src="./assets/images/star.png" />
                    <img src="./assets/images/star.png" />`;
    } else if (number === 2 || number === 1) {
      starnumber = ` <img src="./assets/images/fullstar.png" />
                    <img src="./assets/images/star.png" />
                    <img src="./assets/images/star.png" />
                    <img src="./assets/images/star.png" />
                    <img src="./assets/images/star.png" />`;
    } else {
      starnumber = ` <img src="./assets/images/star.png" />
                    <img src="./assets/images/star.png" />
                    <img src="./assets/images/star.png" />
                    <img src="./assets/images/star.png" />
                    <img src="./assets/images/star.png" />`;
    }
    const card1 = `<div class="card1">
              <div class="imgcontent">
                <img src="${products[i].images[2]}" />
              </div>
              <div class="description">
                <div class="left">
                  <div class="price">
                    <h1>$${(
                      products[i].price -
                      products[i].price * (products[i].discountPercentage / 100)
                    ).toFixed(2)} <span>${products[i].price}</span></h1>
                  </div>
                  <div class="review">
                    ${starnumber}
                    <h2>${products[i].rating}</h2>
                  </div>
                </div>
                <div class="heart1">
                  <img src="./assets/images/heart2.png" />
                </div>
              </div>
              <div class="name">
                <h2>${products[i].brand}</h2>
                <h3>${products[i].title}</h3>
              </div>
            </div>`;
    card = card + card1;
  }
  document.querySelector("div.card-grid").innerHTML = card;
};

const getData = () => {
  fetch("https://dummyjson.com/products/category/smartphones")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      drawgrid(data.products);
    });
};

getData();

// let starnumber = "";

// const number = Math.round(products[i].rating);
// switch (number) {
//   case 10:
//   case 9:
//     starnumber =
// }
