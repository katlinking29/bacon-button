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
            
        })
        .catch(function (error) {
            console.log(error)
        })
});