import React, { useEffect, useRef } from 'react';
import { loadModules } from 'esri-loader';
import './Map.css';
const WebMapView = () => {
    const mapRef = useRef();

    useEffect(
      () => {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules(['esri/widgets/Track','esri/Map', 'esri/views/MapView', 'esri/widgets/Directions',
        'esri/symbols/SimpleMarkerSymbol',
        'esri/tasks/RouteTask',
          'esri/tasks/support/RouteParameters',
          'esri/tasks/support/FeatureSet',
          'esri/Graphic',
        'esri/widgets/Compass'], { css: true })
        .then(([Track, ArcGISMap, MapView, Directions, SimpleMarkerSymbol, RouteTask, RouteParameters, FeatureSet, Graphic, Compass]) => {
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
          var directions = new Directions({
            view: view,
            routeServiceUrl: "https://utility.arcgis.com/usrsvcs/appservices/Wwt6XPcc8Kt8QLYe/rest/services/World/Route/NAServer/Route_World"
          });
          view.ui.add(directions, "top-right");
    
          function createStopSymbol(color, size) {
              return new SimpleMarkerSymbol({
                style: "simple-marker",
                size: size,
                outline: {
                  width: "2px",
                  color: "white"
                },
                color: color
              });
            }
    
            // Stop symbols
            directions.stopSymbols.first = createStopSymbol("green","14px");
            directions.stopSymbols.middle = createStopSymbol("black","10px");
            directions.stopSymbols.last = createStopSymbol("red","14px");
    
            // Route symbol
            directions.routeSymbol.width = "2";
            directions.routeSymbol.color = [0, 0, 0, 0.75];
            directions.routeSymbol.style = "short-dot";
    
            
            var routeTask = new RouteTask({
             url: "https://utility.arcgis.com/usrsvcs/appservices/Wwt6XPcc8Kt8QLYe/rest/services/World/Route/NAServer/Route_World"
          });
          view.on("click", function(event){
            if (view.graphics.length === 0) {
              addGraphic("start", event.mapPoint);
            } else if (view.graphics.length === 1) {
              addGraphic("finish", event.mapPoint);
              //*** ADD ***//
              getRoute();
            } else {
              view.graphics.removeAll();
              addGraphic("start",event.mapPoint);
            }
          });
    
          function addGraphic(type, point) {
            var graphic = new Graphic({
              symbol: {
                type: "simple-marker",
                color: (type === "start") ? "white" : "black",
                size: "8px"
              },
              geometry: point
            });
            view.graphics.add(graphic);
          }
    
          function getRoute() {
            // Setup the route parameters
            var routeParams = new RouteParameters({
              stops: new FeatureSet({
                features: view.graphics.toArray() // Pass the array of graphics
              }),
              returnDirections: true
            });
            // Get the route
            routeTask.solve(routeParams).then(function(data) {
              // Display the route
              data.routeResults.forEach(function(result) {
                result.route.symbol = {
                  type: "simple-line",
                  color: [5, 150, 255],
                  width: 3
                };
                view.graphics.add(result.route);
              });
            });
          }
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