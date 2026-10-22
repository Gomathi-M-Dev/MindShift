const books = [
    ["To Kill a Mockingbird", "₹399", "1280px-To_Kill_a_Mockingbird.jpg", "Classic", "English", "Harper Lee", true],
    ["Believe in Yourself", "₹299", "YourSelf.jpg", "Self", "English", "Dr. Joseph Murphy", false],
    ["World Literature Stories", "₹450", "WL.jpg", "Classic", "English", "Various Authors", false],
    ["Sila Nerangalil Sila Manithargal", "₹350", "SNSM.jpg", "Novel", "Tamil", "Jayakanthan", true],
    ["Valayapathi", "₹420", "Valaiyapathi.jpg", "Classic", "Tamil", "Unknown", false], // Author name historically unknown
    ["Panchatantra Tales", "₹299", "TP.jpg", "Kids", "English", "Vishnu Sharma", true],
    ["Atomic Habits", "₹499", "AH.jpg", "Self", "English", "James Clear", true],
    ["Chanakya Neeti", "₹250", "CN.jpg", "Philosophy", "Hindi", "Chanakya", true],
    ["The Kite Runner", "₹399", "TK.jpg", "Novel", "English", "Khaled Hosseini", true],
    ["Three Men in a Boat", "₹320", "TI.jpg", "Classic", "English", "Jerome K. Jerome", false],
    ["Godaan", "₹260", "Godaan.jpg", "Family", "Hindi", "Munshi Premchand", true],
    ["Harry Potter", "₹599", "HP.jpg", "Fantasy", "English", "J.K. Rowling", true],
    ["The Hobbit", "₹520", "The hobbit.jpg", "Fantasy", "English", "J.R.R. Tolkien", true],
    ["Things Fall Apart", "₹340", "TFA.jpg", "Classic", "English", "Chinua Achebe", true],
    ["A Grammar of Modern Telugu", "₹480", "Telungu Study3.jpg", "Study", "Telungu", "Bhadriraju Krishnamurti", false],
    ["Tenali Raman Stories", "₹300", "Tenali.jpg", "Kids", "English", "Various Authors", false],
    ["Ramayanam", "₹650", "Ramayanam.jpg", "Epic", "Tamil", "Valmiki", true],
    ["Telugu Love Stories", "₹85", "Telungu Love.jpg", "Love", "Telungu", "Various Authors", false],
    ["The Alchemist", "₹399", "TA.jpg", "Self", "English", "Paulo Coelho", true],
    ["Rich Dad Poor Dad", "₹450", "RDPD.jpg", "Finance", "English", "Robert Kiyosaki", true],
    ["Seevaka Sindhamani", "₹380", "seevagasindhamani.jpg", "Classic", "Tamil", "Thiruthakkadevar", false],
    ["Telugu Vyakaranam", "₹350", "Telungu Study2.jpg", "Study", "Telungu", "Chinnaya Suri", false],
    ["Amma", "₹320", "Telungu Family.jpg", "Family", "Telungu", "Maxim Gorky", false], // Translation version
    ["The God of Small Things", "₹75", "Small Things.jpg", "Novel", "English", "Arundhati Roy", true],
    ["Silappathikaram", "₹500", "Silapathigaram.jpg", "Classic", "Tamil", "Ilango Adigal", true],
    ["Samskara", "₹350", "Samskara.jpg", "Classic", "Kannada", "U.R. Ananthamurthy", true],
    ["Rise", "₹100", "Rise.jpg", "Self", "English", "Danny Gokey", false],
    ["Ravana", "₹370", "Ravana.jpg", "Mythology", "Hindi", "Anand Neelakantan", false],
    ["Rashmirathi", "₹390", "Rashmirathi.jpg", "Epic", "Hindi", "Ramdhari Singh Dinkar", true],
    ["Ponniyin Selvan", "₹750", "PP.jpg", "History", "Tamil", "Kalki", true],
    ["Pothu Arivu Guide", "₹260", "Pothu Arivu.jpg", "Study", "Tamil", "Sura Publications", false],
    ["pataliputra History", "₹310", "pataliputra.jpg", "History", "Hindi", "Dr. Manoj Kumar", false],
    ["The Other Love Story", "₹300", "Other love.jpg", "Love", "English", "Roopa Rao", false],
    ["Oru Desathinte Katha", "₹150", "Oru Desathinte.jpg", "Novel", "Malayalam", "S.K. Pottekkatt", true],
    ["Nirmala", "₹320", "Nirmala.jpg", "Family", "Hindi", "Munshi Premchand", true],
    ["Neeyum Naanum", "₹280", "Neeyum Naanum.jpg", "Love", "Tamil", "C. Gopinath", false],
    ["My Life", "₹260", "MY.jpg", "Novel", "English", "Bill Clinton", false],
    ["Mahabharatam", "₹600", "MB.jpg", "Spiritual", "Tamil", "Vyasa", true],
    ["Manimegalai", "₹420", "Manimegalai.jpg", "Classic", "Tamil", "Sathanar", true],
    ["Malayalam Grammar", "₹350", "Malayalam study2.jpg", "Study", "Malayalam", "Hermann Gundert", false],
    ["Sura’s PSC LDC Pariksha Sahayi", "₹380", "Malayalam study.jpg", "Study", "Malayalam", "Sura Publications", false],
    ["Mahaprasthanam", "₹320", "Mahaprasatham.jpg", "Spiritual", "Telugu", "Sri Sri", true],
    ["Little Women", "₹399", "LW.jpg", "Classic", "English", "Louisa May Alcott", true],
    ["Randamoozham", "₹480", "Love Mal2.jpg", "Novel", "Malayalam", "M.T. Vasudevan Nair", true],
    ["Maniyara", "₹300", "Love Mal.jpg", "Love", "Malayalam", "M. Mukundan", false],
    ["Ikigai", "₹450", "Life.jpg", "Self", "English", "Héctor García", true],
    ["Kundalakesi", "₹420", "Kundalakesi.jpg", "Classic", "Tamil", "Nathakuthanaar", false],
    ["KAS Exam Guide", "₹350", "KAS.jpg", "Study", "Kannada", "Dr. K.M. Suresh", false],
    ["Karukku", "₹350", "Karukku.jpg", "Social", "Tamil", "Bama", true],
    ["Modern Kannada Grammar", "₹380", "Kannda Grammer.jpg", "Study", "Kannada", "B.M. Srikantaiah", false],
    ["Mookajjiya Kanasugalu", "₹420", "Kannada Love2.jpg", "Classic", "Kannada", "K. Shivaram Karanth", true],
    ["Ginnara Diggati", "₹300", "Kannada Love1.jpg", "Love", "Kannada", "S.L. Bhyrappa", false],
    ["Me Before You", "₹450", "JM.jpg", "Novel", "English", "Jojo Moyes", true],
    ["Tamil Kalanchiyam", "₹350", "ilakiyam.jpg", "Study", "Tamil", "P. Periyasamy Thooran", false],
    ["Malhar Hindi Guide", "₹300", "Hindi study1.jpg", "Study", "Hindi", "Malhar Publications", false],
    ["The ONE Thing", "₹350", "The One Thing.jpg", "Self", "English", "Gary Keller", true],
    ["Vishesh Hindi Vyakaran", "₹320", "HindiStudy2.jpg", "Study", "Hindi", "Dr. Ashok Batra", false],
    ["Samanya Gyan", "₹290", "Hindistudy3.jpg", "Study", "Hindi", "Lucent", false],
    ["The Power of Habit", "₹499", "Habbit.jpg", "Self", "English", "Charles Duhigg", true],
    ["Objective General English", "₹350", "English.jpg", "Study", "English", "S.P. Bakshi", true],
    ["Diary of a Wimpy Kid", "₹399", "Diary_of_a_Wimpy.jpg", "Kids", "English", "Jeff Kinney", true],
    ["Curse of Shadows and Thorns", "₹300", "CST.jpg", "Fantasy", "English", "L.J. Andrews", false],
    ["Sirippu Rajacholan", "₹260", "comedy.jpg", "Comedy", "Tamil", "Baski", false],
    ["Nayi Prem Kahani", "₹280", "College Love.jpg", "Love", "Hindi", "Premchand", false],
    ["Chetan Bhagat Collection", "₹399", "CB.jpg", "Novel", "English", "Chetan Bhagat", true],
    ["Quantitative Aptitude", "₹450", "Apti.jpg", "Study", "English", "R.S. Aggarwal", true],
    ["Amuktamalyada", "₹420", "Amu.jpg", "Classic", "Telungu", "Krishnadevaraya", true],
    ["Amma Vandhal", "₹350", "Amma.jpg", "Family", "Tamil", "T. Janakiraman", true],
    ["Gunahon Ka Devta", "₹350", "GKD.jpg", "Classic Fiction", "Hindi", "Dharamvir Bharati", true],
    ["Alaipayuthey Love Story", "₹300", "Alaipayuthe.jpg", "Love", "Tamil", "Vairamuthu", false],
    ["Abhimanyu", "₹320", "Abimanyu.jpg", "Mythology", "Tamil", "Chakravarthy", false],
    ["Wings of Fire", "₹399", "Abdulkalam.jpg", "Biography", "English", "A.P.J. Abdul Kalam", true],
    ["Naa Prema Katha", "₹329", "Telungu Love2.jpg", "Love", "Telungu", "Yandamoori Veerendranath", false],
    ["Telangana Economy", "₹420", "Telungu study1.jpg", "Study", "Telungu", "Telugu Academy", false],
    ["Parthiban Kanavu", "₹320", "PK.jpg", "Classic", "Tamil", "Kalki", true],
    ["The Psychology of Money", "₹399", "POM.jpg", "Finance", "English", "Morgan Housel", true]

];

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

