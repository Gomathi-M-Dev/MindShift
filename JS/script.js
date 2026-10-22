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
    ["Pataliputra History", "₹310", "pataliputra.jpg", "History", "Hindi", "Dr. Manoj Kumar", false],
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
    ["The Psychology of Money", "₹399", "POM.jpg", "Finance", "English", "Morgan Housel", true],
    ["The ONE Thing", "₹350", "The One Thing.jpg", "Self", "English", "Gary Keller", true]
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
                    window.location.href = `book.html?title=${encodeURIComponent(book[0])}&price=${book[1]}&img=${book[2]}&category=${book[3]}`;
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

const container = document.querySelector(".image");

let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
function showBooks(list) {
    if (!container) {
        return;
    }

    container.innerHTML = "";

    list.forEach(book => {
        const [title, price, img, category, language, author] = book;

        // 1. Main book card div create panrom
        const div = document.createElement("div");
        div.classList.add("book");

        // 2. Image Container create panrom
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");

        // 3. Image-um SVG-um onna innerHTML moolama safe-ah podrom (No namespace errors!)
        imgContainer.innerHTML = `
            <img src="./img/${img}" class="img" width="160" height="200">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart preview-icon"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>        `;
        const titleSpan = document.createElement("span");
        titleSpan.textContent = title;

        const priceSpan = document.createElement("span");
        priceSpan.textContent = price;

        div.appendChild(imgContainer);
        div.appendChild(titleSpan);
        div.appendChild(priceSpan);

        // 6. Heart icon click event for wishlist toggle
        const previewIcon = imgContainer.querySelector(".preview-icon");


        // Book title identify panna use aagum
        previewIcon.dataset.title = title;

        // Current wishlist check
        let currentWishlist = getUserData("wishlist");

        const isAlreadyLiked = currentWishlist.some(item => {
            const itemTitle = typeof item === "string"
                ? item
                : Array.isArray(item)
                    ? item[0]
                    : item.title;

            return itemTitle &&
                itemTitle.trim().toLowerCase() === title.trim().toLowerCase();
        });

        previewIcon.classList.toggle("active", isAlreadyLiked);
        previewIcon.onclick = (e) => {
            e.stopPropagation();

            // Login check
            if (localStorage.getItem("isLoggedIn") !== "true") {
                if (typeof openLogin === "function") {
                    openLogin();
                } else {
                    alert("Please login to add books to your wishlist.");
                }
                return;
            }

            let savedWishlist = getUserData("wishlist");

            const index = savedWishlist.findIndex(
                item => item[0] === title
            );

            if (index === -1) {
                savedWishlist.push(book);
            } else {
                savedWishlist.splice(index, 1);
            }

            saveUserData("wishlist", savedWishlist);
            wishlist = savedWishlist;

            previewIcon.classList.toggle("active", index === -1);

            updateWishlistCount();

            if (typeof showWishlist === "function") {
                showWishlist(savedWishlist);
            }
        };
        div.onclick = () => {
            window.location.href =
                `book.html?title=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}&img=${encodeURIComponent(img)}&category=${encodeURIComponent(category)}&language=${encodeURIComponent(language)}&author=${encodeURIComponent(author)}`;
        };
        // 7. Main container-kulla book card-ah add panrom
        container.appendChild(div);
    });
}
if (container) {
    showBooks(books);
}
const wishlistbook = document.getElementById("wishlist")
if (wishlistbook) {
    wishlistbook.onclick = () => {
        window.location.href = "wishlist.html";
    };
}
function updateWishlistCount() {
    const wishlist = getUserData("wishlist");
    const countElement = document.getElementById("wishlistCount");

    if (!countElement) return;

    countElement.textContent = wishlist.length;
    countElement.style.display = wishlist.length > 0 ? "flex" : "none";
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
// Page load aagum pothu "All books" default-ah active-ah irukanum
document.addEventListener("DOMContentLoaded", () => {
    updateHeaderCounts();

    // Default-ah First category ("All books") active-ah set panrom
    const allBooksLink = document.querySelector('#categories .dropdown-content .dd');
    if (allBooksLink) {
        allBooksLink.classList.add("active");
    }
});

let selectedCategory = "";
let selectedLanguage = "";
let selectedAuthor = "";
let selectedPriceRange = "";
let selectedPopularBook = "";

function applyFilters() {
    let filteredBooks = books.filter(book => {
        const categoryMatch =
            !selectedCategory ||
            selectedCategory === "All books" ||
            book[3].toLowerCase() === selectedCategory.toLowerCase();

        const languageMatch =
            !selectedLanguage ||
            book[4].toLowerCase() === selectedLanguage.toLowerCase();

        const authorMatch =
            !selectedAuthor ||
            book[5].toLowerCase() === selectedAuthor.toLowerCase();

        const popularMatch =
            !selectedPopularBook ||
            book[0].toLowerCase().includes(selectedPopularBook.toLowerCase());

        const price = Number(
            String(book[1]).replace(/[^\d.]/g, "")
        );

        let priceMatch = true;

        if (selectedPriceRange === "Under ₹100") {
            priceMatch = price < 100;
        } else if (selectedPriceRange === "₹100 – ₹200") {
            priceMatch = price >= 100 && price <= 200;
        } else if (selectedPriceRange === "₹200 – ₹300") {
            priceMatch = price >= 200 && price <= 300;
        } else if (selectedPriceRange === "₹300 – ₹500") {
            priceMatch = price >= 300 && price <= 500;
        } else if (selectedPriceRange === "Above ₹500") {
            priceMatch = price > 500;
        }

        return categoryMatch &&
            languageMatch &&
            authorMatch &&
            popularMatch &&
            priceMatch;
    });

    if (filteredBooks.length === 0) {
        container.innerHTML = "<h3>No books found!</h3>";
        return;
    }

    showBooks(filteredBooks);
}

// Helper function to handle active state per section
function setActiveClass(element, selector) {
    document.querySelectorAll(selector).forEach(link => {
        link.classList.remove("active");
    });
    element.classList.add("active");
}

// Categories Filter
document.querySelectorAll("#categories .dd").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        setActiveClass(this, "#categories .dd");

        const category = this.textContent.trim();

        if (category.toLowerCase() === "all books") {
            selectedCategory = "";
            selectedLanguage = "";
            selectedAuthor = "";
            selectedPriceRange = "";
            selectedPopularBook = "";

            // Active class reset
            document.querySelectorAll(".menu .dd")
                .forEach(item => item.classList.remove("active"));

            showBooks(books);
            return;
        }

        selectedCategory = category;
        applyFilters();
    });
});


