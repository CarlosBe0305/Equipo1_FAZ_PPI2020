import React, { useEffect, useRef, useState } from 'react';
import { loadModules } from 'esri-loader';
import './Map.css';
const WebMapView = () => {
  const [markers, setMarkes] = useState([])

  async function getMarkers(){
    const response = await fetch('http://localhost:3000/api/baches')
    const data = await response.json()
    setMarkes(data)
  }
  
  useEffect(() => {
    getMarkers()
  }, [])

    const mapRef = useRef();
    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules(['esri/widgets/Track','esri/Map', 'esri/views/MapView', 'esri/widgets/Search',
        'esri/widgets/Compass', 'esri/Graphic'], { css: true })
        .then(([Track, ArcGISMap, MapView, Search, Compass, Graphic]) => {
          const map = new ArcGISMap({
            basemap:'streets-navigation-vector'
          });

          // load the map view at the ref's DOM node
          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-118, 34],
            zoom: 8
          });
          var track = new Track({
            view: view
          });
          view.ui.add(track, "top-left");
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
          markers.map(mark => {
            var point = {
              type: "point",  // autocasts as new Point()
              latitude: mark.Latitude,
              longitude: mark.Longitude
            };
            var markerSymbol = {
              type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
              color: [226, 119, 40]
            };
            
            // Create a graphic and add the geometry and symbol to it
            var pointGraphic = new Graphic({
              geometry: point,
              symbol: markerSymbol
            });
            view.graphics.add(pointGraphic);
          }
          )
      
      // adds the compass to the top left corner of the MapView
      view.ui.add(compass, "top-left");
          return () => {
            if (view) {
              // destroy the map view
              view.destroy();
            }
          };
        });
      }
    );

    return <div className="webmap" ref={mapRef} />;
};
export default WebMapView;