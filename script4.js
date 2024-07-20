window.alert("Welcome to Usman's shop!");

var customerName = window.prompt("Please enter your name:");
var itemRequested = window.prompt("What item would you like to order?");
var numberOfItems;

while (true) {
    numberOfItems = parseInt(window.prompt("How many items would you like to order (1-99)?"), 10);
    if (numberOfItems >= 1 && numberOfItems <= 99) break;
    window.alert("Please enter a valid number of items between 1 and 99.");
}

var currentDate = new Date();
var arrivalDate = new Date(currentDate);
arrivalDate.setDate(currentDate.getDate() + 7);

var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedArrivalDate = arrivalDate.toLocaleDateString(undefined, options);

var greeting = (currentDate.getHours() < 12) ? "Good Morning" :
               (currentDate.getHours() < 18) ? "Good Afternoon" : "Good Evening";

document.getElementById("orderSummary").innerHTML = `
    <p>${greeting} ${customerName},</p>
    <p>Thank you for ordering ${numberOfItems} ${itemRequested}(s)!</p>
    <p>Your order will arrive on: ${formattedArrivalDate}</p>
`;