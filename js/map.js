//Google Map
$(document).ready(function() {

    "use strict";

    var latitude = $('#google-map').data('latitude')
    var longitude = $('#google-map').data('longitude')
    function initialize_map() {
        var myLatlng = new google.maps.LatLng(latitude,longitude);
        var mapOptions = {
            zoom: 17,
            scrollwheel: false,
            center: myLatlng
        };
        var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        var contentString = '';
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });

    }
    google.maps.event.addDomListener(window, 'load', initialize_map);

    //Show and hide map
    function showMap(){
        $('.opened').fadeIn();
        $('#map-canvas').animate({height:'500px'});
        $('#map-canvas').css('overflow','visible');

        var offsetTop = $('#map-canvas').offset().top-50;
        $('html, body').animate({scrollTop: offsetTop},500);
    };
    function hideMap(){
        $('.opened').fadeOut();
        $('#map-canvas').animate({height:'0px'},1000);
        $('#map-canvas').css('overflow','hidden');
    }

    var closed=true;
    $('.address .fa-map-marker').click(
        function(){
            if(closed){
                showMap();
                return closed=false;
            } else if(!closed){
                hideMap();
                return closed=true;
            }
        }
    );
    $('.address p').click(
        function(){
            if(closed){
                showMap();
                return closed=false;
            } else if(!closed){
                hideMap();
                return closed=true;
            }
        }
    );
    $('.map-head').click(
      function(){
       if(!closed){
          hideMap();
          return closed=true;
        }
      }
      ); 
});
