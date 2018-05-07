$(document).ready(function () {
  $("#submit").on("click", function () {

    var origin = $("#origin").val().trim();
    var oneWay = +$("#one-way").is(":checked");
    var roundTrip = $("#round-trip").val();
    
    if (oneWay === 0) {
      tripType = false;
    }  
  
 console.log(tripType);   
 
    var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=ZTIOSLgexgAGIo05oZ3xhfPDfQIVNXwh&origin=" + origin;

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          console.log(response);
        });
  });
}); 