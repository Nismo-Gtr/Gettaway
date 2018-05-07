$(document).ready(function () {
  $("#submit").on("click", function () {

    var origin = $("#origin").val();
    var oneWay =  $("#one-way").prop("checked");
    var maxPrice = $("#max_price").val();
    var destination = $("#destination").val();

    $("#round-trip").on("click", function() {

    })
 
    var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=ZTIOSLgexgAGIo05oZ3xhfPDfQIVNXwh&origin=" + origin + "&destination=" + destination + "&direct=" + oneWay + "&max_price=" + maxPrice + "&number_of_results=20";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function (response) {
          console.log(response);
        });
  });
}); 