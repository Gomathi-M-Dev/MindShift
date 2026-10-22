
function openOrders() {
    // Login status check
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
        openLogin();
        return;
    }

    // Close Cart drawer
    const cartDrawer = document.querySelector(".cart-drawer");

    if (cartDrawer) {
        cartDrawer.classList.remove("active");
    }

    // Close Checkout drawer
    const checkoutDrawer = document.querySelector(".checkout-drawer");

    if (checkoutDrawer) {
        checkoutDrawer.classList.remove("active");
        checkoutDrawer.style.display = "";
    }

    // Open Your Orders drawer
    const ordersDrawer = document.querySelector(".orders-drawer");

    if (ordersDrawer) {
        showOrders();
        ordersDrawer.classList.add("active");
    }
}
function closeOrders() {
    document.querySelector(".orders-drawer").classList.remove("active");
}

function showOrders() {
    const ordersList = document.getElementById("ordersList");

    // Global storage-ku badhila user-specific getUserData use panrom
    const orders = getUserData("orders");

    ordersList.innerHTML = "";

    if (orders.length === 0) {
        ordersList.innerHTML = `
        <div class="empty-orders">
            <img src="./Logo/Order.png" alt="No orders yet">
            <p>You haven't placed any orders yet.</p>
        </div>
    `;
        return;
    }

    orders.forEach(order => {
        const div = document.createElement("div");
        div.classList.add("order-item");

        const orderDate = new Date(order.orderDate);
        orderDate.setDate(orderDate.getDate() + 5);

        const deliveryDate = orderDate.toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short"
        });

        div.innerHTML = `
            <img src="./img/${order.image}" alt="${order.title}">
            <div class="order-info">
                <h3>${order.title}</h3>
                <p>Price: ${order.price}</p>
                <p>Quantity: ${order.quantity || 1}</p>
                <p class="order-status">
                    Status: ${order.status || "Order Placed"}
                </p>
                <p class="delivery-date">
                    Delivery Date: ${deliveryDate}
                </p>
                <button class="cancel-order-btn" onclick="cancelOrder('${order.orderId}')">Cancel Order</button>
            </div>
        `;

        ordersList.appendChild(div);
    });
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

updateOldOrders();

function cancelOrder(orderId) {
    if (!confirm("Do you want to cancel this order?")) {
        return;
    }

    let orders = getUserData("orders");

    orders = orders.filter(order => order.orderId !== orderId);

    saveUserData("orders", orders);

    showOrders();
    updateOrdersCount();

    alert("Order cancelled successfully!");
}