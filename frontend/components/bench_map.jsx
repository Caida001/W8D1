import MarkerManager from '../util/marker_manager';

componentDidMount() {
  this.map = new google.maps.Map(mapDOMNode, mapOptions);
  this.MarkerManager = new MarkerManager(this.map);
}
