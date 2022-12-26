function calculateTip(percentage) {
    var bill = document.querySelector('.bill-amount').value;
    var persons = document.querySelector('.num-of-person').value;
    var tipAmount = (bill * percentage / 100) / persons;
    document.querySelector('.tip-holder').innerHTML = "tip:" + tipAmount.toFixed(2);
    document.querySelector('.total-amount-holder').innerHTML = "amount:" + (bill / persons + tipAmount).toFixed(2);
}