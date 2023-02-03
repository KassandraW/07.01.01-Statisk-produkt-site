fetch("https://kea-alt-del.dk/t7/api/products/1165")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
}


// SE DEN HER VIDEO https://www.youtube.com/watch?v=pmWaikKHV0s