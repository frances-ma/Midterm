"use strict";

$(document).ready(function(){
let counter = 0;


const samList =  [
  { 
    Image: "https://i.imgur.com/dz4rZbI.jpg?1",
    Name: "BLT",
    Price: 4,
    Description: "Bacon, Lettuce, and Tomoato. Duh.",
    Category: "Sandwich"
  },

  {
    Image: "https://i.imgur.com/dz4rZbI.jpg?1",
    Name: "PBJ",
    Price: 5,
    Description: "Bacon, Lettuce, and Tomoato. Duh.",
    Category: "Sandwich"
  },

  {
    Image: "https://i.imgur.com/dz4rZbI.jpg?1",
    Name: "Grilled Cheese",
    Price: 3,
    Description: "Bacon, Lettuce, and Tomoato. Duh.",
    Category: "Sandwich"
  }
];
const sideList =  [
  { 
    Image: "https://i.imgur.com/dz4rZbI.jpg?1",
    Name: "Salad",
    Price: 4,
    Description: "Bacon, Lettuce, and Tomoato. Duh.",
    Category: "Sandwich"
  },

  {
    Image: "https://i.imgur.com/dz4rZbI.jpg?1",
    Name: "Grapes",
    Price: 5,
    Description: "Bacon, Lettuce, and Tomoato. Duh.",
    Category: "Sandwich"
  },

  {
    Image: "https://i.imgur.com/dz4rZbI.jpg?1",
    Name: "Drugs1",
    Price: 3,
    Description: "Bacon, Lettuce, and Tomoato. Duh.",
    Category: "Sandwich"
  }
];
const drinkList =  [
  { 
    Image: "https://i.imgur.com/dz4rZbI.jpg?1",
    Name: "Salad",
    Price: 4,
    Description: "Bacon, Lettuce, and Tomoato. Duh.",
    Category: "Sandwich"
  },

  {
    Image: "https://i.imgur.com/dz4rZbI.jpg?1",
    Name: "Grapes",
    Price: 5,
    Description: "Bacon, Lettuce, and Tomoato. Duh.",
    Category: "Sandwich"
  },

  {
    Image: "https://i.imgur.com/dz4rZbI.jpg?1",
    Name: "Drugs2",
    Price: 3,
    Description: "Bacon, Lettuce, and Tomoato. Duh.",
    Category: "Sandwich"
  }
];



  //**********************function to display Sandwich*********************
function displaySand () {
  samList.forEach((index) => {
    const item = $(`<div class="wich">`);
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
displaySand();

  //********************function to display Sides***************************
  function displaySide () {
    sideList.forEach((index) => {
      const item = $(`<div class="wich">`);
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
      $(".sicards").append(item);
    })
  };
//We call the function to display the items
displaySide();

  //********************function to display Sides***************************
  function displayDrink () {
    drinkList.forEach((index) => {
      const item = $(`<div class="wich">`);
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
      $(".drcards").append(item);
    })
  };
//We call the function to display the items
displayDrink();

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



  function displayReceipt () {
      const item = $(`<div class="checkoutPopup">`);
      item.html(`
      <p>Total Amount: ${total} </p>
      `);
      
      $(".drReceipt").append(item);
    };
//We call the function to display the items
  // displayReceipt();

  // Functionality for CheckoutPopup
  $("#checkout").click(function(){
      $(".checkoutNone").toggleClass("checkoutPopup");
      // function displayReceipt () {
      //   const item = $(`<div class="checkoutPopup">`);
      //   item.html(`
      //   <p>Total Amount: ${total} </p>
      //   `);
        
      //   $(".drReceipt").append(item);
      // };
      displayReceipt();
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
