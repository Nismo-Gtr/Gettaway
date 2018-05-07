$(document).ready(function () {
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus()
    })
    $('#myModal-1').on('shown.bs.modal', function () {
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
    });

