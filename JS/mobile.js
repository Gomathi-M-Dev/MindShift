// Mobile Wishlist Count
function updateMobileWishlistCount() {
    const wishlist = getUserData("wishlist");

    const countElement =
        document.getElementById("mobileWishlistCount");

    if (!countElement) return;

    countElement.textContent = wishlist.length;
    countElement.style.display =
        wishlist.length > 0 ? "flex" : "none";
}

// Mobile Cart Count
function updateMobileCartCount() {
    const cart = getUserData("cart");

    const countElement =
        document.getElementById("mobileCartCount");

    if (!countElement) return;

    countElement.textContent = cart.length;
    countElement.style.display =
        cart.length > 0 ? "flex" : "none";
}

// Page load aagumbothu counts update pannum
document.addEventListener("DOMContentLoaded", () => {
    updateMobileWishlistCount();
    updateMobileCartCount();
});