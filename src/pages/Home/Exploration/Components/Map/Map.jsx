import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import './Map.css';
const WebMapView = () => {
    const mapRef = useRef();

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules(['esri/widgets/Track','esri/Map', 'esri/views/MapView', 'esri/widgets/Search',
        'esri/widgets/Compass'], { css: true })
        .then(([Track, ArcGISMap, MapView, Search, Compass]) => {
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