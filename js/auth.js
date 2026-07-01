// ===============================
// ShopHub Authentication
// ===============================

// ---------- SIGNUP ----------

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("signupName").value.trim();
        const email = document.getElementById("signupEmail").value.trim();
        const password = document.getElementById("signupPassword").value;

        // Check if all fields are filled
        if (!name || !email || !password) {
            alert("Please fill all fields.");
            return;
        }

        // Check if user already exists
        const oldUser = JSON.parse(localStorage.getItem("registeredUser"));

        if (oldUser && oldUser.email === email) {
            alert("User already exists. Please Login.");
            return;
        }

        const user = {
            name,
            email,
            password
        };

        // Save registered user
        localStorage.setItem("registeredUser", JSON.stringify(user));

        alert("Account Created Successfully!");

        window.location.href = "login.html";

    });

}



// ---------- LOGIN ----------

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

        if (!savedUser) {

            alert("No account found. Please Sign Up first.");

            return;

        }

        if (
            savedUser.email === email &&
            savedUser.password === password
        ) {

            // Current Logged-in User
            localStorage.setItem(
                "currentUser",
                JSON.stringify(savedUser)
            );

            alert("Login Successful!");

            window.location.href = "index.html";

        } else {

            alert("Invalid Email or Password");

        }

    });

}