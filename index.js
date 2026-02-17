// Get All Products
const loadAllProducts = () => {
  const url = "https://fakestoreapi.com/products";
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const categoryProductsContainer = document.getElementById("category-product-container");
      categoryProductsContainer.innerHTML = "";

      data.forEach(product => {
        const card = productCard(product)
        categoryProductsContainer.append(card)
      })
      topRatedProducts(data)
    })
}

// active class
const removeActiveClass = () => {
  const categoryBtns = document.querySelectorAll(".category-btn");
  categoryBtns.forEach(btn => btn.classList.remove('active'))
}

// Get All Categories 

const allCategories = () => {
  const url = "https://fakestoreapi.com/products/categories";
  fetch(url)
    .then(res => res.json())
    .then(data => displayAllCategories(data))

}

// Product By Categories 

const loadCategories = (cate) => {
  const url = `https://fakestoreapi.com/products/category/${encodeURIComponent(cate)}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      removeActiveClass()
      const activeCategoryBtn = document.getElementById(`category-btn-${cate}`)
      activeCategoryBtn.classList.add('active')
      displayCategoryProduct(data)
    });
}


const productCard = (product) => {
  const shortDescription =
    product?.description?.split(" ").length > 10
      ? product?.description?.split(" ").slice(0, 10).join(" ") + "..."
      : product?.description;

  const cardDiv = document.createElement("div");
  cardDiv.innerHTML = `
  <div class="card bg-base-100 h-full shadow-sm">
          <figure class ="bg-gray-300">
           <img src="${product?.image}" class ="h-72" alt="Shoes" />
          </figure>
          <div class="card-body">
           <div class="flex justify-between items-center">
             <div>
                  <p class="text-[#4f39f6] font-semibold px-2.5 bg-[#e0e7ff] rounded-3xl">${product?.category}</p>
             </div>
              <div>
                <p class="text-gray-600 font-semibold"><i class="fa-solid fa-star text-amber-500"></i> ${product?.rating?.rate} (${product?.rating?.count})</p>
              </div>
           </div>
            <div class="space-y-4 mt-3">
                 <h4 class="text-sm font-semibold">${shortDescription}</h4>
             <h2 class="text-2xl font-bold mb-5">$${product?.price}</h2>
            </div>
             <div class="card-action flex justify-between items-center gap-3 mt-auto">
                <button class="btn col-span-1 w-1/2"><i class="fa-solid fa-eye"></i>  Details</button>
                 <button class="btn btn-primary w-1/2"><i class="fa-solid fa-cart-shopping"></i>   Add</button>
              </div>
             </div>
         </div>
    `;
  return cardDiv
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
  console.log(productCard(products))

  products.slice(0, 3).forEach(product => {
    const card = productCard(product)
    topRatedProductsContainer.append(card)
  })

}

const displayAllCategories = (categories) => {
  // Get the container and empty
  const categoriesContainer = document.getElementById('all-categories');
  categoriesContainer.innerHTML = "";
  const allBtnDiv = document.createElement('div')
  const allButton = document.createElement("button");
  allButton.className = "category-btn btn btn-outline btn-primary rounded-full active";
  // categories.forEach(category => {})
  allButton.id = `category-btn-all`
  allButton.innerText = "All";

  allButton.addEventListener("click", () => {
    loadAllProducts();
  });

  allBtnDiv.appendChild(allButton);
  categoriesContainer.append(allBtnDiv);


  categoriesContainer.append(allBtnDiv);

  categories.forEach(category => {
    const btnCategory = document.createElement("div");

    const button = document.createElement("button");
    button.className = "category-btn btn btn-outline btn-primary rounded-full";
    button.id = `category-btn-${category}`
    button.innerText = category;

    button.addEventListener("click", () => {
      loadCategories(category);
    });

    btnCategory.appendChild(button);
    categoriesContainer.append(btnCategory);
  });

}

const displayCategoryProduct = (products) => {
  const categoryProductsContainer = document.getElementById("category-product-container");
  categoryProductsContainer.innerHTML = "";

  products.forEach(product => {
    const card = productCard(product)
    categoryProductsContainer.append(card)
  })
}

loadAllProducts()
allCategories()