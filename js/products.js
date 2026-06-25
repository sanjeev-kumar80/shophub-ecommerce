const products = [

{
id:1,
name:"Smart Watch",
price:4999,
category:"Electronics",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},

{
id:2,
name:"Headphones",
price:1999,
category:"Electronics",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},

{
id:3,
name:"T Shirt",
price:799,
category:"Fashion",
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
},

{
id:4,
name:"Shoes",
price:2999,
category:"Fashion",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
}

];

const container =
document.getElementById(
"productsContainer"
);

function displayProducts(data){

container.innerHTML = "";

data.forEach(product=>{

container.innerHTML += `

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add To Cart
</button>

<button onclick="addWishlist(${product.id})">
❤️ Wishlist
</button>

</div>

`;

});

}

displayProducts(products);

function addToCart(id){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

cart.push(id);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

updateCartCount();

alert("Product Added To Cart");

}

function addWishlist(id){

let wishlist =
JSON.parse(
localStorage.getItem("wishlist")
) || [];

wishlist.push(id);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

alert("Added To Wishlist");

}

function updateCartCount(){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

document.getElementById(
"cartCount"
).innerText =
cart.length;

}

updateCartCount();

document
.getElementById("searchInput")
.addEventListener("keyup",(e)=>{

const value =
e.target.value.toLowerCase();

const category =
document.getElementById(
"filterCategory"
).value;

const filtered =
products.filter(product=>{

const matchName =
product.name
.toLowerCase()
.includes(value);

const matchCategory =
category==="all"
||
product.category===category;

return matchName &&
matchCategory;

});

displayProducts(filtered);

});

document
.getElementById("filterCategory")
.addEventListener("change",()=>{

const value =
document
.getElementById("searchInput")
.value
.toLowerCase();

const category =
document
.getElementById("filterCategory")
.value;

const filtered =
products.filter(product=>{

const matchName =
product.name
.toLowerCase()
.includes(value);

const matchCategory =
category==="all"
||
product.category===category;

return matchName &&
matchCategory;

});

displayProducts(filtered);

});