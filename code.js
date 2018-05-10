"use strict";
// "this is a test"



// // Counter
// var itemCount = 0;
// $('.add').click(function (){
//   itemCount ++;
// console.log(itemCount);
// });

// Checkout Button


$(document).ready(function(){
  // class Sandwich {
  //   constructor(name, price) {
  //     this.name =  name;
  //     this.price = price;
  //   }
  // }
  // class Potions {
  //   constructor(name, price) {
  //     this.name =  name;
  //     this.price = price;
  //   }
  // }
  // class Sides {
  //   constructor(name, price) {
  //     this.name =  name;
  //     this.price = price;
  //   }
  // }

  //fuzzy logic for total

let total = 0;
// let x = 3.49;
// total += x;
// x = 5.00;
// total += x;
//
// let tax = 0.06;
// total = item.price * tax

let counter = 0;
//List of sandwich items as objects
const samList =  [
  {
    Name: "BLT",
    Price: 4,
    Id: counter
  },

  {
    Name: "PBJ",
    Price: 5,
    Id: counter
  },

  {
    Name: "Grilled Cheese",
    Price: 3,
    Id: counter
  }
];

// When we click on anything within the document, run this function
$(document).click((e) => {
  // If whatever we clicked on has a class of delete...
  if ($(e.target).hasClass("delete")) {
    // Loop through the array named foodList. The item parameter represents each element in the array...
    // the index parameter represents the index of the item
    samList.forEach((item, index) => {
      // If the element we clicked on has a parent element with an item-number attribute that matches the item's Id property...
      if (Number($(e.target).parent().attr("item-number")) === item.Id) {
        // Splice it from the array
        samList.splice(index, 1);
      }
    });
  }
  // Call the display function to display a new list
  display();
});

// const drinkList = [
//   {
//     Name: "Coke"
//     Price: 2
//   },
//
//   {
//     Name: "Water"
//   }
// ]
//function to display items in the DOM
function display () {
  samList.forEach((index) => {
    const item = $("<div>");
    item.attr("item-number", `${index.Id}`);
    item.html(`
      <li>Name: ${index.Name}</li>
      <li>Price: ${index.Price}</li>
      <button type="button" class="add">Add</button>
      <button type="button" class="delete">Delete Item</button>
    `);
    item.attr("name", `${index.Name}`);
    item.attr("price", `${index.Price}`);
    $(".swcards").append(item);
  })
};
//We call the function to display the items
display();

let cart = [];

//Add to cart section, takes name and price attributes and stores them in the cart

  $(".add").on("click", (event) => {
    cart += $(event.target).parent().attr("name");
    cart += Number($(event.target).parent().attr("price"));
    console.log(cart);
      // show form
      // total += item;

    // console.log(event.target.parentNode.attributes["0"]);
    // console.log(event.target.parentNode.attributes["1"]);
    // console.log($(event.target).parent().attr("price"));
    // console.log(total += Number($(event.target).parent().attr("price")));
  });
//   display();
// }

// addToCart();


  // Functionality for CheckoutPopup
  $("#checkout").click(function(){
      $(".checkoutNone").toggleClass("checkoutPopup");
  });
  // Functionality for Pay with Cash
  $("#btnCashNone").click(function(){
    $(".cashNone").toggleClass("cashShow");
  });
  //Functionality for Pay with CC
  $("#btnCreditNone").click(function(){
    $(".creditNone").toggleClass("creditShow");
  });


});