const urlParams = new URLSearchParams(window.location.search);
const bookTitle = decodeURIComponent(urlParams.get('title') || "").trim();
const bookPrice = urlParams.get('price');
const bookImg = urlParams.get('img');
const category = urlParams.get('category');
const language = urlParams.get('language');
const author = urlParams.get('author');

if (bookTitle) {
    const selectedBook = books.find(
        book => book[0] === bookTitle
    );

    const displayCategory = selectedBook
        ? selectedBook[3]
        : category;

    document.getElementById("category").textContent =
        displayCategory || "";

    document.getElementById("displayTitle").textContent = bookTitle;
    document.getElementById("displayPrice").textContent = bookPrice;
    document.getElementById("displayImg").src = `./img/${bookImg}`;
    document.getElementById("displayImg").alt = bookTitle;

    document.getElementById("displayDesc").textContent =
        `Authentic version of "${bookTitle}". Best seller in our store.`;
}


function buyNow() {

    if (localStorage.getItem("isLoggedIn") !== "true") {
        openLogin();
        return;
    }
    const buyNowBook = {
        title: bookTitle,
        price: bookPrice,
        image: bookImg,
        quantity: 1

    };
    localStorage.setItem("buyNowBook", JSON.stringify(buyNowBook));
    localStorage.setItem("checkoutMode", "buyNow");
    openCheckout()
}


