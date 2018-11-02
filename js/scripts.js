// // Business Logic for AddressBook ---------
// function AddressBook() {
//   this.contacts = [],
//   this.currentId = 0
// }

// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts.push(contact);
// }

// AddressBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// AddressBook.prototype.findContact = function(id) {
//   for (var i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         return this.contacts[i];
//       }
//     }
//   };
//   return false;
// }

// AddressBook.prototype.deleteContact = function(id) {
//   for (var i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         delete this.contacts[i];
//         return true;
//       }
//     }
//   };
//   return false;
// }

// Business Logic for Pizzas ---------
function Pizza(firstName, size) {
  this.firstName = firstName,
  this.size = size,
  this.toppings = new Array();
}

Pizza.prototype.addToppings = function(topping){
  this.toppings.push(topping);
}

Pizza.prototype.price = function() {
  var toppingQuant = this.toppings.length;
  var toppingPrice= toppingQuant*1.99;
  var sizePrice=0;
  if (this.size="S"){
    sizePrice=5.99;
  }
  else if (this.size="M"){
    sizePrice=7.99;
  }
  else {
    sizePrice=9.99;
  }
  return "Price: $" + (sizePrice+toppingPrice);
}


// User Interface Logic ---------
// var addressBook = new AddressBook();

// function displayContactDetails(addressBookToDisplay) {
//   var contactsList = $("ul#contacts");
//   var htmlForContactInfo = "";
//   addressBookToDisplay.contacts.forEach(function(contact) {
//     htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
//   });
//   contactsList.html(htmlForContactInfo);
// };

// function showContact(contactId) {
//   var contact = addressBook.findContact(contactId);
//   $("#show-contact").show();
//   $(".first-name").html(contact.firstName);
//   $(".last-name").html(contact.lastName);
//   $(".phone-number").html(contact.phoneNumber);
//   $(".email").html(contact.email);
//   $(".home-address").html(contact.address.homeAddress);
//   $(".work-address").html(contact.address.workAddress);

//   var buttons = $("#buttons");
//   buttons.empty();
//   buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
// }

// function attachContactListeners() {
//   $("ul#contacts").on("click", "li", function() {
//     showContact(this.id);
//   });

//   $("#buttons").on("click", ".deleteButton", function() {
//     addressBook.deleteContact(this.id);
//     $("#show-contact").hide();
//     displayContactDetails(addressBook);
//   });

// };
var newPizza = new Pizza();

$(document).ready(function() {
  // attachContactListeners();
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    newPizza.firstName = inputtedFirstName;
    var inputtedSize = $("input[type=radio]:checked").val();
    newPizza.size = inputtedSize;
    $("input:checkbox[name=toppings]:checked").each(function(){
      var inputtedTopping = $(this).val();
      newPizza.addToppings(inputtedTopping);
    });
  });
})

    // if (inputtedHomeAddress === ""){
    //   $("p").remove("#hAddress");
    // }
    // if (inputtedWorkAddress === ""){
    //   $("p").remove("#wAddress");
    // }


    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");
    // $("input#new-phone-number").val("");
    // $("input#new-email").val("");
    // $("input#new-home-address").val("");
    // $("input#new-work-address").val("");

    // var newAddress = new Address(inputtedHomeAddress, inputtedWorkAddress);
    // var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedEmail, newAddress);

    // addressBook.addContact(newContact);
    // displayContactDetails(addressBook);
