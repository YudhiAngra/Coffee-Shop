function calculateTotal() {
    const espressoQty = parseInt(document.getElementById('espressoQty').value) || 0;
    const cappuccinoQty = parseInt(document.getElementById('cappuccinoQty').value) || 0;
    const latteQty = parseInt(document.getElementById('latteQty').value) || 0;
    const mochaQty = parseInt(document.getElementById('mochaQty').value) || 0;
    const frappeQty = parseInt(document.getElementById('frappeQty').value) || 0;

    const total = (espressoQty * 165) + (cappuccinoQty * 183) + (latteQty * 137) + (mochaQty * 171) + (frappeQty * 217);

    document.getElementById('total').value = total;
}

function clearBill() {
    document.getElementById('espressoQty').value = 0;
    document.getElementById('cappuccinoQty').value = 0;
    document.getElementById('latteQty').value = 0;
    document.getElementById('mochaQty').value = 0;
    document.getElementById('frappeQty').value = 0;
    document.getElementById('total').value = 0;
}

function placeOrder() {
    const espressoQty = parseInt(document.getElementById('espressoQty').value) || 0;
    const cappuccinoQty = parseInt(document.getElementById('cappuccinoQty').value) || 0;
    const latteQty = parseInt(document.getElementById('latteQty').value) || 0;
    const mochaQty = parseInt(document.getElementById('mochaQty').value) || 0;
    const frappeQty = parseInt(document.getElementById('frappeQty').value) || 0;

    const items = [
        { name: "Espresso", qty: espressoQty, price: 165 },
        { name: "Cappuccino", qty: cappuccinoQty, price: 183 },
        { name: "Caffe Latte", qty: latteQty, price: 137 },
        { name: "Caffe Mocha", qty: mochaQty, price: 171 },
        { name: "Frappe", qty: frappeQty, price: 217 }
    ];

    const total = (espressoQty * 165) + (cappuccinoQty * 183) + (latteQty * 137) + (mochaQty * 171) + (frappeQty * 217);

    if (total === 0) {
        alert("Your cart is empty. Please add some items!");
        return;
    }

    let summary = "";
    items.forEach(item => {
        if (item.qty > 0) {
            summary += `<p><strong>${item.name}</strong> - ${item.qty} x ₹${item.price} = ₹${item.qty * item.price}</p>`;
        }
    });
    summary += `<hr><h3>Total: ₹${total}</h3>`;

    document.getElementById('orderDetails').innerHTML = summary;
    document.getElementById('orderModal').style.display = "block";
}

function closeModal() {
    document.getElementById('orderModal').style.display = "none";
}