document.addEventListener("DOMContentLoaded", () => {
    let bookWishlist = getUserData("wishlist");
    const detailWishlist = document.getElementById("detailWishlist");

    const alreadyLiked = bookWishlist.some(book => {
        let title = "";
        if (typeof book === 'string') {
            title = book;
        } else if (Array.isArray(book)) {
            title = book[0];
        } else if (book && book.title) {
            title = book.title;
        }
        return title.trim().toLowerCase() === bookTitle.toLowerCase();
    });

    if (detailWishlist) {
        if (alreadyLiked) {
            detailWishlist.classList.add("active");
        } else {
            detailWishlist.classList.remove("active");
        }
    }
});// Heart click
if (detailWishlist) {
    detailWishlist.onclick = function () {
        let savedWishlist = getUserData("wishlist");

        const index = savedWishlist.findIndex(book => {
            let title = "";
            if (typeof book === 'string') {
                title = book;
            } else if (Array.isArray(book)) {
                title = book[0];
            } else if (book && book.title) {
                title = book.title;
            }
            return title.trim().toLowerCase() === bookTitle.toLowerCase();
        });

        // விஷ்லிஸ்ட்டில் ஏற்கனவே இருந்தால் - நீக்கிவிடுவோம் (Remove)
        if (index !== -1) {
            savedWishlist.splice(index, 1);
            detailWishlist.classList.remove("active");
        }
        // விஷ்லிஸ்ட்டில் இல்லாவிட்டால் - ஆப்ஜெக்ட் வடிவில் சேர்த்துக்கொள்வோம் (Add)
        else {
            savedWishlist.push({
                title: bookTitle,
                price: bookPrice,
                image: bookImg,
                category: category,
                language: language,
                author: author
            });

            detailWishlist.classList.add("active");
        }

        // யூசர்-ஸ்பெசிபிக்காக சேமிக்கிறோம்
        saveUserData("wishlist", savedWishlist);
        updateHeaderCounts();
    };
}
function addToCart() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        openLogin();
        return;
    }

    // Fresh-ah current user cart data-va ovoru thadavayum edukkrom
    let bookCart = getUserData("cart");

    const existingBook = bookCart.find(
        item => item.title === bookTitle
    );

    if (existingBook) {
        existingBook.quantity = (Number(existingBook.quantity) || 1) + 1;
    } else {
        bookCart.push({
            title: bookTitle,
            price: bookPrice,
            image: bookImg,
            quantity: 1
        });
    }

    // User-specific-a safe-ah save panrom
    saveUserData("cart", bookCart);

    alert("Added to cart");
    console.log("Cart:", bookCart);
}
const relatedContainer = document.getElementById("relatedBooks");

