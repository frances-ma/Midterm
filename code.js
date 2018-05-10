"use strict";

$(document).ready(function(){
let counter = 0;
// let image = new Image();
//     img.src = "images/coke.jpg"; 
//List of sandwich items as objects
const samList =  [
  { 
    Image: "images/coke.jpg",
    Name: "BLT",
    Price: 4,
    Description: "Bacon, Lettuce, and Tomoato. Duh.",
    Category: "Sandwich"
  },

  {
    Name: "PBJ",
    Price: 5,
    // Description
  },

  {
    Name: "Grilled Cheese",
    Price: 3,
    // Description
  }
];

// When we click on anything with the class of delete, run this function
  $(document.body).on("click", ".delete", (e) => {
    console.log("test");
      // Loop through the array named foodList. The item parameter represents each element in the array...
      // the index parameter represents the index of the item
      cart.forEach((item, index) => {
        console.log(item, index);
        console.log(cart);
        // If the element we clicked on has a parent element with an item-number attribute that matches the item's Id property...
        if (item.Name ===  $(e.target).parent().attr("name")) {
          // Splice it from the array
          cart.splice(index, 1);
        }
      });
     console.log(cart);
    });


  //function to display items in the DOM
function display () {
  samList.forEach((index) => {
    const item = $("<div>");
    item.html(`
      <img src = ${index.Image}>
      <li>Name: ${index.Name}</li>
      <li>Price: ${index.Price}</li>
      <li>Description: ${index.Description}</li>
      <li>Category: ${index.Category}</li>
      
      <button type="button" class="add">Add</button>
      <button type="button" class="delete">Delete Item</button>
    `);
    item.attr("image", `${index.Image}`);
    item.attr("name", `${index.Name}`);
    item.attr("price", `${index.Price}`);
    item.attr("description", `${index.Description}`);
    item.attr("description", `${index.Category}`);
    $(".swcards").append(item);
  })
};
//We call the function to display the items
display();

let cart = [];
let total =0;
let tax = 0.06;

//Add to cart section, takes name and price attributes and stores them in the cart

  $(".add").on("click", (event) => {
    cart.push({ Name: $(event.target).parent().attr("name"),
      Price: Number($(event.target).parent().attr("price"))
    }) 
    console.log(cart);
      // show form
    total += Number($(event.target).parent().attr("price"));
    console.log(total, (total*tax), total+(total*tax));

    // console.log(event.target.parentNode.attributes["0"]);
    // console.log(event.target.parentNode.attributes["1"]);
  });

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
