function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 47.104290, lng: -40.677662 },
    zoom: 4,
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

  const place1 = "1994: Wasaga Beach. Not a lot of memories, but my mom thought it wouldn't be a good place to raise kids.";
  const place2 = "1999: Elliot Lake. Was only here for a short time, but the Canadian Shield stuck with me forever.";
  const place3 = "2000: Brampton. My bedroom was a storage closet and I went to a Catholic school. C-.";
  const place4 = "2001: Toronto. Well, North York. The lady next door was Barb the Smoking Lady and we had a view of the 401 which was very entertaining.";
  const place5 = "2002: Richmond Hill (downtown). Beautiful heritage home on a lovely street. First place that felt like home.";
  const place6 = "2006: Richmond Hill (Oak Ridges). This was a new build, and on the date we were supposed to move in, they didn't even have a permit to build. Nice place when it was built, though!";
  const place7 = "2013: Newmarket: [REDACTED].";
  const place8 = "2014: Herne Bay. Beautiful view of the Thames Estuary and the local pub. Beachside walks and musical theatre. A treasure.";
  const place9 = "2014: Canterbury. Didn't notice there was an old Norman castle at the roundabout on my street until 6 months in. Walked to work on an ancient Roman city wall. Awesome.";
  const place10 = "2016: Barrie. Really not that exciting compared to the last two.";
  const placeInfo = [place1, place2, place3, place4, place5, place6, place7, place8, place9, place10];

  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  for (let i = 0; i < placeInfo.length; ++i) {
    const infowindow = new google.maps.InfoWindow({
      content: placeInfo[i],
    });

    markers[i].addListener("click", () => {
      infowindow.open(map, markers[i]);
    });

    addPlaceInfo(markers[i], placeInfo[i]);
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

  const title = document.createElement("button");

  title.textContent = "Click on a marker to learn more about places I've lived!";
  title.classList.add("title-button");
}

function animateArrow(lifePath) {
  let count = 0;

  window.setInterval(() => {
    count = (count + 1) % 1000;

    const icons = lifePath.get("icons");

    icons[0].offset = count / 10 + "%";
    lifePath.set("icons", icons);
  }, 20);
}

function addPlaceInfo(marker, placeInfo) {
  const infowindow = new google.maps.InfoWindow({
    content: placeInfo,
  });

  marker.addListener("click", () => {
    infowindow.open(marker.getMap(), marker);
  });
}

window.initMap = initMap;
