function initMap(){
  var location = { lat: 30.04442, lng: 31.235712 };
  var map = new google.maps.Map(document.getElementById("map"),{
    zoom: 4, 
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}