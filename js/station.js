function Station(name) {
  this._name=name
} 
Station.prototype = {
  getname:function() {
    return this._name
  }
}