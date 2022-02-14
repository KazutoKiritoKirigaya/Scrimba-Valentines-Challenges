document.getElementById("btn").addEventListener("click", calculate);
let costEl = document.getElementById("cost-el");
let food = document.getElementById("food-select");
let transport = document.getElementById("transport-select");
let errorMessage = document.getElementById("error-message");

function calculate() {
    var foodInt = parseInt(food.options[food.selectedIndex].value);
    var transportInt = parseInt(
        transport.options[transport.selectedIndex].value
    );
    // Add error message if box is unchecked.
    if (foodInt == 0 || transportInt == 0) {
        errorMessage.innerHTML =
            "Error - please make sure all options are selected!";
    } else {
        // 1. Write the JavaScript to calculate the total cost of the selected options from the form.
        var cost = foodInt + transportInt;
        costEl.innerHTML = `$${cost}`; // 2. Display the total cost in the cost-el span.
        errorMessage.innerHTML = "";
    }
}