if (relatedContainer && typeof books !== "undefined") {

    // Current book-ai exclude pannuvom
    const otherBooks = books.filter(
        book => book[0] !== bookTitle
    );

    // 1. Same category books
    const sameCategoryBooks = otherBooks.filter(
        book => book[3]?.toLowerCase() === category?.toLowerCase()
    );

    // 2. Same category illaadha remaining books
    const remainingBooks = otherBooks.filter(
        book => book[3]?.toLowerCase() !== category?.toLowerCase()
    );

    // Same category first, remaining books next
    const allRelatedBooks = [
        ...sameCategoryBooks,
        ...remainingBooks
    ];

    relatedContainer.innerHTML = "";

    allRelatedBooks.forEach(book => {
        const [title, price, img, cat, lang, bookAuthor] = book;

        const card = document.createElement("div");
        card.className = "book";

        // Heart icon- oda sethu HTML-ah update panrom
        card.innerHTML = `
            <div class="img-container">
                <img src="./img/${img}" class="img" alt="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="right:40px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="preview-icon">
                    <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>
                </svg>
            </div>
            <span class="related-title"></span>
            <span class="related-price"></span>
        `;

        card.querySelector(".related-title").textContent = title;
        card.querySelector(".related-price").textContent = price;

        // Heart click event (Card click aagi page navigaate aagatha padi stopPropagation podrom)
        const heartIcon = card.querySelector(".preview-icon");
        heartIcon.onclick = (e) => {
            e.stopPropagation(); // Card click-ah block panrom

            if (localStorage.getItem("isLoggedIn") !== "true") {
                if (typeof openLogin === "function") openLogin();
                return;
            }

            let savedWishlist = getUserData("wishlist");

            const index = savedWishlist.findIndex(item => {
                const itemTitle = typeof item === 'string' ? item : (Array.isArray(item) ? item[0] : item.title);
                return itemTitle && itemTitle.trim().toLowerCase() === title.trim().toLowerCase();
            });

            if (index !== -1) {
                // Already iruntha remove panrom
                savedWishlist.splice(index, 1);
            } else {
                // Illati add panrom
                savedWishlist.push({
                    title: title,
                    price: price,
                    image: img,
                    category: cat,
                    language: lang,
                    author: bookAuthor
                });
            }

            saveUserData("wishlist", savedWishlist);

            // Ella hearts-um counts-um sync aaganum
            if (typeof syncWishlistHearts === "function") syncWishlistHearts();
            if (typeof updateHeaderCounts === "function") updateHeaderCounts();
        };

        // Book card click (Navigate to book details)
        card.onclick = () => {
            window.location.href =
                `book.html?title=${encodeURIComponent(title)}` +
                `&price=${encodeURIComponent(price)}` +
                `&img=${encodeURIComponent(img)}` +
                `&category=${encodeURIComponent(cat)}` +
                `&language=${encodeURIComponent(lang)}` +
                `&author=${encodeURIComponent(bookAuthor)}`;
        };

        relatedContainer.appendChild(card);
    });

    // Render aani mudinjonum hearts sync aaganum
    if (typeof syncWishlistHearts === "function") {
        syncWishlistHearts();
    }
}
function updateOldOrders() {
    let orders = getUserData("orders");

    orders = orders.map(order => {
        if (!order.orderId) {
            order.orderId = crypto.randomUUID();
        }

        if (!order.orderDate) {
            order.orderDate = new Date().toISOString();
        }

        return order;
    });

    saveUserData("orders", orders);
}


