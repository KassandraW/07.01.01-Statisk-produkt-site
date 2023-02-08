const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch("https://kea-alt-del.dk/t7/api/products?category=" + category)
  .then((res) => res.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  //looper og kalder showProduct
  products.forEach(showProduct);

  visOverskrift();
}

function visOverskrift() {
  document.querySelector("h1").textContent = category;
  console.log("OVERSKRIFT");
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
  copy.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  if (product.soldout) {
    //produktet er udsolgt
    copy.querySelector(".price").textContent = "udsolgt";
    copy.querySelector(".price").classList.add("soldout");
  }

  copy
    .querySelector(".card-container")
    .setAttribute("href", `product.html?id=${product.id}`);

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
