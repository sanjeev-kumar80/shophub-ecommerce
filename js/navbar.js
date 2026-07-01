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

// =========================
// Login Status
// =========================

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const loginLink = document.getElementById("loginLink");
const signupLink = document.getElementById("signupLink");

const profileMenu = document.getElementById("profileMenu");

const userName = document.getElementById("userName");

const profileBtn = document.getElementById("profileBtn");

const dropdown = document.getElementById("dropdown");

const logoutBtn = document.getElementById("logoutBtn");

if(currentUser){

    loginLink.style.display="none";

    signupLink.style.display="none";

    profileMenu.style.display="block";

    userName.innerHTML=currentUser.name;

}

// Dropdown

if(profileBtn){

profileBtn.onclick=function(){

dropdown.style.display=

dropdown.style.display==="block"

?

"none"

:

"block";

}

}

// Outside Click

window.onclick=function(e){

if(

profileBtn &&

!profileBtn.contains(e.target) &&

!dropdown.contains(e.target)

){

dropdown.style.display="none";

}

}

// Logout

if(logoutBtn){

logoutBtn.onclick=function(){

localStorage.removeItem("currentUser");

window.location="login.html";

}

}