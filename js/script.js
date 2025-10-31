function initMap() {
  const map = new google.maps.Map(document.getElementById("google-map"), {
    zoom: 12,
    center: { lat: -7.1572, lng: 111.8 },
    padding: { top: 90, right: 12, bottom: 12, left: 12 },
    zoomControl: true,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: true,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    }
  });
}