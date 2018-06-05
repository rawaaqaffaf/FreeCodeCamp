$(document).ready(function() {
var searchterm;

var data = {
   action: "render", 
   prop:"revisions",
   rvprop : "content",
   format : "jsonfm",
   formatversion : "2",
};


$("#random-article").on("click", function() {
   $(this).attr("href", "https://en.wikipedia.org/wiki/Special:Random");
   $(this).attr("target" , "_blank");
 });


$("#wikisearch").on("submit", function(e) {
	e.preventDefault();
	searchresult();
   console.log("this is the search term!");
   console.log(searchterm);
   

 });
 

 function searchresult(){
searchterm = $('#search-term').val();

 $.getJSON("http://en.wikipedia.org/w/api.php?titles=" + searchterm , data, function(jd) {
  $("#search-result").html('<p>' + searchterm  + '</p>');
   });



 }
});