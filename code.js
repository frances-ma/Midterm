"use strict";
"this is a test"



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

//   let total = 0;
// let x = 3.49;
// total += x;
// x = 5.00;
// total += x;

const items =  [
  {
    Name: "BLT",
    Price: 4
  }
  // {
  //   Name: "PBJ",
  //   Price: 5
  // }
];
function display () {
  items.forEach((index) => {

  })
}


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








