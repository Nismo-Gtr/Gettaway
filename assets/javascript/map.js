$(document).ready(function () {
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
  $('#myModal-1').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
  $('#mySignIn').on('shown.bs.modal', function () {
    $('#myInput').focus()
  })
  $("#submit").on("click", function () {
    console.log("testing");
    $("#flights").empty();
    var tRow = $("<tr>");
    var oneWay = $("<td>");
    var maxPrice = $("<td>");
    var destination = $("<td>");
    oneWay = $("#one-way").prop("checked");
    maxPrice = $("#max_price").val();
    destination = $("#destination").val();
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

    var queryURL = "https://api.sandbox.amadeus.com/v1.2/flights/inspiration-search?apikey=ZTIOSLgexgAGIo05oZ3xhfPDfQIVNXwh&origin=CHI&departure_date=2018-05-09&one-way=" + oneWay + "&max_price=" + maxPrice;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      for (var i = 0; i < 21; i++) {

        var tr = $("<tr>");
        var airline = $("<td>");
        var destination = $("<td>");
        var departureDate = $("<td>");
        var returnDate = $("<td>");
        var price = $("<td>");

        airline.text(response.results[i].airline);
        destination.text(response.results[i].destination + " ");
        departureDate.text(response.results[i].departure_date + " ");
        var returnDateData = response.results[i].return_date ? response.results[i].return_date : "-";
        returnDate.text(returnDateData + " ");
        price.text(response.results[i].price);
        price.prepend("$");


        $("#flights").append(tr);
        tr.append(airline);
        tr.append(destination);
        tr.append(returnDate);
        tr.append(price);

        console.log(tr);
      }
    });



    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyD6DNDNn28CwDLTmW5me_FRSpcZ8l-b2KE",
      authDomain: "getaway-users.firebaseapp.com",
      databaseURL: "https://getaway-users.firebaseio.com",
      projectId: "getaway-users",
      storageBucket: "getaway-users.appspot.com",
      messagingSenderId: "987355554442"
    };
    firebase.initializeApp(config);
   

    var userData = firebase.database();

    firebase.auth().onAuthStateChanged(function (userName) {
        if (userName) {
            // User is signed in.
        } else {
            // No user is signed in.
        }
    });

    $("#createUser").on("click", function () {

      var userEmail = $("#inputEmail").val().trim();
      var userPassword = $("#password").val().trim();
      var firstName = $("#firstName").val().trim();
      var lastName = $("#lastName").val().trim();
      var userName = $("#userName").val().trim();
      var userCity = $("#city").val().trim();
      var userState = $("#state").val().trim();
      var userZipCode = parseInt($("#zipCode").val().trim());
      var userPush = userData.ref().push({
        email: userEmail,
        password: userPassword,
        first: firstName,
        last: lastName,
        userProfileName: userName,
        city: userCity,
        state: userState,
        zipCode: userZipCode
      });
    });
  });

    $("button").on("click", function () {
      event.preventDefault();
      var userDestination = $("#searchInputForm").val().trim();
      console.log(userDestination);

      $('#map').show();
      $(function () {
        var mapOptions = {
          zoom: 12,
          // center: new google.maps.LatLng(41.881832, -87.623177)
        };
        var map = new google.maps.Map($("#map-canvas")[0], mapOptions);
        geocoder.geocode({ 'address': userDestination }, function (results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });
        // listen for the window resize event & trigger Google Maps to update too
        $(window).resize(function () {
          // (the 'map' here is the result of the created 'var map = ...' above)
          google.maps.event.trigger(map, "resize");
        });

      });



    })



});

