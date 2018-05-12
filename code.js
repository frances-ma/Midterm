"use strict";

$(document).ready(function(){
let counter = 0;


const samList =  [
  {
    Image: "https://i.imgur.com/dz4rZbI.jpg?1",
    Name: "Witch & Famous",
    Price: 4,
    Description: "French bread stuffed with cilantro, pork-belly, & pickled root veggies. Comes with a dollop of our delectable crème fraiche. Sure to cast a spell on your taste buds!",
    Category: "Sandwich"
  },

  {
    Image: "https://i.imgur.com/BY8F4CN.jpg",
    Name: "The Basic Witch",
    Price: 5,
    Description: "Classic plain-bagel sandwich filled to the brim with alfalfa sprouts, butter lettuce, and grilled tempeh. Topped with our signature roasted red pepper cream-cheese.",
    Category: "Sandwich"
  },

  {
    Image: "https://i.imgur.com/NOE64NS.jpg?1",
    Name: "If You’ve Got It, Haunt It",
    Price: 7,
    Description: "Brioche bun with prosciutto, sliced cucumbers, endive, and red-leaf lettuce. This sandwich is re-inventing the broom.",
    Category: "Sandwich"
  },

  {
    Image: "https://i.imgur.com/IOfdxm7.jpg",
    Name: "The Black-Cat Burger",
    Price: 6,
    Description: "Seeded bun with black bean patty, tomato, Bibb lettuce, and almond cheese. Is a burger a sandwich? Of course it is! This witchin’ vegan black-bean burger will leave you wanting more.",
    Category: "Sandwich"
  }


];
const sideList =  [
  {
    Image: "https://i.imgur.com/O1CWpp8.jpg?1",
    Name: "No Frills, Just Fright",
    Price: 3,
    Description: "Side salad with all the essentials! Lettuce, tomato, veggies, oil. Broom!",
    Category: "Side"
  },

  {
    Image: "https://i.imgur.com/Ne63gWv.jpg",
    Name: "Main Witch",
    Price: 2,
    Description: "Kettle chips made in-house, fried in avocado oil. Essential add-on.",
    Category: "Side"
  },

  {
    Image: "https://i.imgur.com/1lyCh3c.jpg?1",
    Name: "Creepin' It Real",
    Price: 4,
    Description: "Butternut squash and pumpkin soup, topped with goat cheese and pumpkin seeds. We like to keep the Fall vibes going year round.",
    Category: "Side"
  },

  {
    Image: "https://i.imgur.com/85GQhIB.jpg",
    Name: "Broomsticks",
    Price: 3,
    Description: "French-fries, but better. Comes with a side of habanero catsup.",
    Category: "Side"
  }



];
const drinkList =  [
  {
    Image: "https://i.imgur.com/4vayyKl.jpg?1",
    Name: "Acqua Panna",
    Price: 3,
    Description: "Still, natural mineral water from the heart of Tuscany, Italy.",
    Category: "Drink"
  },

  {
    Image: "https://i.imgur.com/Azc4xOu.jpg?1",
    Name: "Bubble-Bubble",
    Price: 3,
    Description: "Tired of lemonade? So are we. We add lime, mint, and bubbles to our house potion.",
    Category: "Drink"
  },

  {
    Image: "https://i.imgur.com/zi5N7rQ.jpg?1",
    Name: "Fentimans Rose Lemonade",
    Price: 3,
    Description: "Made with pure Rose oil from the world-famous Rose Valley in Kazanlak, Bulgaria.",
    Category: "Drink"
  },

  {
    Image: "https://i.imgur.com/Y5We1P7.jpg",
    Name: "Coca-Cola",
    Price: 2,
    Description: "A classic. Share a coke with yourself, you deserve it.",
    Category: "Drink"
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
      <button type="button" class="delete">Delete</button>
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
        <button type="button" class="delete">Delete</button>
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

  //********************function to display Drinks***************************
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
        <button type="button" class="delete">Delete</button>
      `);
      item.attr("image", `${index.Image}`);
      item.attr("name", `${index.Name}`);
      item.attr("price", `${index.Price}`);
      item.attr("description", `${index.Description}`);
      item.attr("description", `${index.Category}`);
      $(".drcards").append(item);
    })
  };
displayDrink();

// When we click on anything with the class of delete, run this function
// WE STILL HAVE TO FIX THIS - for multiples of the same item
$(document.body).on("click", ".delete", (e) => {
  console.log("delete clicked");
    // Loop through the array named foodList. The item parameter represents each element in the array...
    // the index parameter represents the index of the item
    cart.forEach((item, index) => {
      console.log(item, index);
      console.log(cart);
      // If the element we clicked on has a parent element with an item-number attribute that matches the item's Id property...
      if (item.Name ===  $(e.target).parent().attr("name")) {
        // Splice it from the array
        cart.splice(index, 1);
        basket--;
      }
    });
   console.log(cart.length);
   $(".cart_total").html("<p>" + cart.length + "</p>");

  });

//Declaring some variables to calculate user's bill.  Basket = total number of items.
let cart = [];
let total = 0;
let tax = 0.06;
let basket = 0;

//Add to cart section, takes name and price attributes and stores them in the cart

$(".add").on("click", (event) => {
  cart.push({ Name: $(event.target).parent().attr("name"),
    Price: Number($(event.target).parent().attr("price"))
  })
  //console.log(cart);
  basket ++;
  //console.log(basket);
    // show form
  total += Number($(event.target).parent().attr("price"));
  console.log(cart.length);
  // console.log(total, (total*tax), total+(total*tax));

  // console.log(event.target.parentNode.attributes["0"]);
  // console.log(event.target.parentNode.attributes["1"]);
  // $(".cart_total").remove(Number(basket));
  $(".cart_total").html("<p>" + basket + "</p>");
  //console.log(basket);
});


$(".icon").on("click", function(){
    $("#form").css("display","block");


  
    function displayBill () {
      let item = "";

      item = $(`<div class="checkoutPopup">`);
      item.html(`
      <p>SubTotal Amount: $${total} </p>
      <p>Tax: $${total * tax} </p>
      <P>Total: $${total+(total*tax)} </p>
      `);

      cart.forEach((item) => {
        console.log(item);
        $(".showTheItems").append(`
            <li>${item.Name} and costs: ${item.Price} </li>
          `);
      });

      $(".billTotal, #receiptNumbers").html(item); //<--This shows the bill once and allows for updates
    };
    displayBill();
});

// This hides the bill initially.
$("#form").css("display","none");
// Responsible for closing out the bill window
$("#closeBill").on("click", function() {
    $("#form").css("display", "none")
  });
// This hides the receipt initially and to allow the receipt to show. 
$("#receipt").css("display","none");

// This allows the button to toggle the bill to not show and show the receipt. 
$("#btnCheckout").click(function(){
    $("#form").css("display", "none");
    $("#receipt").css("display", "block");
    $("#form").fadeOut(150);
    $("#cashGiven").val();
    let change = "Change: "
    $("#changeBack").append("Change: $", + $("#cashGiven").val() - (total+(total*tax)));


  });
// This allows us to exit the window
$("#closeReceipt").on("click", function() {
  $("#receipt").css("display", "none")
});







































// DO WE NEED THIS
// $("#btnPaybill").click(function(){
//   $("#receipt").css("display", "none");
//   $("#form").fadeOut(150);
//   });

  // $(document).on("mouseenter", ".reserved" , function() {
//     let name = $("#name").val();
//     let partySize = $("#party").val();
//     $(".reserved > .reservation").html(`<p> Name: ${name}</p> <p> Party Size: ${partySize}</p>`);


// $("form").append(total);
//     };

//   function displayReceipt () {
//       const item = $(`<div class="checkoutPopup">`);
//       item.html(`
//       <p>Total Amount: ${total} </p>
//       `);

//       $(".drReceipt").append(item);
//     };
// //We call the function to display the items
//   // displayReceipt();

//   // Functionality for CheckoutPopup
//   $("#checkout").click(function(){
//       $(".checkoutNone").toggleClass("checkoutPopup");
//       // function displayReceipt () {
//       //   const item = $(`<div class="checkoutPopup">`);
//       //   item.html(`
//       //   <p>Total Amount: ${total} </p>
//       //   `);

//       //   $(".drReceipt").append(item);
//       // };
//       displayReceipt();
//   });
//   // Functionality for Pay with Cash
//   $("#btnCashNone").click(function(){
//     $(".cashNone").toggleClass("cashShow");
//   });
//   //Functionality for Pay with CC
//   $("#btnCreditNone").click(function(){
//     $(".creditNone").toggleClass("creditShow");
//   });
// });
});
