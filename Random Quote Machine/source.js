$(document).ready(function() {
var jd;
var currentQuote = "Test";
var currentAuthor = "Test";

var data = {
     method: "getQuote", 
	 lang: "en" ,
	 format:"jsonp",
	 dataType: "jsonp"
};

var texttotweet;

$("#button").on("click", function(currentQuote ,currentAuthor ){
      // Only change code below this line.
      
  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", data, function(jd) {
  $('#quote').html('<p><em>The Quote:</em><br> ' + jd.quoteText + '</p>');
  $('#author').html('<p><em>Author of the Quote:</em><br>' + jd.quoteAuthor + '</p>');
  currentQuote = $('#quote').text();  });
      });
	
 $('#tweet-btn').click(function() {
	$('#author').append('<p> I just clicked on the stupid twitter button' + '</p>');
    $(this).attr("data-text", "whatever bull shit we want to share");
  });
 



	

});