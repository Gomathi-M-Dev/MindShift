
function openCheckout() {
    const checkout = document.querySelector(".checkout-drawer");
    checkout.classList.add("active")
    showCheckout();

}
function closeCheckout() {
    const checkoutDrawer = document.querySelector(".checkout-drawer");

    checkoutDrawer.classList.remove("active");
}

function showCheckout() {

    const checkoutMode = localStorage.getItem("checkoutMode");

    const cart = checkoutMode === "buyNow"
        ? [JSON.parse(localStorage.getItem("buyNowBook"))].filter(Boolean)
        : getUserData("cart"); const checkoutItems = document.getElementById("checkout-items");

    checkoutItems.innerHTML = "";

    cart.forEach(book => {
        const div = document.createElement("div");

        div.classList.add("checkout-item");

        div.innerHTML = `
            <img src="./img/${book.image}">

            <div class="checkout-item-info">
                <h4>${book.title}</h4>
                ${checkoutMode === "buyNow"
                ? `
               <div class="quantity-controls">
                <button type="button" class="qty-minus">−</button>
                <span class="qty-value">${book.quantity}</span>
                <button type="button" class="qty-plus">+</button>
               </div>
                `
                : `<p>Quantity: ${book.quantity}</p>`
            }                <p class="book-price" data-price="${book.price}">${book.price}</p>
            </div>
        `;

        checkoutItems.appendChild(div);
    });
    if (checkoutMode === "buyNow") {
        document.querySelectorAll(".qty-plus").forEach(button => {
            button.addEventListener("click", function () {
                const quantityPlus = this.parentElement.querySelector(".qty-value");

                let quantity = Number(quantityPlus.textContent);
                quantity++;

                quantityPlus.textContent = quantity;

                const buyNowBook = JSON.parse(localStorage.getItem("buyNowBook"));
                buyNowBook.quantity = quantity;

                localStorage.setItem("buyNowBook", JSON.stringify(buyNowBook));

                const bookPrice = this.closest(".checkout-item")
                    .querySelector(".book-price");

                const originalPrice = Number(
                    bookPrice.dataset.price.replace(/[^\d.]/g, "")
                );

                bookPrice.textContent = "₹" + (originalPrice * quantity).toLocaleString("en-IN");

                updateCheckoutTotal();
            });
        });
        document.querySelectorAll(".qty-minus").forEach(button => {
            button.addEventListener("click", function () {
                const quantityMinus = this.parentElement.querySelector(".qty-value");
                let quantity = Number(quantityMinus.textContent);

                if (quantity > 1) {
                    quantity--;
                    quantityMinus.textContent = quantity;

                    const buyNowBook = JSON.parse(
                        localStorage.getItem("buyNowBook")
                    );

                    buyNowBook.quantity = quantity;

                    localStorage.setItem(
                        "buyNowBook",
                        JSON.stringify(buyNowBook)
                    );

                    const bookPrice = this.closest(".checkout-item")
                        .querySelector(".book-price");

                    const originalPrice = Number(
                        bookPrice.dataset.price
                            .replace("₹", "")
                            .replace(",", "")
                            .trim()
                    );

                    bookPrice.textContent =
                        "₹" + (originalPrice * quantity).toLocaleString("en-IN");
                    updateCheckoutTotal();
                }
            });
        });
    }
    let total = 0;

    cart.forEach(book => {
        const price = Number(book.price.replace("₹", "").replace(",", ""));
        total += price * book.quantity;
    });

    document.getElementById("checkout-total").textContent =
        "₹" + total.toLocaleString("en-IN");

    document.querySelector(".online-options").style.display = "none";
    document.querySelector(".upi-box").style.display = "none";
    document.querySelector(".card-box").style.display = "none";
    document.querySelector(".netbanking-box").style.display = "none"
    document.querySelector('input[value="online"]').onclick = function () {
        document.querySelector(".online-options").style.display = "flex";
    };
    document.querySelector('input[value="upi"]').onclick = function () {
        document.querySelector(".upi-box").style.display = "block";
        document.querySelector(".card-box").style.display = "none"
        document.querySelector(".netbanking-box").style.display = "none"
    };
    document.querySelector('input[value="card"]').onclick = function () {
        document.querySelector(".upi-box").style.display = "none";
        document.querySelector(".netbanking-box").style.display = "none"
        document.querySelector(".card-box").style.display = "block";
    }
    document.querySelector('input[value="netbanking"]').onclick = function () {
        document.querySelector(".upi-box").style.display = "none";
        document.querySelector(".card-box").style.display = "none";
        document.querySelector(".netbanking-box").style.display = "block";
    }
    document.querySelector('input[value="cod"]').onclick = function () {
        document.querySelector(".online-options").style.display = "none";
        document.querySelector(".upi-box").style.display = "none";
    };
    document.querySelector(".upi-pay-btn").onclick = function () {
        const upiId = document.getElementById("upiId").value.trim();

        if (upiId === "") {
            alert("Please enter UPI ID");
            return;
        }

        placeOrder("payment");
    };
    document.querySelector(".card-pay-btn").onclick = function () {
        const cardInput = document.querySelector(".card-input").value.trim();

        if (cardInput === "") {
            alert("Please fill all field");
            return
        }

        placeOrder("payment");
    }
    document.querySelector(".netbanking-pay-btn").onclick = function () {
        const bank = document.querySelector("#bank").value;

        if (bank === "") {
            alert("Please select a bank");
            return;
        }

        placeOrder("payment");
    };

}

