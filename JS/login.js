function getCurrentUserEmail() {
    return localStorage.getItem("currentUser") || localStorage.getItem("userEmail") || "";
}

function getUserData(key) {
    const email = getCurrentUserEmail();
    if (!email) return [];
    return JSON.parse(localStorage.getItem(`${key}_${email}`)) || [];
}

function saveUserData(key, data) {
    const email = getCurrentUserEmail();
    if (!email) return;
    localStorage.setItem(`${key}_${email}`, JSON.stringify(data));
}

function openLogin() {
    document.getElementById("loginOverlay").classList.add("active");
}

function closeLogin() {
    document.getElementById("loginOverlay").classList.remove("active");
}

const signupForm = document.getElementById("signupForm");

const fullName = document.getElementById("signupfullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


const NameError = document.querySelector(".nameError");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");
const confirmPasswordError = document.querySelector(".confirmPasswordError");


const NamePattern = /^[a-zA-Z]+(?:[ .'-][a-zA-Z]+)*$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;


// Full Name validation
fullName.addEventListener("input", function () {
    const value = fullName.value.trim();
    const letterCount = value.replace(/[^a-zA-Z]/g, "").length;

    if (value === "") {
        NameError.textContent = "Full name is required";
        NameError.style.display = "none";
        fullName.classList.remove("valid", "invalid");
    }
    else if (!NamePattern.test(value) || letterCount < 2) {
        NameError.textContent = "Enter a valid name";
        NameError.style.display = "block";
        fullName.classList.add("invalid");
        fullName.classList.remove("valid");
    }
    else {
        NameError.style.display = "none";
        fullName.classList.add("valid");
        fullName.classList.remove("invalid");
    }
});


// Email validation
email.addEventListener("input", function () {
    const value = email.value.trim();

    if (value === "" || !emailPattern.test(value)) {
        emailError.textContent = "Enter a valid email address";
        emailError.style.display = value === "" ? "none" : "block";
        email.classList.add("invalid");
        email.classList.remove("valid");
    }
    else {
        emailError.style.display = "none";
        email.classList.add("valid");
        email.classList.remove("invalid");
    }
});


// Password validation
password.addEventListener("input", function () {
    const value = password.value;

    if (value === "") {
        passwordError.textContent = "Password is required";
        passwordError.style.display = "none";
        password.classList.remove("valid", "invalid");
    }
    else if (!passwordPattern.test(value)) {
        passwordError.textContent =
            "Use 8+ characters, uppercase, lowercase, number and special character";

        passwordError.style.display = "block";
        password.classList.add("invalid");
        password.classList.remove("valid");
    }
    else {
        passwordError.style.display = "none";
        password.classList.add("valid");
        password.classList.remove("invalid");
    }
});



// Confirm Password validation
confirmPassword.addEventListener("input", function () {
    const passwordValue = password.value;
    const confirmValue = confirmPassword.value;

    if (confirmValue === "") {
        confirmPasswordError.textContent = "";
        confirmPasswordError.style.display = "none";

        confirmPassword.classList.remove("valid", "invalid");
    }
    else if (passwordValue !== confirmValue) {
        confirmPasswordError.textContent = "Passwords do not match";
        confirmPasswordError.style.display = "block";

        confirmPassword.classList.add("invalid");
        confirmPassword.classList.remove("valid");
    }
    else {
        confirmPasswordError.style.display = "none";

        confirmPassword.classList.add("valid");
        confirmPassword.classList.remove("invalid");
    }
});

password.addEventListener("input", function () {
    if (confirmPassword.value !== "") {
        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = "Passwords do not match";
            confirmPasswordError.style.display = "block";

            confirmPassword.classList.add("invalid");
            confirmPassword.classList.remove("valid");
        }
        else {
            confirmPasswordError.style.display = "none";

            confirmPassword.classList.add("valid");
            confirmPassword.classList.remove("invalid");
        }
    }
});



// Validate all fields on submit
signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameValue = fullName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value;

    const letterCount = nameValue.replace(/[^a-zA-Z]/g, "").length;

    const nameValid =
        NamePattern.test(nameValue) && letterCount >= 2;

    const emailValid = emailPattern.test(emailValue);

    const passwordValid = passwordPattern.test(passwordValue);
    const confirmValue = confirmPassword.value;





    // Show name error
    if (nameValue === "") {
        NameError.textContent = "Full name is required";
        NameError.style.display = "block";
    }
    else if (!nameValid) {
        NameError.textContent = "Enter a valid name";
        NameError.style.display = "block";
    }
    else {
        NameError.style.display = "none";
    }


    // Show email error
    if (!emailValid) {
        emailError.textContent = "Enter a valid email address";
        emailError.style.display = "block";
    }
    else {
        emailError.style.display = "none";
    }


    // Show password error
    if (passwordValue === "") {
        passwordError.textContent = "Password is required";
        passwordError.style.display = "block";
    }
    else if (!passwordValid) {
        passwordError.textContent =
            "Use 8+ characters, uppercase, lowercase, number and special character";

        passwordError.style.display = "block";
    }
    else {
        passwordError.style.display = "none";
    }
    const confirmPasswordValid =
        confirmValue !== "" && passwordValue === confirmValue;

    if (
        nameValid &&
        emailValid &&
        passwordValid &&
        confirmPasswordValid
    ) {
        const enteredEmail = email.value.trim();

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", fullName.value.trim());
        localStorage.setItem("userEmail", enteredEmail);
        localStorage.setItem("currentUser", enteredEmail);

        updateProfileIcon();

        // Success popup-ah show panrom
        const successPopup = document.getElementById("successPopup");
        if (successPopup) {
            // Optional: Title-ah Signup-ku thaguntha maathiri mathalam
            const titleElement = successPopup.querySelector("h2");
            if (titleElement) {
                titleElement.textContent = "Account Created Successfully!";
            }

            successPopup.classList.add("active");
        }
    }
});

