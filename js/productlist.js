fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //fange template

  const template = document.querySelector("#smallProductTemplate").content;
  //lave en kopi
  const copy = template.cloneNode(true);
  //ændre indhold

  //appende hvor den skal være i DOM
  document.querySelector(".grid-produkter").appendChild(copy);
}

// SE https://www.youtube.com/watch?v=VAAjHOw7x_Q
