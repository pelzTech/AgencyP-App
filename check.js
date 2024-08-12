function order() {
    const selectedMeal = document.querySelector('input[name="meal"]:checked');
    if (selectedMeal) {
        const mealName = selectedMeal.value;
        const mealPrice = selectedMeal.getAttribute('data-price');
        localStorage.setItem('orderItem', mealName);
        localStorage.setItem('orderPrice', mealPrice);
        window.location.href = 'checkout.html';
    } else {
        alert('Please select a meal to order.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const checkoutItem = localStorage.getItem('orderItem');
    const checkoutPrice = localStorage.getItem('orderPrice');
    if (checkoutItem && checkoutPrice) {
        document.getElementById('checkout-item').innerText = `You have ordered: ${checkoutItem} - $${checkoutPrice}`;
    }

    document.getElementById('confirm-order').addEventListener('click', function () {
        alert('Order confirmed!');
        localStorage.removeItem('orderItem');
        localStorage.removeItem('orderPrice');
        window.location.href = 'index.html';
    });
});
