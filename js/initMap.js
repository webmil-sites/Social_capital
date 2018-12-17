var initContactsMap, mapStyles;

mapStyles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

var windowWidth = $(window).width();
console.log(windowWidth);

initContactsMap = function() {
    var map, mapDiv, mapIcon, mapLatLng, marker;
    mapDiv = document.getElementById('contacts_map');
    mapLatLng = {
        lat: 48.917955,
        lng: 24.717697
    };
    if (windowWidth < 480) {
        mapCenter = {
            lat: 48.914955,
            lng: 24.717697
        };
    } else {
        mapCenter = {
            lat: 48.917955,
            lng: 24.707697
        };
    }

    mapIcon = "img/marker.png";
    map = new google.maps.Map(mapDiv, {
        scrollwheel: false,
        center: mapCenter,
        zoom: 15
    });
    map.set('styles', mapStyles);
    return marker = new google.maps.Marker({
        position: mapLatLng,
        icon: mapIcon,
        map: map
    });
};

$( document ).ready(function() {
    initContactsMap();
});