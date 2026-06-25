const products = [

{
id:1,
name:"Smart Watch",
price:4999,
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
},

{
id:2,
name:"Headphones",
price:1999,
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
},

{
id:3,
name:"T Shirt",
price:799,
image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
},

{
id:4,
name:"Shoes",
price:2999,
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
}

];

const wishlistIds =
JSON.parse(
localStorage.getItem("wishlist")
) || [];

const container =
document.getElementById(
"wishlistItems"
);

if(wishlistIds.length === 0){

container.innerHTML = `
<h2 style="grid-column:1/-1;text-align:center;">
Wishlist Is Empty
</h2>
`;

}

wishlistIds.forEach(id=>{

const product =
products.find(
p=>p.id===id
);

if(product){

container.innerHTML += `

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="moveToCart(${id})">
Add To Cart
</button>

</div>

`;

}

});

function moveToCart(id){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

cart.push(id);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

alert("Added To Cart");

}