function updateCheckoutTotal() {
    const checkoutMode = localStorage.getItem("checkoutMode");

    const cart = checkoutMode === "buyNow"
        ? [JSON.parse(localStorage.getItem("buyNowBook"))].filter(Boolean)
        : getUserData("cart");
    let total = 0;

    cart.forEach(book => {
        const price = Number(
            String(book.price).replace(/[^\d.]/g, "")
        );

        total += price * book.quantity;
    });

    document.getElementById("checkout-total").textContent =
        "₹" + total.toLocaleString("en-IN");
}

function showOrderAnimation(type = "order") {
    const overlay = document.getElementById("orderAnimation");
    const checkoutDrawer = document.querySelector(".checkout-drawer");

    if (checkoutDrawer) {
        checkoutDrawer.style.display = "none";
    }

    overlay.classList.remove("payment-state");
    document.getElementById("successCircle").classList.remove("payment-success");

    overlay.classList.add("show");

    if (type === "payment") {
        overlay.classList.add("payment-state");
        document.getElementById("successCircle").classList.add("payment-success");

        document.getElementById("successTitle").textContent =
            "Payment Successfully Received!";
        document.getElementById("successMessage").textContent =
            "Your payment was successful.";

        setTimeout(() => {
            overlay.classList.remove("payment-state");
            document.getElementById("successCircle").classList.remove("payment-success");

            document.getElementById("successTitle").textContent = "Order Placed!";
            document.getElementById("successMessage").textContent =
                "Your order has been placed successfully.";

            finishOrderAnimation();
        }, 2000);
    } else {
        document.getElementById("successTitle").textContent = "Order Placed!";
        document.getElementById("successMessage").textContent =
            "Your order has been placed successfully.";

        finishOrderAnimation();
    }
}

