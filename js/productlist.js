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
  copy.querySelector(".title").textContent = product.productdisplayname;
  copy.querySelector(
    ".info"
  ).textContent = `${product.category} | ${product.brandname}`;
  copy.querySelector(".price").textContent = `${product.price} kr,-`;

  //appende hvor den skal være i DOM
  document.querySelector(".grid-produkter").appendChild(copy);
}

// SE https://www.youtube.com/watch?v=VAAjHOw7x_Q

{
  /* <template id="smallProductTemplate">
              <a class="card-container" href="product.html">
                <div class="prod-image"></div>
                <div class="prod-txt-container">
                  <div class="title">Produktnavn</div>
                  <div class="price">kr. xxx</div>
                </div>
              </a>
            </template> */
}
