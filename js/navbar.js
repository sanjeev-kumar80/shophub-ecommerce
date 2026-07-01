// Cart Count
const cart = document.getElementById("cartCount");

if(cart){

cart.innerText = localStorage.getItem("cartCount") || 0;

}

// Wishlist Count

const wish = document.getElementById("wishlistCount");

if(wish){

wish.innerText = localStorage.getItem("wishlistCount") || 0;

}

// Search

const searchBtn = document.getElementById("searchBtn");

if(searchBtn){

searchBtn.addEventListener("click",()=>{

const value=document.getElementById("searchInput").value.trim();

if(value===""){

alert("Enter Product Name");

return;

}

window.location.href="products.html?search="+encodeURIComponent(value);

});

}

// Login Status

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const loginLink = document.getElementById("loginLink");

const signupLink = document.getElementById("signupLink");

const profileMenu = document.getElementById("profileMenu");

const userName = document.getElementById("userName");

if(currentUser){

loginLink.style.display="none";

signupLink.style.display="none";

profileMenu.style.display="block";

userName.innerHTML="👤 "+currentUser.name;

}