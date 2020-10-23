
import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import './Map.css';
export const WebMapView = () => {
    const mapRef = useRef();

  useEffect(
    () => {
      // this will lazy load the ArcGIS API
      // and then use Dojo's loader to require the classes
      loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
        .then(([ArcGISMap, MapView]) => {
          const map = new ArcGISMap({
            basemap: 'streets-navigation-vector'
          });

          const view = new MapView({
            container: mapRef.current,
            map: map,
            center: [-118, 34],
            zoom: 8
          });
          
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