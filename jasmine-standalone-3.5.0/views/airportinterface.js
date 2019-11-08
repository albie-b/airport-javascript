$(document).ready(function(){
  var weather = new Weather();
  var airport = new Airport(weather);
  var plane = new Plane();
  updateHangar();

  // $('#land').click(function() {
  //   plane.land(airport)
  //   updateHangar();
  // });
  // $('#takeoff').click(function() {
  //   plane.takeoff(airport)
  //   updateHangar();
  // });
  function updateHangar() {
    $('#hangar-space').text(airport.space);
  };
});
