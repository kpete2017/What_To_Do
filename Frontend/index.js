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
    var restaurantButton = document.getElementById("restaurant-button");
    var outdoorButton = document.getElementById("outdoor-button");
    var indoorButton = document.getElementById("indoor-button");
    var anyButton = document.getElementById("any-button");
    var shopButton = document.getElementById("shopping-button");
    var headingButton = document.getElementById("header-text")
    var themeButton = document.getElementById("themeButton")
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
          disableDefaultUI: true, // a way to quickly hide all controls
          scaleControl: true,
          zoomControl: true,
          streetViewControl: true,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE 
          },
        center: {lat: -34.397, lng: 150.644},
        zoom: 15,
        styles: darkStyle
      });
}

function changeTheme() {
    var bodyClass = document.body.classList;
    bodyClass.add(theme);
    const current = localStorage.getItem('theme');
    const next = themeMap[current];

    if (themeMap[current] === "light" ) {
        map.setOptions({ styles: lightStyle });
        bodyClass.replace("dark", "light");
        currentTheme = "light";
    } else {
        map.setOptions({ styles: darkStyle });
        currentTheme = "dark";
    }


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
    const restaurantType = ["restaurant", "bar"];
    searchPlacesApiForType(restaurantType, "red");
    searchPlacesApiForKeyword(restaurantType, "red");
}

function indoorSearch() {
    const indoorActivities = ["aquarium", "bowling alley", "casino", "zoo", "movie", "museum", "night club", "go kart", "arcade", "cinema", "amc", "Regal", "theatre","skating" ];
    searchPlacesApiForKeyword(indoorActivities, "purple");
}

function outdoorSearch() {
    const outdoorKeywords = ["hike", "trail", "Skiing", "Camping", "Fishing", "Swimming", "Golfing", "Beach", "amusement_park","park"];
    searchPlacesApiForKeyword(outdoorKeywords, "green");
}

function shoppingSearch() {
    const storeTypes = ["book_store", "clothing_store", "department_store", "shoe_store", "electronics_store", "furniture_store"];
    searchPlacesApiForType(storeTypes, "orange");
}

function anySearch() {
    console.log("Any Clicked");
}

function searchPlacesApiForKeyword(keyArray, color) {
    addRandomButton()
    map.setZoom(12)
    for(let i = 0; i < keyArray.length; i++) {
        var request = {
            location: pos,
            openNow: true,
            radius: 15000,
            rankBy: google.maps.places.RankBy.PROMINENCE,
            keyword: keyArray[i]
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    createMarker(results[i], color);
                    addToList(results[i])
                }
            }
        })
    }
}

function searchPlacesApiForType(keyArray, color) {
    addRandomButton();
    var element = document.getElementById("option-ask");
    if(element) {
        element.parentNode.removeChild(element);
    }
    map.setZoom(12)
    for(let i = 0; i < keyArray.length; i++) {
        var request = {
            location: pos,
            openNow: true,
            radius: 15000,
            rankBy: google.maps.places.RankBy.PROMINENCE,
            type: keyArray[i]
        };

        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, function(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (let i = 0; i < results.length; i++) {
                    createMarker(results[i], color);
                    addToList(results[i])
                }
            }
        })
    }
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

function addToList(result) {
    var itemList = document.getElementById("item-list");
    let item = document.createElement("li");
    item.innerText = result.name;
    itemList.append(item);
    item.addEventListener("click", function(event){ handleEvent: showResultCard(result) });
}

function addRandomButton() {
    
    var element = document.getElementById("option-ask");
    if(element) {
        element.parentNode.removeChild(element);
    }

    var menuButtons = document.getElementById("menu-buttons");
    var myElement = document.getElementById("random-button");
    if(!myElement) {
        var randomButton = document.createElement("h2");
        randomButton.id = "random-button";
        randomButton.innerText = "Chose one for me!";
        menuButtons.append(randomButton);
        
        var clearButton = document.createElement("h2");
        clearButton.innerText = "Clear List";
        menuButtons.append(clearButton);

        clearButton.addEventListener("click", () => {
            location.reload();
        })
    }
}

function showResultCard(result) {
    let resultCardCheck = document.getElementById("result-card")
    if(resultCardCheck) { exitCard(resultCardCheck) }

    map.setCenter(result.geometry.location);
    map.setZoom(17);

    let resultCard = document.createElement("div");
    resultCard.id = "result-card";
    resultCard.innerHTML = 
        `
    <i id="exit-button" class="fa fa-times"></i>
    <h3>${result.name}</h3>
    <p>Type of activity: ${result.types[0].replace("_"," ")}, ${result.types[1].replace("_"," ")}</p>
    <p>Is ${result.opening_hours.isOpen() ? "closed" : "open" }</p>
    <p>Rating: ${result.rating}</p>
    <p>User Ratings Total: ${result.user_ratings_total}</p>
    <p>Price Level: ${result.price_level}</p>
    <a href="https://www.google.com/maps/search/${result.vicinity.replace(" ", "+")}">Address: ${result.vicinity}</a>
    <h2>Try Another?</h2>
    `;

    document.body.append(resultCard);
    window.scrollTo(0,0);
    let exitButton = document.getElementById("exit-button");
    exitButton.addEventListener("click", function(event) { handleEvent: exitCard(resultCard) });
}

function exitCard(card) {
    card.parentNode.removeChild(card)
}
