import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
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

    // Add navigation control (the +/- zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

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