// RON SWANSON API

const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
const quoteDiv = document.getElementById("quote");
const button = document.querySelector("#btnQuote");
var currentQuote = '';
//const tweet = document.querySelector("#tweet");


  
$(".bacon-btn").on("click", function generateQuote(data) {
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

    createRecipe()
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
 
    console.log(parsedInput)

    for (i = 0; i< parsedInput ; i++) {
      // Choose a random index number within the array to choose a recipe 
      var randomRecipe = Math.floor(Math.random() * 10);
      // Create cards that will house the recipes
      var recipeCard = $("<div>"); 
      recipeCard.addClass("card recipe-card")
      var cardTitleE1 = $("<h1>"); 
      cardTitleE1.attr("id", "recipe-title"); 
      var cardImageE1 = $("<img>"); 
      cardImageE1.attr("id", "recipe-image"); 
      var cardTextE1 = $("<a>"); 
      cardTextE1.attr("id", "recipe-link");
      recipeCard.append(cardTextE1); 
      recipeCard.append(cardTitleE1); 
      recipeCard.append(cardImageE1); 

      // Adding the recipe title, url, and image from the API call
      cardTitleE1.text(response.hits[randomRecipe].recipe.label);
      cardTextE1.text(response.hits[randomRecipe].recipe.url);
      cardTextE1.attr("href", response.hits[randomRecipe].recipe.url)
      cardTextE1.attr("target", "_blank")
      cardImageE1.attr("src", response.hits[randomRecipe].recipe.image);
      
      // Display the recipe on the DOM
      recipeCard.append(cardTitleE1); 
      recipeCard.append(cardImageE1);
      recipeCard.append(cardTextE1); 
      $(".recipe-cards").append(recipeCard);
      }
 
  })};
