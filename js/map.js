// function initialize() {
// var mapOptions = {
// zoom: 18,
// center: new google.maps.LatLng(47.598907,-122.327504),
// mapTypeId: google.maps.MapTypeId.ROADMAP
// }
// var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
//
// var marker = new google.maps.Marker({
// position: mapOptions.center,
// map: map,
// title: 'Thai Curry Simple'
// });
//
// }
//


var directionsService,
    directionsDisplay,
    thaiCurrySimplePlace,
    thaiCurrySimpleMarker,
    thaiCurrySimpleInfowindow,
    infowindow,
    marker,
    map;

function initialize() {

    var service,
        autocomplete,
        mapOptions = {
            center: new google.maps.LatLng(47.598907, -122.327504),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            draggable: false,
            zoomControl: false,
            scrollwheel: false,
            mapTypeControl: false,
            zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL
                },

            styles: [
              {
                  "stylers": [
                      { "hue": "#4B888D" },
                      { "gamma": 0.33 }
                  ]
              },
              {
                  "featureType": "water",
                  "stylers": [
                    { "hue": "#4B888D" },
                    { "saturation": -10 },
                    { "gamma": 2 }
                  ]
              },
              {
                "featureType": "transit",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
                "featureType": "administrative",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
                "featureType": "landscape.man_made",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
                "featureType": "poi.business",
                "stylers": [
                  { "visibility": "off" }
                ]
              },{
                "featureType": "poi.government",
                "stylers": [
                  { "saturation": 1 },
                  { "lightness": 1 },
                  { "visibility": "off" }
                ]
              }
            ]
        },
        input = document.getElementById('searchTextField'),
        defaultBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(49, -116.9155),
            new google.maps.LatLng(45.5485, -124.7857)
        ),
        autocompleteOptions = {
            bounds: defaultBounds,
        };
    // end of variable declarations

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    thaiCurrySimpleMarker = new google.maps.Marker({ map: map });
    marker = new google.maps.Marker({ map: map });
    thaiCurrySimpleInfowindow = new google.maps.InfoWindow();
    infowindow = new google.maps.InfoWindow();
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();

    service = new google.maps.places.PlacesService(map);

    autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);
    autocomplete.bindTo('bounds', map);

    google.maps.event.addListener(autocomplete, 'place_changed', getDirectionsToPlace);

    initClearInputButton();
    getDetailsOfTCS(service);

    function getDirectionsToPlace() {
        infowindow.close();
        marker.setVisible(false);
        thaiCurrySimpleMarker.setVisible(false);
        input.className = '';
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            // Inform the user that the place was not found and return.
            input.className = 'notfound';
            return;
        }

        calcRoute(place, thaiCurrySimplePlace);
        directionsDisplay.setMap(map);
        createMarker(place, marker, infowindow);
    }
}

function getDetailsOfTCS(service) {
    var request = {
        reference: "CoQBcwAAAP4gZtnHn9wg5kMwoV6Z7zqJ-S4sqIl6Wy8gIFYZ4fONcl8ab0B73Bw_FsjQddflU93LlcIneLfjD1XSi-aYUGGCnuTn8a37V92VeG_8asAOH9tSv8YQgChy4Cfp76iNjjl2Tza4SDI-yLvB_58q5Zrp0EPmfo8t3FiSrFhEbSlFEhB6Vzlq_aihdKYxTOdXDCavGhSFAUqs9yGlUnaipuzmY8FWGxmdbg"
    };

    service.getDetails(request, function(place, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            thaiCurrySimplePlace = place;
            createMarker(thaiCurrySimplePlace, thaiCurrySimpleMarker, thaiCurrySimpleInfowindow);
        }
    });
}

function createMarker(place, marker, infowindow) {
    var html = '<div>',
        address = '',
        photoUrl = '';

    marker.setIcon( /** @type {google.maps.Icon} */ ({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
    }));

    marker.setPosition(place.geometry.location);

    if (place.address_components) {
        address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || '')
        ].join(' ');
    }

    if (place.name === "Thai Curry Simple") {
        // html += '<img style="float: left" src="img/logo_border.png" />';
        html += '<img style="float: right" src="img/cartoon.jpg" />';
        google.maps.event.addListener(marker, 'click', function() {
            thaiCurrySimpleInfowindow.open(map, thaiCurrySimpleMarker);
        });
    }

    html += '<strong margin="right: 5px">' + place.name + '<br></strong>' + address;

    infowindow.setContent(html);
    infowindow.open(map, marker);
}

function calcRoute(start, end) {
    var request = {
            origin: start.geometry.location,
            destination: end.geometry.location,
            travelMode: google.maps.DirectionsTravelMode.WALKING
        };
    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}

function initClearInputButton() {
    var inputField = document.getElementById('searchTextField'),
        clearButton = document.getElementById('deleteicon');

    clearButton.addEventListener('click', function() {
        inputField.value = ''
        inputField.focus();
    }, false);
}

function loadScript() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCRo8UyY3zvf3vQsJkt3F9Xw0SrsbV4BNw&sensor=true&libraries=places&callback=initialize";
    document.body.appendChild(script);
}

document.add

window.onload = loadScript;


// google.maps.event.addDomListener(window, 'load', initialize);