function finishOrderAnimation() {
    setTimeout(() => {
        const overlay = document.getElementById("orderAnimation");

        // Hide success animation
        overlay.classList.remove("show");

        // Open Your Orders automatically
        openOrders();

    }, 2000);
}
function placeOrder(animationType = "order") {

    const form = document.querySelector(".checkout-content");

    const requiredFields = form.querySelectorAll("input[required]");

    for (let field of requiredFields) {

        if (!field.value.trim()) {
            alert("Please fill all required fields");
            field.focus();
            return;
        }
    }
    const FullName = fullname.value.trim()
    if (!namePattern.test(FullName)) {
        alert("Please Enter Valid Name")
        return
    }
    const phoneNumber = number.value.trim()
    if (!numberPattern.test(phoneNumber)) {
        alert("Please Enter a Valid Mobile Number")
        return
    }
    const DoorNumber = house.value.trim()
    if (!housePattern.test(DoorNumber)) {
        alert("Please Enter Valid Door Number")
        return
    }
    const Street = street.value.trim()
    if (!streetPattern.test(Street)) {
        alert("Please Enter Valid Street Name")
        return
    }
    const Area = area.value.trim()
    if (!areaPattern.test(Area)) {
        alert("Please Enter Valid Area Name")
        return
    }
    const City = city.value.trim()
    if (!cityPattern.test(City)) {
        alert("Please Enter Valid City Name")
        return
    }
    const State = state.value.trim()
    if (!statePattern.test(State)) {
        alert("Please Enter Valid State Name")
        return
    }

    const Pincode = pincode.value.trim()
    if (!pincodePattern.test(Pincode)) {
        alert("Please Enter Valid Pincode")
        return
    }
    const online = document.querySelector('input[name="payment"]:checked');
    const onlineType = document.querySelector('input[name="onlineType"]:checked')
    const upiId = document.getElementById("upiId");
    const cardInput = document.querySelectorAll(".card-input");
    const bank = document.getElementById("bank");

    if (!online) {
        alert("Please select payment method")
        return;
    }
    if (online.value === "online") {
        if (!onlineType) {
            alert("Please select payment method")
            return;
        }
        if (onlineType.value === "upi") {
            const upiValue = upiId.value.trim()
            const upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/;
            if (upiValue === "" || !upiPattern.test(upiValue)) {
                alert("Please Enter UPI Id")
                return;
            }
        }
        if (onlineType.value === "card") {
            const cardNumberPattern = /^(?:\d{4} ){3}\d{4}$|^\d{16}$/;
            const cardHolderPattern = /^[a-zA-Z\s.]{2,}$/;
            const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
            const cvvPattern = /^\d{3,4}$/;

            const patterns = [
                cardNumberPattern,
                cardHolderPattern,
                expiryDatePattern,
                cvvPattern
            ];

            for (let i = 0; i < cardInput.length; i++) {
                const cardValue = cardInput[i].value.trim();

                if (
                    cardValue === "" ||
                    !patterns[i].test(cardValue)
                ) {
                    alert("Please Enter Proper Details");
                    return;
                }
            }
        }
        if (onlineType.value === "netbanking") {
            const bankValue = bank.value.trim()
            if (bankValue === "") {
                alert("Please Select Your bank")
            }
        }
    }
    const checkoutMode = localStorage.getItem("checkoutMode");

    const cart = checkoutMode === "buyNow"
        ? [JSON.parse(localStorage.getItem("buyNowBook"))].filter(Boolean)
        : getUserData("cart");

    let orders = getUserData("orders");

    const orderDate = new Date().toISOString();

    orders.push(
        ...cart.map(item => ({
            ...item,
            orderId: crypto.randomUUID(),
            orderDate,
            status: "Order Placed"
        }))
    );

    saveUserData("orders", orders);

    // Buy Now-na cart-a clear panna vendam, regular cart-na clear panrom
    if (checkoutMode !== "buyNow") {
        saveUserData("cart", []);
    }

    localStorage.removeItem("buyNowBook");
    localStorage.removeItem("checkoutMode");

    // Header counts-um cart UI-um instant-ah update aaganum
    if (typeof updateCartCount === "function") updateCartCount();
    if (typeof updateOrdersCount === "function") updateOrdersCount();
    if (typeof showCart === "function") showCart();

    showOrderAnimation(animationType);
}
const fullname = document.getElementById("fullname");
const number = document.getElementById("phone");
const house = document.getElementById("house");
const street = document.getElementById("street");
const area = document.getElementById("area");
const city = document.getElementById("city");
const state = document.getElementById("state");
const pincode = document.getElementById("pincode");
const nameError = document.getElementById("nameError");
const numberError = document.getElementById("numberError");
const houseError = document.getElementById("houseError");
const streetError = document.getElementById("streetError");
const areaError = document.getElementById("areaError");
const cityError = document.getElementById("cityError");

