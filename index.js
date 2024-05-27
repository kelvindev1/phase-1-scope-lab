var customerName = "bob";

var bestCustomer;

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "its me";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "thats wrong";
}
