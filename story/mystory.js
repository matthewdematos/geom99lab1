function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:  47.104290, lng: -40.677662 },
    zoom: 3.5,
  });
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const locations = [
    { lat: 44.515887, lng: -80.018285},
    { lat: 46.369597, lng: -82.669177},
    { lat: 43.7094533, lng: -79.7256149},
    { lat: 43.7405, lng: -79.4246224},
    { lat: 43.87663, lng: -79.4372},
    { lat: 43.923742, lng: -79.453232},
    { lat: 44.05217, lng: -79.460616},
    { lat: 51.37166, lng: 1.134472},
    { lat: 51.27309, lng: 1.06836},
    { lat: 44.3662912, lng: -79.6815738}
  ];
        
  const placeInfo = ["1994: Wasaga Beach is where I spent the first 5 years of my life, blissfully unaware of the party culture I was surrounded by. My mom decided this was not a good place to raise kids.", 
    "1999: Elliot Lake is where my grandma lived, and I spent just under a year here. Even at such a young age, I was taken by the beauty of the lakes and forests of the Canadian Shield."
    ];

  for (let i = 0; i < placeInfo.length; ++i) {
    const markers = locations.map((locations, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
        map: map,
      }
    });
                
    addPlaceInfo(markers, placeInfo[i]);
  }
        
  new MarkerClusterer(map, markers, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",            
  });
        
  var arrow = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    strokeColor: "#FFFFFF",
    scale: 2,
  };

  const lifePath = new google.maps.Polyline({
    path: locations,
    geodesic: true,
    strokeColor: "#2E8B57",
    strokeOpacity: 1.0,
    strokeWeight: 1.5,
    icons: [{
      icon: arrow,
      offset: '0%'
    }],
  });

  lifePath.setMap(map);

  animateArrow(lifePath);
}

// Use the DOM setInterval() function to change the offset of the symbol
// at fixed intervals.

function animateArrow(lifePath) {
  let count = 0;

  window.setInterval(() => {
    count = (count + 1) % 1000;

    const icons = lifePath.get("icons");

    icons[0].offset = count / 10 + "%";
    lifePath.set("icons", icons);
  }, 20);
}

function addPlaceInfo(markers, placeInfo) {
  const infowindow = new google.maps.InfoWindow({
    content: placeInfo,
  });
  marker.addListener("click", () => {
    infowindow.open(marker.get("map"), marker);
  });
}

window.initMap = initMap;
      
