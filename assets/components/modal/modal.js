$(document).ready(function () {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })
    $('#myModal-1').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })
    $('#mySignIn').on('shown.bs.modal', function() {
        $('#myInput').focus()
    })

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
    
    firebase.auth().onAuthStateChanged(function(unerName) {
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
        })
        });
//this is results for modal
// $(document).ready(function () {
//     console.log("herro");
  
//     var database = firebase.database();
//     var arr = [];
  
    
//     database.ref().on("value", function(snapshot) {
//         var data = snapshot.val() || {};// {} replaces if statement
//         $("#flights").empty();
  
//         var keys = Object.keys(data);//returns array of strings
  
//         for (var i = 0; i < key.length; i++) {
//             var flightArrival = data[keys[i]];
//             var airline = "";
//             var flightDetail = "";
//             var cost = "";
  
//             //get these elements onto HTML table 
//             var row = $("<tr>");//create a row for results to line up in
//             //create columns/data that will go in the row
//             var tLine = $("<td>");//this will hold airline name
//             var tDetail = $("<td>"); //this will hold length of flight
//             var tCost = $("<td>"); //this is flight cost
//             //get data to stay in a single row
//             row.append(tLine);
//             row.append(tDetail);
//             row.append(tCost);
//             //display input in html
//             tLine.text(flightArrival.airline);
//             tDetail.text(flightArrival.flightDetail);
//             tCost.text(flightArrival.cost);
//             //get rows in tbody
//             $("#flights").append(row);
  
//         }
//     });
//     //on submit we generate userInput data
//     $("#search").on("click", function(event) {
//         event.preventDefault();
//         // $('#map').show();
//         //these are elements to go in 
//         var userInput = $("#searchBarInputId").val().trim();
  
//         database.ref().push({
//             airline: userInput,
//             flightDetail: userInput,
//             cost: userInput
//         });
//         //this will clear text box when user clicks
//         $("#searchBarInputId").val("");
//     })
  
  
//   });


    });

