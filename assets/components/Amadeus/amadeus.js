$(document).ready(function () {
  $("#submit").on("click", function () {

    var oneWay = $("#one-way").prop("checked");
    var maxPrice = $("#max_price").val();
    var destination = $("#destination").val();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);

    var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=ZTIOSLgexgAGIo05oZ3xhfPDfQIVNXwh&origin=CHI&departure_date=" + today +"&destination=" + destination + "&one-way=" + oneWay + "&max_price=" + maxPrice + "&number_of_results=20";
    var airportUrl = "https://api.sandbox.amadeus.com/v1.2/airports/nearest-relevant?apikey=ZTIOSLgexgAGIo05oZ3xhfPDfQIVNXwh&latitude=41.881832&longitude=-87.623177";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      for (var i = 0; i < 51; i++) {
        console.log(response.results[i]);
        $("#results").append(response.results[i].airline + "  ");
        $("#results").append(response.results[i].destination + " ");
        $("#results").append(response.results[i].departure_date + " ");
        $("#results").append(response.results[i].return_date + " $");
        $("#results").append(response.results[i].price);

        $("#results").append("<br>");
      }
    });
    // $.ajax({
    //   url: airportUrl,
    //   method: "GET"
    // }).then(function (response) {
    //   for (var i = 0; i < response.length; i++) {
    //     console.log(response);

    //     $("#results").append(response[i].airport_name + ": ");
    //     $("#results").append(response[i].city_name + ": ");
    //     $("#results").append(response[i].distance + " miles");
    //     $("#results").append("<br>");
    //   }




  });
}); 