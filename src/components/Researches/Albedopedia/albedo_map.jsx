import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'; // 引入 MapboxGeocoder
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'; // 引入 MapboxGeocoder 的 CSS
import './index.css';

mapboxgl.accessToken = 'pk.eyJ1IjoieWVzZW5pYW8iLCJhIjoiY2xrMjhwOWczMDBpYzNlcXBsanZmaDhjdCJ9.9dLoG5t_-OMelTBRWdlKRw';

const AlbedoMap = ({ center, zoom }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    // if (map.current) return; // Initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: center,
      zoom: zoom,
      maxBounds: [
        [-210, -30], // Southwest coordinates
        [150, 70], // Northeast coordinates
      ],
    });


    map.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        language: 'en'
      })
    );

    // Add navigation control (the +/- zoom buttons)
    // map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');


    // Add the tileset
    map.current.on('load', () => {
      map.current.addSource('philadelphia_albedo', {
        'type': 'raster',
        'url': 'mapbox://yeseniao.7mh79t1u',
        'tileSize': 256,
      });

      map.current.addLayer({
        'id': 'philadelphia-albedo',
        'type': 'raster',
        'source': 'philadelphia_albedo',
        'paint': {
          "raster-color": [
            "interpolate",
            ["linear"],
            ["raster-value"],
            1 / 258, "rgb(0,0,0)",     // 第一个停止点，值为5，颜色为黑色
            13 / 258, "rgb(87,16,110)", // 第二个停止点，值为14，颜色为紫色
            19 / 258, "rgb(188,55,85)",  // 第三个停止点，值为19，颜色为红色
            24/ 258, "rgb(255,141,10)", // 第四个停止点，值为26，颜色为橙色
            32 / 258, "rgb(253,255,165)"  // 第五个停止点，值为76，颜色为黄色
          ],
          "raster-color-range": [1 / 258, 77 / 258],
          "raster-resampling": "nearest",
        }
      });

    });

    // Clean up on unmount
    return () => map.current.remove();
  }, []);

  useEffect(() => {
    if (map.current) {
      map.current.flyTo({
        center: center,
        zoom: zoom,
        essential: true,
      });
    }
  }, [center, zoom]);

  return <div ref={mapContainer} className="map" />;
};

export default AlbedoMap;