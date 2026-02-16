// Get All Products
const allProducts = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then(res => res.json())
    .then(data => topRatedProducts(data))
}

// Get Top rated Products from all products by filter method
const topRatedProducts = (products) => {
  const topProducts = products.filter(product => product.rating.rate >= 4.7)
  displayTopRatedProducts(topProducts)
}

// Display top rated products

const displayTopRatedProducts = (products) => {
  const topRatedProductsContainer = document.getElementById("top-products-container");
  topRatedProductsContainer.innerHTML = "";
  products.slice(0, 3).forEach(product => {
    const shortDescription =
      product.description.split(" ").length > 10
        ? product.description.split(" ").slice(0, 10).join(" ") + "..."
        : product.description;

    console.log(product)
    const cardDiv = document.createElement("div");
    cardDiv.innerHTML = `
  <div class="card bg-base-100 h-full shadow-sm">
          <figure class ="bg-gray-300">
            <img src="${product.image}" class ="h-72" alt="Shoes" />
          </figure>
          <div class="card-body">
            <div class="flex justify-between items-center">
              <div>
                <p class="text-[#4f39f6] font-semibold px-2.5 bg-[#e0e7ff] rounded-3xl">${product.category}</p>
              </div>
              <div>
                <p class="text-gray-600 font-semibold"><i class="fa-solid fa-star text-amber-500"></i> ${product.rating.rate} (${product.rating.count})</p>
              </div>
            </div>
            <div class="space-y-4 mt-3">
              <h4 class="text-sm font-semibold">${shortDescription}</h4>
              <h2 class="text-2xl font-bold mb-5">$${product.price}</h2>
            </div>
            <div class="card-action flex justify-between items-center gap-3 mt-auto">
              <button class="btn col-span-1 w-1/2"><i class="fa-solid fa-eye"></i>  Details</button>
              <button class="btn btn-primary w-1/2"><i class="fa-solid fa-cart-shopping"></i>   Add</button>
            </div>
          </div>
        </div>
  `
    topRatedProductsContainer.append(cardDiv)
  })

  console.log(products)
}

allProducts()