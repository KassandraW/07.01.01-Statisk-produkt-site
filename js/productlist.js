fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //fange template
  //lave en kopi
  //ændre indhold
  //appende hvor den skal være i DOM
}

// SE https://www.youtube.com/watch?v=VAAjHOw7x_Q
