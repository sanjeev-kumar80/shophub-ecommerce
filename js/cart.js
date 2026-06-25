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

const cartIds =
JSON.parse(
localStorage.getItem("cart")
) || [];

const cartContainer =
document.getElementById(
"cartItems"
);

let total = 0;

if(cartIds.length === 0){

cartContainer.innerHTML = `

<h2 style="
text-align:center;
grid-column:1/-1;">
Your Cart Is Empty
</h2>

`;

}

cartIds.forEach(id=>{

const product =
products.find(
p=>p.id===id
);

if(product){

total += product.price;

cartContainer.innerHTML += `

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button
onclick="removeItem(${id})">
Remove
</button>

</div>

`;

}

});

document.getElementById(
"totalPrice"
).innerText =
"Total Price: ₹" + total;

function removeItem(id){

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const index =
cart.indexOf(id);

if(index > -1){

cart.splice(index,1);

}

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

location.reload();

}