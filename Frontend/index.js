var baseURL = "http://localhost:3000";
var loginURL = `${baseURL}/login`;
var usersURL = `${baseURL}/users`;
var favoritesURL = `${baseURL}/favorites`;
var blacklistURL = `${baseURL}/blacklists`;
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
  checkForToken()
  createMap(); 
  navigator.geolocation ? getGeoLocation() : handleLocationError(false, infoWindow, map.getCenter());
}

function checkForToken() {
  const loginForm = document.getElementById("login-user");
  const signUp = document.getElementById("sign-up");
  if(localStorage.getItem('token')) {
    createWelcomeMessage();
    
  } else {
    signUp.addEventListener("click", function(event) { handleEvent: displaySignUp(event) });
    loginForm.addEventListener("submit", function(event) { handleEvent: loginUser(event) });
  }
  createAccountListeners();
  createNonAccountListeners();
}

function createAccountListeners() {
  var homeButton = document.getElementById("home")
  var favoritesButton = document.getElementById("favorites")
  var blacklistButton = document.getElementById("blacklist")
  var settingsButton = document.getElementById("settings")

  homeButton.addEventListener("click", function(event) { handleEvent: homeButtonClicked() })
  favoritesButton.addEventListener("click", function(event) { handleEvent: favoritesButtonClicked() })
  blacklistButton.addEventListener("click", function(event) { handleEvent: blacklistButtonClicked() })
  settingsButton.addEventListener("click", function(event) { handleEvent: settingsButtonClicked() })
}

function homeButtonClicked() {
  window.scrollTo(0,0);
}

