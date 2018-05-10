"use strict";


// // Counter
// var itemCount = 0;
// $('.add').click(function (){
//   itemCount ++;
// console.log(itemCount);
// });

// Checkout Button


$(document).ready(function(){
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








