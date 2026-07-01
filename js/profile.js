const user = JSON.parse(localStorage.getItem("currentUser"));

if (!user) {

    alert("Please Login First");

    window.location.href = "login.html";

}

document.getElementById("username").innerText = user.name;
document.getElementById("email").innerText = user.email;

document.getElementById("ordersBtn").addEventListener("click", () => {

    alert("Orders page coming soon.");

});

document.getElementById("wishlistBtn").addEventListener("click", () => {

    window.location.href = "wishlist.html";

});

document.getElementById("logoutBtn").addEventListener("click", () => {

    localStorage.removeItem("currentUser");

    alert("Logged Out Successfully");

    window.location.href = "login.html";

});