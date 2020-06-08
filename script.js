// Ron Swanson API

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quoteDiv = document.getElementById("quote");
const button = document.querySelector("#btnQuote");
var currentQuote = '';

// bacon button
$(".bacon-btn").on("click", function generateQuote(data) {
  // runs Ron quote
    fetch(url)
        .then(resp => resp.json())
        .then(function (data) {
            quoteDiv.innerHTML = `"${data[0]}"`;
            currentQuote = `"${data[0]}"`;
            // adds Ron image to quote
            $("#ronImageDiv").html("<img src='ron.png' />")
            $(".ronRow").addClass("ronQuoteStyles");

        })
        .catch(function (error) {
            console.log(error)
        })
    // runs function to generate recipes
    createRecipe();
});

function createRecipe() {

  // URL for the EDAMAM Recipe API 
  var queryURL = "https://api.edamam.com/search?q=bacon&app_id=ff63ef36&app_key=cd232eacc506b1455a6561f101c12d0a&from=0&to50";
 
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    // The number of recipes the user would like to display
    var recipeNumber = $("#recipe-input").val();
    var parsedInput = parseInt(recipeNumber);

    // on click - clears current recipe selection
    $("#recipes-here").empty();
    $("#recipe-header").empty();

    // header for recipes
    var recipeDiv = $("<div>");
    recipeDiv.addClass("recipe-div");
    var recipeHeader = $("<h4>");
    recipeHeader.addClass("recipe-header");
    recipeHeader.text("Bacon recipes");
    recipeDiv.append(recipeHeader);
    $("#recipe-header").append(recipeDiv);

  for (i = 0; i < parsedInput; i++) {
      // Choose a random index number within the array to choose a recipe 
      var randomRecipe = Math.floor(Math.random() * 10);

      // Create cards that will house the recipes
      var recipeCell = $("<div>").attr("class", "cell");
      $("#recipes-here").append(recipeCell);
      var recipeCard = $("<div>").attr("class", "card");
      recipeCell.append(recipeCard);
      var recipeSection = $("<div>").attr("class", "card-section");
      recipeCard.append(recipeSection);  
      var cardTitleE1 = $("<h1>"); 
      cardTitleE1.attr("id", "recipe-title"); 
      var cardImageE1 = $("<img>"); 
      cardImageE1.attr("id", "recipe-image"); 
      var cardTextE1 = $("<a>"); 
      cardTextE1.attr("id", "recipe-link");
      
      // Adding the recipe title, url, and image from the API call
      cardTitleE1.text(response.hits[randomRecipe].recipe.label);
      cardTextE1.text("Click here for link to recipe");
      cardTextE1.attr("href", response.hits[randomRecipe].recipe.url);
      cardTextE1.attr("target", "_blank");
      cardImageE1.attr("src", response.hits[randomRecipe].recipe.image);
      
      // Display the recipe on the DOM
      recipeSection.append(cardTitleE1); 
      recipeSection.append(cardImageE1);
      recipeSection.append(cardTextE1); 
      }
 
  })
};
