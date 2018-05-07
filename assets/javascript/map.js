$(document).ready(function () {
    console.log("workin!");

 

    $("button").on("click", function () {
        event.preventDefault();
        
        $('#map').show();
        $(function() {
            var mapOptions = {
              zoom: 8,
              center: new google.maps.LatLng(41.881832, -87.623177)
            };
            var map = new google.maps.Map($("#map-canvas")[0], mapOptions);
          
            // listen for the window resize event & trigger Google Maps to update too
            $(window).resize(function() {
              // (the 'map' here is the result of the created 'var map = ...' above)
              google.maps.event.trigger(map, "resize");
            });
          });
        

        
    })
    

    

});