const namePattern = /^[a-zA-Z\s\.]{2,}$/;
const numberPattern = /^\d{10}$/;
const housePattern = /^\d{1,}$/;
const streetPattern = /^[a-zA-Z0-9\s]+$/;
const areaPattern = /^[a-zA-Z\s]{2,}$/;
const cityPattern = /^[a-zA-Z\s]{2,}$/;
const statePattern = /^[a-zA-Z\s]{2,}$/;
const pincodePattern = /^\d{6}$/;



fullname.addEventListener("input", function () {
    const FullName = fullname.value.trim()
    if (!namePattern.test(FullName)) {
        nameError.style.display = "block"
        return
    }
    else {
        nameError.style.display = "none"
    }
});
number.addEventListener("input", function () {
    const phoneNumber = number.value.trim()
    if (!numberPattern.test(phoneNumber)) {
        numberError.style.display = "block"
        return
    }
    else {
        numberError.style.display = "none"
    }
});

house.addEventListener("input", function () {
    const DoorNumber = house.value.trim()
    if (!housePattern.test(DoorNumber)) {
        houseError.style.display = "block"
        return
    }
    else {
        houseError.style.display = "none"
    }
})
street.addEventListener("input", function () {
    const Street = street.value.trim()
    if (!streetPattern.test(Street)) {
        streetError.style.display = "block"
        return
    }
    else {
        streetError.style.display = "none"
    }
})
area.addEventListener("input", function () {
    const Area = area.value.trim()
    if (!areaPattern.test(Area)) {
        areaError.style.display = "block"
        return
    }
    else {
        areaError.style.display = "none"
    }
})

city.addEventListener("input", function () {
    const City = city.value.trim()
    if (!cityPattern.test(City)) {
        cityError.style.display = "block"
    }
    else {
        cityError.style.display = "none"
    }
})
state.addEventListener("input", function () {
    const State = state.value.trim()
    if (!statePattern.test(State)) {
        stateError.style.display = "block"
    }
    else {
        stateError.style.display = "none"
    }
})

pincode.addEventListener("input", function () {
    const Pincode = pincode.value.trim()
    if (!pincodePattern.test(Pincode)) {
        pincodeError.style.display = "block"
    }
    else {
        pincodeError.style.display = "none"
    }
})


const upi = document.getElementById("upiId");
const cardNumber = document.getElementById("card-number");
const cardHolder = document.getElementById("card-holder");
const expiryDate = document.getElementById("expiry-date");
const cvv = document.getElementById("cvv");

const upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/;
upi.addEventListener("input", function () {
    const upiContainer = upi.value.trim()
    if (!upiPattern.test(upiContainer)) {
        upiError.style.display = "block"
    }
    else {
        upiError.style.display = "none"
    }

});

const cardNumberPattern = /^(?:\d{4} ){3}\d{4}$|^\d{16}$/;
cardNumber.addEventListener("input", function () {
    const cardNumberContainer = cardNumber.value.trim()
    if (!cardNumberPattern.test(cardNumberContainer)) {
        cardNumberError.style.display = "block"
    }
    else {
        cardNumberError.style.display = "none"
    }

});

const cardHolderPattern = /^[a-zA-Z\s\.]{2,}$/;
cardHolder.addEventListener("input", function () {
    const cardHolderContainer = cardHolder.value.trim()
    if (!cardHolderPattern.test(cardHolderContainer)) {
        cardHolderError.style.display = "block"
    }
    else {
        cardHolderError.style.display = "none"
    }

});

const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
expiryDate.addEventListener("input", function () {
    const expiryDateContainer = expiryDate.value.trim()
    if (!expiryDatePattern.test(expiryDateContainer)) {
        expiryDateError.style.display = "block"
    }
    else {
        expiryDateError.style.display = "none"
    }

});

const cvvPattern = /^\d{3,4}$/;
cvv.addEventListener("input", function () {
    const cvvContainer = cvv.value.trim()
    if (!cvvPattern.test(cvvContainer)) {
        cvvError.style.display = "block"
    }
    else {
        cvvError.style.display = "none"
    }

})

