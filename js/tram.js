function Tram (route,startingStation) {
 this._route = route
 this._currentStation = startingStation
}
Tram.prototype = {
getCurrentStation: function() {
  return this._currentStation
},
drive: function() { 
  var routeStations = this._route.getStations()
  var currentStationIndex = routeStations.indexOf(this._currentStation)
  var nextStationIndex = currentStationIndex + 1
  if (nextStationIndex >= routeStations.length) {
return "End Of Line!"

  }
this._currentStation= routeStations[nextStationIndex]
return "This train starts at: " + this._route.getStartingStation +" And Terminates at" + this.route.getTerminatingStation +  ". \n now arriving at: " + this._currentStation.getName()
}
}