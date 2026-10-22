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


function updateWishlistCount() {
    const wishlist = getUserData("wishlist");
    const countElement = document.getElementById("wishlistCount");

    if (!countElement) return;

    countElement.textContent = wishlist.length;
    countElement.style.display = wishlist.length > 0 ? "flex" : "none";
}


const wishlistContainer = document.getElementById("wishlist-container");

function showWishlist(list) {
    if (!wishlistContainer) return;

    wishlistContainer.innerHTML = "";

    if (list.length === 0) {
        wishlistContainer.innerHTML = "<p>Your Wishlist is empty</p>";
        return;
    }

    list.forEach(book => {
        // Object or Array - rendu format-aiyum safe-ah handle panrom
        let title, price, img, category, language, author;

        if (Array.isArray(book)) {
            [title, price, img, category, language, author] = book;
        } else {
            title = book.title;
            price = book.price;
            img = book.image || book.img;
            category = book.category;
            language = book.language;
            author = book.author;
        }

        const div = document.createElement("div");
        div.classList.add("book");

        div.innerHTML = `
            <div class="img-container">
                <img
                    src="./img/${img}"
                    class="img"
                    width="160"
                    height="200"
                    alt="${title}"
                >

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="preview-icon active"
                >
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
                </svg>
            </div>

            <span>${title}</span>
            <span>${price}</span>
        `;

        // ... (Remaining code as is)
        // Book click
        div.onclick = () => {
            window.location.href =
                `book.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&img=${encodeURIComponent(img)}&category=${encodeURIComponent(category || "")}&language=${encodeURIComponent(language || "")}&author=${encodeURIComponent(author || "")}`;
        };

        // Remove heart click
        const previewIcon = div.querySelector(".preview-icon");

        previewIcon.onclick = (e) => {
            e.stopPropagation();

            let savedWishlist = getUserData("wishlist");

            // ஆப்ஜெக்ட், அரே மற்றும் ஸ்ட்ரிங் மூன்றையும் சரியாகச் சரிபார்த்து நீக்குகிறது
            savedWishlist = savedWishlist.filter(item => {
                const itemTitle = typeof item === 'string'
                    ? item
                    : (Array.isArray(item) ? item[0] : item.title);
                return itemTitle !== title;
            });

            saveUserData("wishlist", savedWishlist);
            showWishlist(savedWishlist);
            syncWishlistHearts();
            updateWishlistCount();
        };
        wishlistContainer.appendChild(div);
    });
}

// Main page hearts sync
// Main page hearts sync
function syncWishlistHearts() {
    const savedWishlist = getUserData("wishlist");

    // .image-ku badhila ella book cards-layum irukara preview-icon-ah target panrom
    document.querySelectorAll(".book .preview-icon, .img-container .preview-icon").forEach(heart => {
        const bookCard = heart.closest(".book");
        if (!bookCard) return;

        // Book title-ah eduthu check panrom
        const titleElement = bookCard.querySelector("span, .related-title, h3, h4");
        if (!titleElement) return;
        const title = titleElement.textContent.trim();

        const isLiked = savedWishlist.some(item => {
            const itemTitle = typeof item === 'string'
                ? item
                : (Array.isArray(item) ? item[0] : item.title);
            return itemTitle && itemTitle.trim().toLowerCase() === title.toLowerCase();
        });

        heart.classList.toggle("active", isLiked);
    });
}
function openWishlist() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        openLogin();
        return;
    }

    const drawer = document.querySelector(".wishlist-drawer");
    if (!drawer) return;

    const wishlisted = getUserData("wishlist");

    drawer.classList.add("active");
    showWishlist(wishlisted);
}

function closeWishlist() {
    document.querySelector(".wishlist-drawer")
        ?.classList.remove("active");
}

if (wishlistContainer) {
    showWishlist(getUserData("wishlist"));
}

document.addEventListener("DOMContentLoaded", () => {
    syncWishlistHearts();
    updateWishlistCount();
});