function closeSuccessPopup() {
    // Success popup close
    document.getElementById("successPopup").classList.remove("active");

    // Login form close
    document.getElementById("loginOverlay").classList.remove("active");
}



function requireLogin(action) {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        openLogin();
        return;
    }

    action();
}


// Wishlist
function handleWishlistClick() {
    requireLogin(() => {
        openWishlist();
    });
}

// Cart
function handleCartClick() {
    requireLogin(() => {
        openCart();
    });
}

// Orders
function handleOrdersClick() {
    requireLogin(() => {
        openOrders();
    });
}


function updateProfileIcon() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const savedName = localStorage.getItem("userName");
    const profileIcon = document.getElementById("profileIcon");

    if (!profileIcon) return;

    if (isLoggedIn === "true" && savedName) {
        // Login aana user-oda first letter
        profileIcon.textContent = savedName.trim().charAt(0).toUpperCase();
        profileIcon.classList.add("logged-in");
    } else {
        // Logout aana original SVG restore aagum
        profileIcon.classList.remove("logged-in");

        profileIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="white"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round">

                <path d="M17.925 20.056a6 6 0 0 0-11.851.001"/>
                <circle cx="12" cy="11" r="4"/>
                <circle cx="12" cy="12" r="10"/>
            </svg>
        `;
    }
}

document.addEventListener("DOMContentLoaded", updateProfileIcon);
// Profile menu open / close
function toggleProfileMenu() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    // Login pannala na mattum login form open aaganum
    if (isLoggedIn !== "true") {
        openLogin();
        return;
    }

    // Already login pannirundha dropdown mattum open aagum
    const profileMenu = document.getElementById("profileMenu");

    if (!profileMenu) return;

    document.getElementById("profileName").textContent =
        localStorage.getItem("userName") || "";

    document.getElementById("profileEmail").textContent =
        localStorage.getItem("userEmail") || "";

    profileMenu.classList.toggle("active");
}



function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");

    document.getElementById("profileMenu")?.classList.remove("active");

    // Close open drawers
    document.querySelector(".wishlist-drawer")?.classList.remove("active");
    document.querySelector(".cart-drawer")?.classList.remove("active");
    document.querySelector(".orders-drawer")?.classList.remove("active");

    updateProfileIcon();

    alert("You have logged out successfully!");
}

function getUserKey(type) {
    const email = localStorage.getItem("userEmail");

    if (!email || localStorage.getItem("isLoggedIn") !== "true") {
        return null;
    }

    const safeEmail = email.trim().toLowerCase();

    return `${type}_${encodeURIComponent(safeEmail)}`;
}

function getUserData(type) {
    const key = getUserKey(type);

    if (!key) return [];

    return JSON.parse(localStorage.getItem(key)) || [];
}

function saveUserData(type, data) {
    const key = getUserKey(type);

    if (!key) return;

    localStorage.setItem(key, JSON.stringify(data));
}
function OrderHistory() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        openLogin()
        return
    }
    openOrders()
}
function FooterWishlist() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (isLoggedIn !== "true") {
        openLogin()
        return
    }
    openWishlist()
}
function FooterCart() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (isLoggedIn !== "true") {
        openLogin()
        return
    }

    openCart()
}
function Contact() {
    const isLoggedIn = localStorage.getItem("isLoggedIn")

    if (isLoggedIn !== "true") {
        openLogin()
        return
    }

    window.location.href = "contact.html"
}

