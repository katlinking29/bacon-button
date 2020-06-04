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

    // Choose a random index number within the array to choose a recipe 
    var randomRecipe = Math.floor(Math.random() * 10);

    for (i = 0; i < parsedInput; i++) {
      // grabbing HTML elements for the cards
      var recipeCard = $(".recipe-card");
      var recipeTitle = $("#recipe-title");
      var recipeImage = $("#recipe-image");
      var recipeLink = $("#recipe-link");
      // Adding the recipe title, url, and image from the API call
      recipeTitle.text(response.hits[randomRecipe].recipe.label);
      recipeLink.text(response.hits[randomRecipe].recipe.url);
      recipeImage.attr("src", response.hits[randomRecipe].recipe.image);
      // Display the recipe on the DOM
      recipeCard.removeClass("hidden"); 
      recipeCard.append(recipeTitle); 
      recipeCard.append(recipeImage);
      recipeCard.append(recipeLink); 

      if (parsedInput === 2 || parsedInput === 3) {
      // Create another card and append it after the first recipe card
      var anotherRecipeCard = $("<div>"); 
      anotherRecipeCard.addClass("card recipe-card")
      var cardTitleE1 = $("<h1>"); 
      cardTitleE1.attr("id", "recipe-title"); 
      var cardImageE1 = $("<img>"); 
      cardImageE1.attr("id", "recipe-image"); 
      var cardSectionE1 = $("<div>"); 
      cardSectionE1.addClass("card-section"); 
      var cardTextE1 = $("<p>"); 
      cardTextE1.attr("id", "recipe-link");
      cardSectionE1.append(cardTextE1); 
      anotherRecipeCard.append(cardTitleE1); 
      anotherRecipeCard.append(cardImageE1); 
      anotherRecipeCard.append(cardSectionE1); 
      
      // Grab the elements that were created with these ids and store them in variables
      var recipeTitle = $("#recipe-title");
      var recipeImage = $("#recipe-image");
      var recipeLink = $("#recipe-link");
      // Adding the recipe title, url, and image from the API call
      recipeTitle.text(response.hits[randomRecipe].recipe.label);
      recipeLink.text(response.hits[randomRecipe].recipe.url);
      recipeImage.attr("src", response.hits[randomRecipe].recipe.image);
      // Display the recipe on the DOM
      anotherRecipeCard.append(recipeTitle); 
      anotherRecipeCard.append(recipeImage);
      anotherRecipeCard.append(recipeLink); 
      recipeCard.append(anotherRecipeCard)

      }
    }
 
  })};
