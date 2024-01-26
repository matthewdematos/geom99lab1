function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat:  47.104290, lng: -40.677662 },
          zoom: 3.5,
          });
        const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          // Add some markers to the map.
          // Note: The code uses the JavaScript Array.prototype.map() method to
          // create an array of markers based on a given "locations" array.
          // The map() method here has nothing to do with the Google Maps API.
        const markers = locations.map((location, i) => {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
          });
        });
          // Add a marker clusterer to manage the markers.
        new MarkerClusterer(map, markers, {
          imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
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
    count = (count + 1) % 200;

    const icons = lifePath.get("icons");

    icons[0].offset = count / 6 + "%";
    lifePath.set("icons", icons);
  }, 20);
}

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

window.initMap = initMap;
      
