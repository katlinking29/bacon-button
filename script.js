// header code
$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("body").addClass("sticky-shrinknav-wrapper");
    } else{
      $("body").removeClass("sticky-shrinknav-wrapper");
    }
  });

});


function createRecipe() {

// var queryURL = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3";
// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(queryURL)
//   console.log(response);

};



// Event handler for user clicking the bacon button
$(".bacon-btn").on("click", function() {

// Storing the input value
var inputNumber = $("#recipe-input").val();
console.log(inputNumber)
// runs function to display recipes
createRecipe(); 
});