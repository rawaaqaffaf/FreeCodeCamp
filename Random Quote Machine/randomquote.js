$(document).ready(function() {
var jd;
var currentQuote;
var currentAuthor;

var data = {
   method: "getQuote", 
   lang: "en" ,
   format:"jsonp",
   dataType: "jsonp"
};

var texttotweet;

$("#quote_button").on("click", function(){
      // Only change code below this line.
      getthequote(); 
      console.log(currentQuote);
  
      }); 
   
 function getthequote() {
 
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", data, function(jd) {
  $('#quote').html('<p>'+ jd.quoteText + '</p>');
  $('#author').html('<p>-' + jd.quoteAuthor + '</p>');
   quotedata(jd.quoteText , jd.quoteAuthor );
   });
 }  



function quotedata(quote, author ) 
{
currentQuote =  quote;
currentAuthor = author;
}


 $('#tweet_btn').on("click", function(){
  $(this).attr("href", "https://twitter.com/intent/tweet?text=" + "The Quote:"  +  currentQuote + ". The Author :" +  currentAuthor );
    console.log("Testing out the code"); 
  });
 
 
});