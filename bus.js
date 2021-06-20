function handleTicket(ticketClass, isIncrease) {
    const ticketClassCount = getInputValue(ticketClass);
    let ticketClassNewCount = ticketClassCount;
    if (isIncrease == true) {
        ticketClassNewCount = ticketClassCount + 1;
    } else if (isIncrease == false && ticketClassCount > 0) {
        ticketClassNewCount = ticketClassCount - 1;
    };
    document.getElementById(ticketClass + '_count').value = ticketClassNewCount;
    let ticketClassTotal = 0;
    if (ticketClass == 'fClass') {
        ticketClassTotal = ticketClassNewCount * 150;
        document.getElementById(ticketClass + '_price').innerText = 'First Class ($' + ticketClassTotal + ')';
    } else if (ticketClass == 'economy') {
        ticketClassTotal = ticketClassNewCount * 100;
        document.getElementById(ticketClass + '_price').innerText = 'Economy Class ($' + ticketClassTotal + ')';
    }
    calculateTotal();
};

function calculateTotal() {
    const fClassCount = getInputValue('fClass');
    const economyCount = getInputValue('economy');

    const totalPrice = fClassCount * 150 + economyCount * 100;
    document.getElementById('total_price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax_amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand_total_price').innerText = '$' + grandTotal;
}

function getInputValue(ticketClass) {
    console.log(ticketClass);
    const productInput = document.getElementById(ticketClass + '_count');
    const productCount = parseInt(productInput.value);
    return productCount;
}

function bookNow() {
    alert("Completly Book, Your Ticket ....!!!");
}