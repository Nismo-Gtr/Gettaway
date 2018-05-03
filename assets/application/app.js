// Make the DOM Dynamic!
$(document).ready(function () {
    //store linked firebase as the variable database
    var database = firebase.database();

    database.ref().on("value", function (snapshot) {
        //display the .val() of a snapshot generated upon change of value at the rootlvl
        console.log(snapshot.val());

    })


});