function favoritesButtonClicked() {
  if(!localStorage.getItem("token")) {
    alert("Please sign in to access sign in features!")
  } else {
    fetch(favoritesURL, { headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(parseJSON)
      .then(results => createFavoritesPage(results))
  }
}

function createFavoritesPage(results) {

  let listItemTest = document.getElementById("favorites-div")

  if(listItemTest) {
    listItemTest.parentNode.removeChild(listItemTest)
  }

  const favoritesDiv = document.createElement("div")
  favoritesDiv.id = "favorites-div"
  favoritesDiv.innerHTML = `
  <i id="exit-button-favorite" class="fa fa-times"></i>
    <h2>Favorites</h2>
    <form id="newFav">
    <input name="favorites" type="favorites" placeholder="Enter New Favorite!">
    <button id="submit" type="submit">Submit</button>
    </form>
    <ul id="favorite-list"></ul>
  `

  document.body.append(favoritesDiv);

  let newFavoriteListener = document.getElementById("newFav");
  newFavoriteListener.addEventListener("submit", function(event) { handleEvent: createNewFavorite(event, favoritesDiv, results) });
  createFavList(favoritesDiv, results)
}

function createFavList(favoritesDiv, results) {

  let count = 0;

  const favoriteList = document.getElementById("favorite-list");
  results.forEach( favorite => {
    let listItem = document.createElement("li");
    let deleteItem = document.createElement("h4")
    listItem.id = `favorite-item${count}`
    deleteItem.id = `delete-favorite${count}`
    deleteItem.innerText = "Delete"
    listItem.innerText = favorite.name;
    favoriteList.append(listItem);
    favoriteList.append(deleteItem)

    let getDeleteButton = document.getElementById(`delete-favorite${count}`);
    let getListItem = document.getElementById(`favorite-item${count}`);
    getDeleteButton.addEventListener("click", function(event) { handleEvent: removeFavorite(getDeleteButton, getListItem, favorite) });
    
    count++;
  })

  let exitButton = document.getElementById("exit-button-favorite");
  exitButton.addEventListener("click", function(event) { handleEvent: exitCard(favoritesDiv) });
}

function createNewFavorite(event, favoritesDiv, results) {
  event.preventDefault();
  const newFavoriteFormData = new FormData(event.target);
  const newFavorite = newFavoriteFormData.get("favorites");
  const favoriteJson = {
    "name": newFavorite
  }

  fetch(favoritesURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(favoriteJson)
  })
    .then(parseJSON)
    .then(result => appendNewFavorite(result))

}

function appendNewFavorite(result) {
  let count = 100000;
  const favoriteList = document.getElementById("favorite-list");
  let listItem = document.createElement("li");
  let deleteItem = document.createElement("h4")
  listItem.id = `favorite-item${count}`
  deleteItem.id = `delete-favorite${count}`
  deleteItem.innerText = "Delete"
  listItem.innerText = result.name;
  favoriteList.append(listItem);
  favoriteList.append(deleteItem)


  let getDeleteButton = document.getElementById(`delete-favorite${count}`);
  let getListItem = document.getElementById(`favorite-item${count}`);

  deleteItem.addEventListener("click", function(event) { handleEvent: removeFavorite(getDeleteButton, getListItem, result) });
  count++
}

function removeFavorite(listItem, deleteItem, favorite) {

  listItem.parentNode.removeChild(listItem)
  deleteItem.parentNode.removeChild(deleteItem)

  fetch(`${favoritesURL}/${favorite.id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })

}

function blacklistButtonClicked() {

  if(!localStorage.getItem("token")) {
    alert("Please sign in to access sign in features!")
  } else {

  fetch(blacklistURL, { 
    headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(parseJSON)
    .then(results => createBlacklistPage(results))
  }
}

function createBlacklistPage(results) {

  let listItemTest = document.getElementById("blacklist-div")

  if(listItemTest) {
    listItemTest.parentNode.removeChild(listItemTest)
  }

  const blacklistDiv = document.createElement("div")
  blacklistDiv.id = "blacklist-div"
  blacklistDiv.innerHTML = `
  <i id="exit-button-blacklist" class="fa fa-times"></i>
    <h2>Blacklisted Places</h2>
    <form id="newBlack">
    <input name="blacklist" type="blacklist" placeholder="Enter New Blacklist!">
    <button id="submit" type="submit">Submit</button>
    </form>
    <ul id="blacklist-list"></ul>
  `

  document.body.append(blacklistDiv);

  let newBlacklistListener = document.getElementById("newBlack")
  newBlacklistListener.addEventListener("submit", function(event) { handleEvent: createNewBlacklist(event, results) });
  createBlackList(blacklistDiv, results)
}

function createBlackList(blacklistDiv, results) {

  let count = 0;

  const blacklistList = document.getElementById("blacklist-list");
  console.log(results)
  results.forEach( blacklist => {
    let listItem = document.createElement("li");
    let deleteItem = document.createElement("h4")
    listItem.id = `blacklist-item${count}`
    deleteItem.id = `delete-blacklist${count}`
    deleteItem.innerText = "Delete"
    listItem.innerText = blacklist.name;
    blacklistList.append(listItem);
    blacklistList.append(deleteItem)

    let getDeleteButton = document.getElementById(`delete-blacklist${count}`)
    let getListItem = document.getElementById(`blacklist-item${count}`)
    getDeleteButton.addEventListener("click", function(event) { handleEvent: removeBlacklist(getDeleteButton, getListItem, blacklist) })
    
    count++;
  })

  let exitButton = document.getElementById("exit-button-blacklist");
  exitButton.addEventListener("click", function(event) { handleEvent: exitCard(blacklistDiv) });
}

function createNewBlacklist(event, results) {
  event.preventDefault();
  const newBlacklistFormData = new FormData(event.target);
  const newBlacklist = newBlacklistFormData.get("blacklist");
  const blacklistJson = {
    "name": newBlacklist
  }
  fetch(blacklistURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(blacklistJson)
  })
    .then(parseJSON)
    .then(result => appendNewBlacklist(result))
}

function appendNewBlacklist(result) {
  let count = 200000;
  const blacklistList = document.getElementById("blacklist-list");
  let listItem = document.createElement("li");
  let deleteItem = document.createElement("h4")
  listItem.id = `blacklist-item${count}`
  deleteItem.id = `delete-blacklist${count}`
  deleteItem.innerText = "Delete"
  listItem.innerText = result.name;
  blacklistList.append(listItem);
  blacklistList.append(deleteItem)

  let getDeleteButton = document.getElementById(`delete-blacklist${count}`);
  let getListItem = document.getElementById(`blacklist-item${count}`);

  deleteItem.addEventListener("click", function(event) { handleEvent: removeBlacklist(getDeleteButton, getListItem, result) });
  count++
}

function removeBlacklist(listItem, deleteItem, blacklist) {

  listItem.parentNode.removeChild(listItem)
  deleteItem.parentNode.removeChild(deleteItem)

  fetch(`${blacklistURL}/${blacklist.id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })

}

function settingsButtonClicked() {
  if(localStorage.getItem("token")) {
    alert("Please sign in to access sign in features!")
  }
}

function createNonAccountListeners() {
  var restaurantButton = document.getElementById("restaurant-button");
  var outdoorButton = document.getElementById("outdoor-button");
  var indoorButton = document.getElementById("indoor-button");
  var shopButton = document.getElementById("shopping-button");
  var headingButton = document.getElementById("header-text")
  var themeButton = document.getElementById("themeButton")
  var fastFoodButton = document.getElementById("fast-food-button")



  fastFoodButton.addEventListener("click", function(event) { handleEvent: fastFoodSearch() });
  restaurantButton.addEventListener("click", function(event) { handleEvent: restaurantSearch() });
  indoorButton.addEventListener("click", function(event) { handleEvent: indoorSearch() });
  outdoorButton.addEventListener("click", function(event) { handleEvent: outdoorSearch() });
  shopButton.addEventListener("click", function(event) { handleEvent: shoppingSearch() });
  headingButton.addEventListener("click", function(event) { handleEvent: resetPage() });
  themeButton.addEventListener("click", function(event){ handleEvent: changeTheme() });
}

function createWelcomeMessage() {

  var loginDiv = document.getElementById("login");
  var loginForm = document.getElementById("login-user");
  var signUp = document.getElementById("sign-up");
  var createAccount = document.getElementById("create-account");
  var createAccount2 = document.getElementById("create-account2");
  if(createAccount){
    createAccount.parentNode.removeChild(createAccount);
    createAccount2.parentNode.removeChild(createAccount2);
    loginForm.parentNode.removeChild(loginForm);
    signUp.parentNode.removeChild(signUp);
  }

  welcomeMessageTest = document.getElementById("welcome-message");
  
  if(!welcomeMessageTest) {
    createUser = document.getElementById("create-user");
    if(createUser) {
      createUser.parentNode.removeChild(createUser);
    }
    welcomeMessage = document.createElement("h2");
    welcomeMessage.id = "welcome-message";
    if (localStorage.getItem('username') === 'null') {
      resetPage();
    }
    welcomeMessage.innerText = `Welcome Back ${localStorage.getItem('username')}!`;

    logout = document.createElement("a");
    logout.id = "logout";
    logout.innerText = "Logout";

  
    loginDiv.append(welcomeMessage);
    loginDiv.append(logout);

    logout.addEventListener("click", () => {
      localStorage.clear();
      resetPage();
    })
  }
}

function displaySignUp(event) {
  event.preventDefault();
  const login = document.getElementById("login")
  const createAccount = document.getElementById("create-account")
  const createAccount2 = document.getElementById("create-account2")
  const createForm = document.getElementById("login-user");
  const createAccountButton = document.getElementById("submit")
  createForm.parentNode.removeChild(createForm)
  createAccount.parentNode.removeChild(createAccount)
  createAccount2.parentNode.removeChild(createAccount2)
  createAccountButton.parentNode.removeChild(createAccountButton)

  console.log(login)

  const newForm = document.createElement("form")
  newForm.id = "create-user"

  login.append(newForm)

  const usernameInput = document.createElement("input")
  usernameInput.name = "username"
  usernameInput.type = "username"
  usernameInput.placeholder = "Username"

  const passwordInput = document.createElement("input")
  passwordInput.name = "password"
  passwordInput.type = "password"
  passwordInput.placeholder = "Password"

  const newButton = document.createElement("button")
  newButton.id = "submit"
  newButton.type = "submit"
  newButton.textContent = "submit"

  newForm.append(usernameInput)
  newForm.append(passwordInput)
  newForm.append(newButton)

  newForm.addEventListener("submit", function(event) { handleEvent: createNewUser(event) });
}

function createNewUser(event) {
  event.preventDefault();
  const createNewFormData = new FormData(event.target)
  const username = createNewFormData.get("username")
  const password = createNewFormData.get("password")
  const userData = { username, password }
  console.log("Made it to post fetch")
  fetch(usersURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
  .then(parseJSON)
  .then(result => successfulCreateLogin(result))
}

function successfulCreateLogin(user) {

  newUser = user.user

  localStorage.setItem('token', user.token);
  localStorage.setItem('username', newUser.username);

  
  createWelcomeMessage();
  // resetPage();
}

function loginUser(event) {
  event.preventDefault();
  const loginFormData = new FormData(event.target)
  const username = loginFormData.get("username")
  const password = loginFormData.get("password")
  const userData = { username, password }

  fetch(loginURL, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(parseJSON)
    .then(result => successfulLogin(result))

}

function successfulLogin(user) {

  if(user.username != undefined) {
    localStorage.setItem('token', user.token);
    localStorage.setItem('username', user.username);
    
    createWelcomeMessage();
    resetPage();
  } else {
    alert("Either username or password is incorrect. Please try again")
  }
}

function parseJSON(response) {
  return response.json();
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

function fastFoodSearch() {
  fastFoodArray = ["Fast Food"]
  searchPlacesApiForKeyword(fastFoodArray, "yellow")
}

function restaurantSearch() {
    const restaurantType = ["restaurant"];
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
  const storeTypes = ["book store", "clothing store", "department store", "shoe store", "electronics store", "furniture store"];
  searchPlacesApiForKeyword(storeTypes, "orange");
}

function searchPlacesApiForKeyword(keyArray, color) {
  map.setZoom(12)
  for(let i = 0; i < keyArray.length; i++) {
      var request = {
          location: pos,
          openNow: true,
          radius: 15000,
          rankBy: google.maps.places.RankBy.PROMINENCE,
          query: keyArray[i]
      };

      service = new google.maps.places.PlacesService(map);
      service.textSearch(request, function(results, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            addMenuButton(results);
            for (let i = 0; i < results.length; i++) {
              createMarker(results[i], color);
              var itemList = document.getElementById("item-list");
              let item = document.createElement("li");
              item.innerText = results[i].name;
              itemList.append(item);
              item.addEventListener("click", function(event){ handleEvent: showResultCard(results[i], results) });
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

function addMenuButton(results) {
    
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

    var favoriteButton = document.createElement("h2");
    favoriteButton.id = "favorite-button"
    favoriteButton.innerText = "random with favorites";
    menuButtons.append(favoriteButton);

    var removeBlacklistButton = document.createElement("h2");
    removeBlacklistButton.id = "remove-blacklist-button"
    removeBlacklistButton.innerText = "random with blacklist";
    menuButtons.append(removeBlacklistButton);
      
    var clearButton = document.createElement("h2");
    clearButton.innerText = "Clear List";
    menuButtons.append(clearButton);

    clearButton.addEventListener("click", () => {
      resetPage();
    });

    favoriteButton.addEventListener("click", function(event){ handleEvent: favoriteButtonEvent(results)});
    removeBlacklistButton.addEventListener("click", function(event){ handleEvent: blacklistButtonEvent(results)});
    randomButton.addEventListener("click", function(event){ handleEvent: randomButtonEvent(results)});
  }
}

function showResultCard(result, results) {

  checkIfCardExists()

  try {
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
      <a href="https://www.google.com/maps/search/${result.formatted_address.replace(" ", "+")}">Address: ${result.formatted_address}</a>
      <h2 id="try-again-button">Try Another?</h2>
      `;
  
    document.body.append(resultCard);
    window.scrollTo(0,0);
  
    let tryAgainButton = document.getElementById("try-again-button");
    tryAgainButton.addEventListener("click", function(event) { handleEvent: randomButtonEvent(results) })
  
    let exitButton = document.getElementById("exit-button");
    exitButton.addEventListener("click", function(event) { handleEvent: exitCard(resultCard) });
  } catch(err) {
    alert("error")
  }
}

function exitCard(card) {
  card.parentNode.removeChild(card)
}

function favoriteButtonEvent(placeListResults){
  checkIfCardExists();
  fetch(favoritesURL, { headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(parseJSON)
    .then(results => checkIfRandomFavPickMatches(results, placeListResults))

}

function checkIfRandomFavPickMatches(favoritesList, placeListResults) {
  for(let j = 0; j < placeListResults.length; j++) {
    for(let i = 0; i < favoritesList.length; i++) {
      if(placeListResults[j].name === favoritesList[i].name) {
        return showResultCard(placeListResults[j], placeListResults)
      }
    }
  }

  alert("No Favorites Near You")
}

function randomButtonEvent(results) {
  checkIfCardExists();
  if(results != undefined) {
    let randomResultPick = Math.floor(Math.random() * (results.length + 1))
    showResultCard(results[randomResultPick], results)
  } else {
    alert("Problem occoured! Try again.")
  }
}

function blacklistButtonEvent(placeListResults) {
  checkIfCardExists();
  fetch(blacklistURL, { headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(parseJSON)
    .then(results => checkIfRandomPickMatchesBlacklist(results, placeListResults))
}

function checkIfRandomPickMatchesBlacklist(blackListItem, placeListResults) {
  let randomResultPick = Math.floor(Math.random() * (placeListResults.length + 1))

  for(let i = 0; i < blackListItem.length; i++) {
    if(placeListResults[randomResultPick].name === blackListItem[i].name) {
      checkIfRandomPickMatchesBlacklist(blackListItem, placeListResults);
    }
  }
  
  showResultCard(placeListResults[randomResultPick], placeListResults)

}

function checkIfCardExists() {
  let resultCardCheck = document.getElementById("result-card");
  if(resultCardCheck) { exitCard(resultCardCheck) }
}