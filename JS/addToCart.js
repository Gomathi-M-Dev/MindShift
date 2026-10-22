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



const addtoCart = document.getElementById("addToCart");

// User-specific cart data edukkrom
let cart = getUserData("cart");

// Remove duplicate books and combine quantity
let uniqueCart = [];

cart.forEach(book => {
    const existingBook = uniqueCart.find(
        item => item.title === book.title
    );

    if (existingBook) {
        existingBook.quantity += book.quantity || 1;
    } else {
        uniqueCart.push({
            ...book,
            quantity: book.quantity || 1
        });
    }
});

cart = uniqueCart;
saveUserData("cart", cart);

function showCart() {
    if (!addtoCart) return;
    addtoCart.innerHTML = "";

    // Fresh-ah current user cart data edukkrom
    cart = getUserData("cart");

    if (cart.length === 0) {
        addtoCart.innerHTML = "<p>Your cart is empty</p>";
        updateTotal();
        updateCartCount();
        return;
    }

    cart.forEach((book, index) => {
        if (!book.quantity) {
            book.quantity = 1;
        }

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="./img/${book.image}">

            <div class="cart-info">
                <h3>${book.title}</h3>
                <p>${book.price}</p>

                <div class="quantity">
                    <button type="button" onclick="decreaseQuantity(${index})">−</button>
                    <span>${book.quantity}</span>
                    <button type="button" onclick="increaseQuantity(${index})">+</button>
                </div>
            </div>

            <button type="button" class="delete-btn" onclick="deleteBook(${index})">
                Delete
            </button>
        `;

        addtoCart.appendChild(div);
    });

    saveUserData("cart", cart);
    updateTotal();
    updateCartCount();
}

function increaseQuantity(index) {
    cart = getUserData("cart");
    if (cart[index]) {
        cart[index].quantity += 1;
        saveUserData("cart", cart);
    }
    showCart();
}

function decreaseQuantity(index) {
    cart = getUserData("cart");
    if (cart[index] && cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        saveUserData("cart", cart);
    }
    showCart();
}

function deleteBook(index) {
    cart = getUserData("cart");
    cart.splice(index, 1);
    saveUserData("cart", cart);
    showCart();
}

function updateTotal() {
    cart = getUserData("cart");
    let total = 0;

    cart.forEach(book => {
        const price = Number(
            String(book.price).replace("₹", "").replace(",", "")
        );

        total += price * book.quantity;
    });

    const totalElement = document.getElementById("cart-total");
    if (totalElement) {
        totalElement.textContent = "₹" + total.toLocaleString("en-IN");
    }
}

function openCart() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        if (typeof openLogin === "function") {
            openLogin();
        } else {
            alert("Please login to view your cart.");
        }
        return;
    }

    // Checkout mode-ah clear panrom (Important!)
    localStorage.removeItem("checkoutMode");
    localStorage.removeItem("buyNowBook");

    cart = getUserData("cart");
    const drawer = document.querySelector(".cart-drawer");
    if (drawer) {
        drawer.classList.add("active");
    }

    showCart();
}
function closeCart() {
    const drawer = document.querySelector(".cart-drawer");
    if (drawer) {
        drawer.classList.remove("active");
    }
}

// ADD TO CART FUNCTION (User-specific-ah save aagum)
function addToCart() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        if (typeof openLogin === "function") {
            openLogin();
        } else {
            alert("Please login to add books to your cart.");
        }
        return;
    }

    const title = document.getElementById("displayTitle")?.textContent;
    const price = document.getElementById("displayPrice")?.textContent;
    const imgElement = document.getElementById("displayImg");

    let img = "";
    if (imgElement) {
        const imgSrc = imgElement.getAttribute("src");
        if (imgSrc) {
            img = imgSrc.replace("./img/", "").replace("img/", "");
        }
    }

    const category = document.getElementById("category")?.textContent || "";

    if (!title || !price) {
        alert("Book details not found!");
        return;
    }

    let cart = getUserData("cart");

    const existingBook = cart.find(item => item.title === title);

    if (existingBook) {
        existingBook.quantity = (Number(existingBook.quantity) || 1) + 1;
    } else {
        cart.push({
            title: title,
            price: price,
            image: img,
            category: category,
            quantity: 1
        });
    }

    saveUserData("cart", cart);
    updateCartCount();

    if (typeof openCart === "function") {
        openCart();
    }
}

console.log("addToCart.js loaded");

function updateCartCount() {
    const currentCart = getUserData("cart");
    const countElement = document.getElementById("cartCount");

    if (!countElement) return;

    const totalItems = currentCart.reduce(
        (total, item) => total + (Number(item.quantity) || 1),
        0
    );

    countElement.textContent = totalItems;
    countElement.style.display = totalItems > 0 ? "flex" : "none";
}
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});
window.addEventListener("storage", updateCartCount);