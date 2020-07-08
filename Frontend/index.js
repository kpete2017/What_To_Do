var restaurantButton = document.getElementById("restaurant-button");
var outdoorButton = document.getElementById("outdoor-button");
var indoorButton = document.getElementById("indoor-button");
var anyButton = document.getElementById("any-button");
var shopButton = document.getElementById("shopping-button");
var headingButton = document.getElementById("header-text")
var themeButton = document.getElementById("themeButton")
var currentTheme = "dark"
var infoWindow;
var pos;
var map;
var darkStyle = [
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
var lightStyle = [
    {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#523735"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#c9b2a6"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#dcd2be"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ae9e90"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#93817c"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#a5b076"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#447530"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f5f1e6"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#fdfcf8"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#f8c967"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#e9bc62"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#e98d58"
            }
          ]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#db8555"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#806b63"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8f7d77"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#ebe3cd"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#dfd2ae"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#b9d3c2"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#92998d"
         }
        ]
    }
];
var themeMap = {
    dark: "light",
    light: "dark"
};

var theme = localStorage.getItem('theme')
|| (tmp = Object.keys(themeMap)[0],
    localStorage.setItem('theme', tmp),
    tmp);


function initMap() {
    createMap(); 
    navigator.geolocation ? getGeoLocation() : handleLocationError(false, infoWindow, map.getCenter());
    createListeners()
}

function createListeners() {
    restaurantButton.addEventListener("click", function(event) { handleEvent: restaurantSearch() });
    indoorButton.addEventListener("click", function(event) { handleEvent: indoorSearch() });
    outdoorButton.addEventListener("click", function(event) { handleEvent: outdoorSearch() });
    anyButton.addEventListener("click", function(event) { handleEvent: anySearch() });
    shopButton.addEventListener("click", function(event) { handleEvent: shoppingSearch() });
    headingButton.addEventListener("click", function(event) { handleEvent: resetPage() });
    themeButton.addEventListener("click", function(event){ handleEvent: changeTheme() });
}

function resetPage() {
    location.reload();
}

function createMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 15,
        styles: darkStyle
      });
}

function changeTheme() {
    var bodyClass = document.body.classList;
    bodyClass.add(theme);

    if (currentTheme === "dark" ) {
        map.setOptions({ styles: lightStyle });
        bodyClass.replace("dark", "light");
        currentTheme = "light";
    } else {
        map.setOptions({ styles: darkStyle });
        currentTheme = "dark";
    }
    
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
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
    map.setZoom(12)
    var restaurantRequest = {
        location: pos,
        // openNow: true,
        rankBy: google.maps.places.RankBy.PROMINENCE,
        radius: 15000,
        keyword: "restaurant"
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(restaurantRequest, function(results, status) {
        console.log(results)
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i], "red");
            }
        }
    })
}

function indoorSearch() {
    map.setZoom(12)
    var indoorRequest = {
        location: pos,
        // openNow: true,
        radius: 15000,
        rankBy: google.maps.places.RankBy.PROMINENCE,
        keyword: ""
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(indoorRequest, function(results, status) {
        console.log(results)
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i], "purple");
            }
        }
    })
}

function outdoorSearch() {
    map.setZoom(12)
    var indoorRequest = {
        location: pos,
        // openNow: true,
        radius: 15000,
        rankBy: google.maps.places.RankBy.PROMINENCE,
        keyword: "hike"
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(indoorRequest, function(results, status) {
        console.log(results)
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i], "orange");
            }
        }
    })
}

function anySearch() {
    console.log("Any Clicked")
}

function shoppingSearch() {
    map.setZoom(12)
    var shoppingRequest = {
        location: pos,
        // openNow: true,
        radius: 15000,
        rankBy: google.maps.places.RankBy.PROMINENCE,
        type: "store"
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(shoppingRequest, function(results, status) {
        console.log(results)
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i], "green");
            }
        }
    })
}

function createMarker(place, color) {

    var markerInfoWindow = new google.maps.InfoWindow({
        content: place.name
      });
    
    var marker = new google.maps.Marker({
      map: map,
      title: place.name,
      position: place.geometry.location,
      icon: { url: `http://maps.google.com/mapfiles/ms/icons/${color}-dot.png` },
    });
  
    google.maps.event.addListener(marker, "click", function() {

      markerInfoWindow.open(map, this);
    });
}