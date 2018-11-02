
// Business Logic for Pizzas ---------
function Pizza(firstName, size) {
  this.firstName = firstName,
    this.size = size,
    this.toppings = new Array();
}

Pizza.prototype.addToppings = function (topping) {
  this.toppings.push(topping);
}

Pizza.prototype.price = function () {
  var toppingQuant = this.toppings.length;
  var toppingPrice = toppingQuant * 1.99;
  var sizePrice = 0;
  if (this.size === "small") {
    sizePrice = 5.99;
  }
  else if (this.size === "medium") {
    sizePrice = 7.99;
  }
  else {
    sizePrice = 9.99;
  }
  return sizePrice + toppingPrice;
}

function arrayToSentence(array, oxfordComma) {
  var localArray=array.slice();
  if (localArray.length > 1) {
    var lastWord = " and " + localArray.pop();
    if (oxfordComma && localArray.length > 1) {
      lastWord = "," + lastWord;
    }
  } else {
    var lastWord = "";
  }
  return localArray.join(", ") + lastWord;
}

// User Interface Logic ---------

var newPizza = new Pizza();

function showPizza(pizza) {
  $("#show-pizza").show();
  var toppingsString = arrayToSentence(pizza.toppings, false)
  $("#pizza-text").html(pizza.firstName + ", your " + pizza.size + " pizza with " + toppingsString + " will cost $" + pizza.price() + ". Thank you for your order!");
}

$(document).ready(function () {
  $("form#new-pizza").submit(function (event) {
    event.preventDefault();
    newPizza.firstName = $("input#new-first-name").val();
    newPizza.size = $("input[type=radio]:checked").val();
    $("input:checkbox[name=toppings]:checked").each(function () {
      var inputtedTopping = $(this).val();
      newPizza.addToppings(inputtedTopping);
    });
    showPizza(newPizza);
  });
})
