import React from "react";
import './Map.css';
import 'https://js.arcgis.com/4.16'
import 'https://js.arcgis.com/4.16/esri/themes/light/main.css'
require([
    "esri/widgets/Track",
    "esri/views/MapView",
    "esri/Map",
    "esri/widgets/Search",
    "esri/widgets/Compass"
  ], function (Track, MapView, Map, Search, Compass) {
    var map = new Map({
      basemap: "streets-navigation-vector"
    });
  
    var view = new MapView({
      map: map,
      container: "viewDiv"
    });
  
    // Create an instance of the Track widget
    // and add it to the view's UI
    var track = new Track({
      view: view
    });
    view.ui.add(track, "top-left");
  
    // The sample will start tracking your location
    // once the view becomes ready
    view.when(function () {
      track.start();
    });
  
    // Search widget
    var search = new Search({
        view: view
      });
  
      view.ui.add(search, "top-right");
      var compass = new Compass({
          view: view
        });
  
        // adds the compass to the top left corner of the MapView
        view.ui.add(compass, "top-left");
  });
  
  
const Map=({text})=>{
  return (
    <div className="Map-container">
     <label className="Map-label"> {text} </label>
    </div>
  );
}
export default  Map;