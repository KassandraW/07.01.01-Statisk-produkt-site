fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  categories.forEach(showCategory);
}

function showCategory(cat) {
  //fange template
  const template = document.querySelector("#katTemplate").content;

  //lave en kopi
  const copy = template.cloneNode(true);

  //ændre indhold
  copy.querySelector(".cat-txt").textContent = cat.category;

  copy.querySelector(
    ".cat-container"
  ).href = `products.html?category=${cat.category}`;

  //appende hvor den skal være i DOM
  document.querySelector(".indhold-container").appendChild(copy);
}

// se https://www.youtube.com/watch?v=h5X-JvIjRv4&list=PLCx1FpZ4Dtb3YRa97DeuZIjG0fKeQmWNo&index=18
