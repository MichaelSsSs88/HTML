initMap();

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: {
            lat: -34.653015,
            lng: -58.674850
        }
    });
    var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;

    document.getElementById('submit').addEventListener('click', function() {
        geocodeLatLng(geocoder, map, infowindow);
    });
}

function geocodeLatLng(geocoder, map, infowindow) {
    var input = document.getElementById('latlng').value;
    var latlngStr = input.split(',', 2);
    var latlng = {
        lat: parseFloat(latlngStr[0]),
        lng: parseFloat(latlngStr[1])
    };
    geocoder.geocode({
        'location': latlng
    }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if (results[1]) {
                map.setZoom(11);
                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map
                });
                infowindow.setContent(results[1].formatted_address);
                infowindow.open(map, marker);
            } else {
                window.alert('No hay resultados');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
}