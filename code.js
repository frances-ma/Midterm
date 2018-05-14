"use strict";
$(document).ready(function(){
  let counter = 0;
  // Beginning Array for sandwich list
  const samList =  [
    {
      Image: "https://i.imgur.com/dz4rZbI.jpg?1",
      Name: "Witch & Famous",
      Price: 4,
      Description: "French bread stuffed with cilantro, pork-belly, & pickled root veggies. Comes with a dollop of our delectable crème fraiche. Sure to cast a spell on your taste buds!",
      Category: "Sandwich",
      Id: counter
    },

    {
      Image: "https://i.imgur.com/BY8F4CN.jpg",
      Name: "The Basic Witch",
      Price: 5,
      Description: "Classic plain-bagel sandwich filled to the brim with alfalfa sprouts, butter lettuce, and grilled tempeh. Topped with our signature roasted red pepper cream-cheese.",
      Category: "Sandwich",
      Id: counter
    },

    {
      Image: "https://i.imgur.com/NOE64NS.jpg?1",
      Name: "If You’ve Got It, Haunt It",
      Price: 7,
      Description: "Brioche bun with prosciutto, sliced cucumbers, endive, and red-leaf lettuce. This sandwich is re-inventing the broom.",
      Category: "Sandwich",
      Id: counter
    },

    {
      Image: "https://i.imgur.com/IOfdxm7.jpg",
      Name: "The Black-Cat Burger",
      Price: 6,
      Description: "Seeded bun with black bean patty, tomato, Bibb lettuce, and almond cheese. Is a burger a sandwich? Of course it is! This witchin’ vegan black-bean burger will leave you wanting more.",
      Category: "Sandwich",
      Id: counter
    }
  ];
  // Beginning array for sidelist
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
  // Beginning array for drinklist
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
      item.attr("item-num", `${index.Id}`);
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
      item.attr("category", `${index.Category}`);
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
        item.attr("category", `${index.Category}`);
        $(".sicards").append(item);
      })
    };
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
        item.attr("category", `${index.Category}`);
        $(".drcards").append(item);
      })
    };
  displayDrink();

  //Declaring some variables to calculate user's bill.  Basket = total number of items.
  let cart = [];
  let total = 0;
  let tax = 0.06;
  let basket = 0;

  // Deletes Items
  $('.delete').on("click", (e) => {
    console.log("delete clicked");
    total -= Number($(event.target).parent().attr("price"));
      // Loop through the array. The item parameter represents each element in the array...
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

      // For each again to display the items in the <ul> block
      $('.showTheItems').html(''); // reset the html in side the <ul> block
      cart.forEach((item, index) => { // then rebuild the display
        $(".showTheItems").append(`
            <li>${item.Name}: $${item.Price} </li>
        `);
      });

      $(".cart_total").html(`<p> Cart : ${cart.length}  </p>`);
    // displayBill();
  });

  //Add to cart section, takes name and price attributes and stores them in the cart

  $(".add").on("click", (event) => {
    console.log("counter: " + counter);
    let item = {
      Name: $(event.target).parent().attr("name"),
      Price: Number($(event.target).parent().attr("price")),
      Id: ++counter
    };

    cart.push(item);
    basket++;

    // show form
    total += Number($(event.target).parent().attr("price"));
    console.log(cart.length);

    //This was moved from the displayBill function.  It adds item info to the bill on the click of "Add"

    $(".showTheItems").append(`
        <li>${item.Name}: $${item.Price} </li>
    `);

    $(".cart_total").html(`<p> Cart : ${basket} </p>`);
  });

  // This is the checkout button click function.
  $(".icon").on("click", function(){
      $("#bill").css("display","flex");

    // This function allows for computation of bill total and appends to bill and receipt section
    function displayBill () {
      let item = "";

      item = $(`<div class="checkoutPopup">`);
      item.html(`
      <p>SubTotal Amount: $${total} </p>
      <p>Tax: $${Math.floor((total * tax) * 100) / 100} </p>
      <p>Total: $${ total + (total * tax)}</p>
      `);
      $(".billTotal, #receiptNumbers").html(item); //<--This shows the bill once and allows for updates
    };
    displayBill();
  });

  // Responsible for closing out the bill window
  $("#closeBill").on("click", function() {
      $("#bill").css("display", "none")

    });

  // This allows the button to toggle the bill to not show and show the receipt.
  $("#btnCheckout").click(function(){
      $("#bill").css("display", "none");
      $("#receipt").css("display", "flex");
      $("#bill").fadeOut(150);
      // This function allows us to look for a value and if it is not equal to 0, it will give Change.
      function getChange () {
        $("#changeBack").empty();
        let cashGiven = "";
        cashGiven = $("#cashGiven").val();
        console.log(cashGiven);
        if (cashGiven == 0.00) {
          console.log("no money")
        } else {
        $("#changeBack").append("Change: $", + Math.floor((cashGiven - (total+(total*tax)))));
          console.log("money");
        }
      }
      getChange ();
      
  
    });

  // This allows us to exit the window
  $("#closeReceipt").on("click", function() {
    $("#receipt").css("display", "none")
  });
  
    


});

  
