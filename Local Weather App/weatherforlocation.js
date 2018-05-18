var lat;
var log;
var temp;

if ("geolocation" in navigator) {
  /* geolocation is available */

navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  log = position.coords.longitude;

$('#localweather').on ("click", function() {
$.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + log + "&appid=c213b233edb2d7f8a9a2f17e52bdaeec" + "&units=metric", function(jd) {
$('#temp-num').html('<p><em>This is the local Tem</em><br>' + jd.main.temp + '</p>');
temp = jd.main.temp;
$('#temp-icon').html('<img> This is the weather icon ' + jd.weather[0].icon + '</p>');
var img = "http://openweathermap.org/img/w/" + jd.weather[0].icon + ".png";

$("#temp-icon").html('<img src="' + img + '"/>');
  });
 });
 
$("#toggle").on ("click",function() { 
var tempinc = temp;
$('#temp-num').append('<p><em>This is the local Tem</em><br> ' + tempinc + '</p>');
var tempinf;
tempinf = (tempinc * 1.8) + 32;
$('#temp-num').html('<p><em>This is the local Tem</em><br> ' + tempinf + '</p>');

})
}); 
  
} else {
  /* geolocation IS NOT available */
  alert("geolocation is not available");
}



