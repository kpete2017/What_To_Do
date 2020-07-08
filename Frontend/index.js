var restaurantButton = document.getElementById("restaurant-button");
var outdoorButton = document.getElementById("outdoor-button");
var indoorButton = document.getElementById("indoor-button");
var anyButton = document.getElementById("any-button");
var infoWindow;
var pos;
var map;
var mapStyle = [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
];

function initMap() {
    createMap(); 
    navigator.geolocation ? getGeoLocation() : 
    handleLocationError(false, infoWindow, map.getCenter());
    createListeners()
}

function createListeners() {
    restaurantButton.addEventListener("click", function(event) {handleEvent: restaurantSearch()});
    indoorButton.addEventListener("click", function(event) {handleEvent: indoorSearch()});
    outdoorButton.addEventListener("click", function(event) {handleEvent: outdoorSearch()});
    anyButton.addEventListener("click", function(event) {handleEvent: anySearch()});
}

function createMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15,
        styles: mapStyle
      });
}

function getGeoLocation() {
    navigator.geolocation.getCurrentPosition(function(position) {
        pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
        }
        let marker = new google.maps.Marker({
            map: map,
            position: pos,
            icon: { url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png" },
          });
        map.setCenter(pos);
    }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' : 'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function restaurantSearch() {

    var restaurantRequest = {
        location: pos,
        openNow: true,
        rankBy: google.maps.places.RankBy.DISTANCE,
        keyword: "restaurant"
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(restaurantRequest, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    })
}

function indoorSearch() {
    var restaurantRequest = {
        location: pos,
        openNow: true,
        rankBy: google.maps.places.RankBy.DISTANCE,
        type: "movie_theater"
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(restaurantRequest, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    })
}

function outdoorSearch() {
    console.log("Outdoor Clicked")
}

function anySearch() {
    console.log("Any Clicked")
}

function createMarker(place) {
    var marker = new google.maps.Marker({
      map: map,
      title: place.name,
      position: place.geometry.location,
    });
  
    google.maps.event.addListener(marker, "click", function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
}