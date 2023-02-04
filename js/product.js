fetch("https://kea-alt-del.dk/t7/api/products/1164")
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);

  document.querySelector(".prod-name").textContent = product.productdisplayname;
  document.querySelector(".prod-brand").textContent = product.brandname;
  document.querySelector(".prod-price").textContent = `${product.price} kr,-`;
  document.querySelector(".prod-color").textContent = product.basecolour;
  document.querySelector("img").src = product.brandimage;
}

// SE DEN HER VIDEO https://www.youtube.com/watch?v=pmWaikKHV0s