function updateWishlistCount() {
    const wishlist = getUserData("wishlist");
    const countElement = document.getElementById("wishlistCount");

    if (!countElement) return;

    countElement.textContent = wishlist.length;
    countElement.style.display = wishlist.length > 0 ? "flex" : "none";
}

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

function updateOrdersCount() {
    const orders = getUserData("orders");
    const countElement = document.getElementById("ordersCount");

    if (!countElement) return;

    countElement.textContent = orders.length;
    countElement.style.display = orders.length > 0 ? "flex" : "none";
}

function updateHeaderCounts() {
    updateWishlistCount();
    updateCartCount();
    updateOrdersCount();
}

document.addEventListener("DOMContentLoaded", () => {
    updateHeaderCounts();
});
const searchInput = document.getElementById("search input");
const resultsBox = document.getElementById("search-results");

searchInput.addEventListener("input", function () {
    const val = this.value.toLowerCase().trim();
    resultsBox.innerHTML = "";

    if (val.length > 0) {
        const filtered = books.filter(book => book[0].toLowerCase().includes(val));

        if (filtered.length > 0) {
            resultsBox.style.display = "block";

            filtered.forEach(book => {
                const item = document.createElement("div");
                item.className = "suggestion-item";

                item.innerHTML = `
                    <img src="./img/${book[2]}">
                    <span>${book[0]} - ${book[1]}</span>
                `;

                item.onclick = () => {
                    const [title, price, img, cat, lang, bookAuthor] = book;

                    const params = new URLSearchParams({
                        title: title,
                        price: price,
                        img: img,
                        category: cat || "",
                        language: lang || "",
                        author: bookAuthor || ""
                    });

                    window.location.href = `book.html?${params.toString()}`;
                };
                resultsBox.appendChild(item);
            });
        } else {
            resultsBox.style.display = "none";
        }
    } else {
        resultsBox.style.display = "none";
    }
});

document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
        resultsBox.style.display = "none";
    }
});

function closeProfileMenu() {
    const profileMenu = document.getElementById("profileMenu");
    if (profileMenu) {
        profileMenu.classList.remove("active");
    }
}

const contactPage = document.getElementById("contactPage");

if (contactPage) {
    contactPage.addEventListener("click", function () {
        // Login pannirukangala nu check panrom
        const isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn !== "true") {
            // Login pannala na login popup-ah open panrom
            if (typeof openLogin === "function") {
                openLogin();
            }
            return;
        }

        // Login panniruntha profile menu-va close panrom
        const profileMenu = document.getElementById("profileMenu");
        if (profileMenu) {
            profileMenu.classList.remove("active");
        }

        // Contact page-ku navigate panrom
        window.location.href = "contact.html";
    });
}
function StayUpdate() {
    const stayUpdateEmail = document.getElementById("footerEmail");
    const stayUpdateEmailValue = stayUpdateEmail.value.trim();
    const stayUpdateEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errormsg = document.getElementById("footeremailError");
    const subscribe = document.getElementById("Subscribe");
    const emailcard = document.querySelector(".footer-email-box")

    if (subscribe.textContent.trim() === "Unsubscribed") {
        subscribe.innerHTML = `Subscribe <span>→</span>`;
        stayUpdateEmail.value = ""
        errormsg.style.display = "none"
        emailcard.style.display = "flex"

        return;
    }

    if (stayUpdateEmailValue === "") {
        alert("Please Fill the Email")
        return;
    }
    else if (!stayUpdateEmailPattern.test(stayUpdateEmailValue)) {
        errormsg.style.display = "block"
        return;
    }
    else {
        subscribe.textContent = "Unsubscribed"
        emailcard.style.display = "none"
    }


}