// Languages Filter
const languageLinks = document.querySelectorAll("#Languages .dd");

languageLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        setActiveClass(this, "#Languages .dd");

        selectedLanguage = this.textContent.trim();
        applyFilters();
    });
});


// Authors Filter
const authorLinks = document.querySelectorAll("#authors .dd");

authorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        setActiveClass(this, "#authors .dd");

        selectedAuthor = this.textContent.trim();
        applyFilters();
    });
});


// Popular Filter
const popularLinks = document.querySelectorAll("#populars .dd");

popularLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        setActiveClass(this, "#populars .dd");

        selectedCategory = "";
        selectedLanguage = "";
        selectedAuthor = "";
        selectedPriceRange = "";

        selectedPopularBook = this.textContent.trim();
        applyFilters();
    });
});


// Price Filter
const priceLinks = document.querySelectorAll("#prices .dd");

priceLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        setActiveClass(this, "#prices .dd");

        selectedPriceRange = this.textContent.trim();
        applyFilters();
    });
});
const stayUpdateEmail = document.getElementById("footerEmail");
const subscribe = document.getElementById("Subscribe");
const errormsg = document.getElementById("footeremailError");


const stayUpdateEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

stayUpdateEmail.addEventListener("input", function () {
    const stayUpdateEmailValue = stayUpdateEmail.value.trim();
    if (!stayUpdateEmailPattern.test(stayUpdateEmailValue)) {
        errormsg.style.display = "block"
        return;
    }
    else {
        errormsg.style.display = "none"
    }

});

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

// Home page-la irukara heart icons click panrappo wishlist-la update aagurathuku
document.addEventListener("click", function (e) {
    const heartIcon = e.target.closest(".preview-icon");
    if (!heartIcon) return;

    // Login check
    if (localStorage.getItem("isLoggedIn") !== "true") {
        if (typeof openLogin === "function") openLogin();
        return;
    }

    const bookCard = heartIcon.closest(".book");
    if (!bookCard) return;

    // Book title-ah book card-la irunthu edukkrom
    const titleElement = bookCard.querySelector(".related-title, span");
    if (!titleElement) return;
    const bookTitle = titleElement.textContent.trim();

    // Price and image edukrom
    const priceElement = bookCard.querySelector(".related-price, .book-price");
    const bookPrice = priceElement ? priceElement.textContent.trim() : "₹0";

    const imgElement = bookCard.querySelector("img");
    const bookImg = imgElement ? imgElement.getAttribute("src").replace("./img/", "") : "";

    let savedWishlist = getUserData("wishlist");

    const index = savedWishlist.findIndex(book => {
        const itemTitle = typeof book === 'string' ? book : (Array.isArray(book) ? book[0] : book.title);
        return itemTitle === bookTitle;
    });

    if (index !== -1) {
        // Already iruntha remove panrom
        savedWishlist.splice(index, 1);
        heartIcon.classList.remove("active");
    } else {
        // Illati add panrom
        savedWishlist.push({
            title: bookTitle,
            price: bookPrice,
            image: bookImg
        });
        heartIcon.classList.add("active");
    }

    // User-specific-a save panrom
    saveUserData("wishlist", savedWishlist);

    if (typeof updateHeaderCounts === "function") {
        updateHeaderCounts();
    }
});

function toggleMobileFilter() {
    const menu = document.querySelector(".menu");

    if (!menu) {
        console.error("Filter menu not found!");
        return;
    }

    menu.classList.toggle("mobile-filter-open");
}

const loginCloseicon = document.querySelector(".profile-close-btn");
const profilemenu = document.getElementById("profileMenu");

if (loginCloseicon && profilemenu) {
    loginCloseicon.addEventListener("click", function () {
        profilemenu.style.display = "none";
    });
}
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