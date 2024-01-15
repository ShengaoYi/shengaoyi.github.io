import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './index.css';
import {Link} from 'react-router-dom';

mapboxgl.accessToken = 'pk.eyJ1IjoieWVzZW5pYW8iLCJhIjoiY2xrMjhwOWczMDBpYzNlcXBsanZmaDhjdCJ9.9dLoG5t_-OMelTBRWdlKRw';

export default function Map() {
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-80.5795);
    const [lat, setLat] = useState(39.828);
    const [zoom, setZoom] = useState(1.5);
    const [bounds] = useState([
        [-210, -30], // Southwest coordinates
        [150, 70] // Northeast coordinates
    ]);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/dark-v11",
            center: [lng, lat],
            zoom: zoom,
            maxBounds: bounds,
        });
        const size = 120;
        // This implements `StyleImageInterface`
        // to draw a pulsing dot icon on the map.
        const pulsingDot = {
            width: size,
            height: size,
            data: new Uint8Array(size * size * 4),
            // When the layer is added to the map,
            // get the rendering context for the map canvas.
            onAdd: function () {
                const canvas = document.createElement('canvas');
                canvas.width = this.width;
                canvas.height = this.height;
                this.context = canvas.getContext('2d')
            },
            // Call once before every frame where the icon will be used.
            render: function () {
                const duration = 1000;
                const t = (performance.now() % duration) / duration;
                const radius = (size / 2) * 0.3;
                const outerRadius = (size / 2) * 0.7 * t + radius;
                const context = this.context;
                // Draw the outer circle.
                context.clearRect(0, 0, this.width, this.height);
                context.beginPath();
                context.arc(
                    this.width / 2,
                    this.height / 2,
                    outerRadius,
                    0,
                    Math.PI * 2
                );
                context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
                context.fill();
                // Draw the inner circle.
                context.beginPath();
                context.arc(
                    this.width / 2,
                    this.height / 2,
                    radius,
                    0,
                    Math.PI * 2
                );
                context.fillStyle = 'rgb(241,138,35)';
                context.strokeStyle = 'white';
                context.lineWidth = 2 + 4 * (1 - t);
                context.fill();
                context.stroke();
                // Update this image's data with data from the canvas.
                this.data = context.getImageData(
                    0,
                    0,
                    this.width,
                    this.height
                ).data;

                // Continuously repaint the map, resulting
                // in the smooth animation of the dot.
                map.triggerRepaint();

                // Return `true` to let the map know that the image was updated.
                return true;
            }
        };

        map.on("load", function () {
            // Add an image to use as a custom marker
            map.loadImage(
                "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
                function (error, image) {
                    if (error) throw error;
                    // map.addImage("custom-marker", image);
                    map.addImage('pulsing-dot', pulsingDot, {pixelRatio: 2});
                    // Add a GeoJSON source with multiple points
                    map.addSource("points", {
                        type: "geojson",
                        data: {
                            type: "FeatureCollection",
                            'features': [
                                {
                                    'type': 'Feature',
                                    'properties': {
                                        "title": "Tencent",
                                        'description':
                                            '<div style="font-size: 18px;"><strong>Shenzhen, CN</strong></div><p style="font-size: 15px; font-family: sans-serif">I completed my first internship at <a href="https://www.tencent.com/en-us/" target="_blank">Tencent</a> (09.2021 - 06.2022), an internet gaint in China. I worked with a project focused on detecting fraudulent user behaviors by analyzing multi-source\n' +
                                            'spatio-temporal data and WeChat user trajectories.</p>',
                                    },
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [113.93037850672769, 22.526151772994262]
                                    }
                                },
                                {
                                    'type': 'Feature',
                                    'properties': {
                                        "title": "SZU",
                                        'description':
                                            '<div style="font-size: 18px;"><strong>Shenzhen, CN</strong></div><p style="font-size: 15px; font-family: sans-serif">I majored in Geospatial Information Engineering at Shenzhen University (2018-2022), supervised by <a href="https://saup.szu.edu.cn/info/1093/1504.htm" target="_blank">Prof. Wei Tu</a>.</p>',
                                    },
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [113.93037447645084, 22.533974099696355]
                                    }
                                },
                                {
                                    'type': 'Feature',
                                    'properties': {
                                        "title": "CityDNA",
                                        'description':
                                            '<div style="font-size: 18px;"><strong>Beijing, CN</strong></div><p style="font-size: 15px; font-family: sans-serif">I completed my summer internship as a data analyst at <a href="https://www.citydnatech.com/#/index" target="_blank"> CityDNA</a> (05.2023-08.2023).</p>',
                                    },
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [116.45693925104364, 39.89265062552829]
                                    }
                                },
                                {
                                    'type': 'Feature',
                                    'properties': {
                                        "title": "UPenn",
                                        'description':
                                            '<div style="font-size: 18px;"><strong>Philadelphia, PA</strong></div><p style="font-size: 15px; font-family: sans-serif">I graduated from the <a href="https://www.design.upenn.edu/urban-spatial-analytics" target="_blank">Master of Urban Spatial Analytics</a> at University of Pennsylvania (2022-2023).</p>',
                                    },
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [-75.1938017118167, 39.95188277334713]
                                    }
                                },
                                {
                                    'type': 'Feature',
                                    'properties': {
                                        "title": "Temple",
                                        'description':
                                            '<div style="font-size: 18px;"><strong>Philadelphia, PA</strong></div><p style="font-size: 15px; font-family: sans-serif">I am an Geography Ph.D. student at Temple University (09.2023-), supervised by <a href="https://www.urbanspatial.info" target="_blank"> Prof. Xiaojiang Li</a>.</p>',
                                    },
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [-75.152322252671, 39.981458836421396]
                                    }
                                },
                                {
                                    'type': 'Feature',
                                    'properties': {
                                        "title": "MIT",
                                        'description':
                                            '<div style="font-size: 18px;"><strong>Cambridge, MA</strong></div><p style="font-size: 15px; font-family: sans-serif">I am serving a research intern at <a href="https://mobility.mit.edu/" target="_blank"> Urban Mobility Lab</a>, MIT (06.2023-)</p>',
                                    },
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [-71.09313647863642, 42.35924784630024]
                                    }
                                },
                                {
                                    'type': 'Feature',
                                    'properties': {
                                        "title": "Wildfire",
                                        'description':
                                            '<div style="font-size: 18px;"><strong>California, CA</strong></div> <a href="/Wildfire"><p style="font-size: 15px; font-family: sans-serif">California wildfire prediction project.</a> </p>',
                                    },
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [-119.93306839942996, 36.39483668611825]
                                    }
                                },
                                {
                                    'type': 'Feature',
                                    'properties': {
                                        "title": "RATScreener",
                                        'description':
                                            '<div style="font-size: 18px;"><strong>Washington, DC</strong></div> <a href="/RATScreener"><p style="font-size: 15px; font-family: sans-serif">A Vermin Inspection Optimization Tool.</a> </p>',
                                    },
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': [-77.01940102249893, 38.91288757461202]
                                    }
                                },


                            ]
                        },
                    });
                    // Add a symbol layer
                    map.addLayer({
                        id: "points",
                        type: "symbol",
                        source: "points",
                        layout: {
                            "icon-image": "pulsing-dot",
                            'icon-size': 0.5, // 设置为固定值
                            'icon-allow-overlap': true,
                            'icon-ignore-placement': true,
                            "icon-padding": 10,
                            'text-allow-overlap': true,
                            // get the title name from the source's "title" property
                            "text-field": ["get", "title"],
                            'text-size': 12,
                            "text-offset": [0, 1],
                            "text-variable-anchor": ["top", "bottom", "left"],
                        },
                        paint: {
                            "text-color": "#ffffff" // 设置文字颜色为白色
                        }
                    });
                }
            );
        });
        map.on('click', 'points', (e) => {
            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

            map.flyTo({
                center: [coordinates[0], coordinates[1]],
                zoom: 12,
                essential: true // this animation is considered essential with respect to prefers-reduced-motion
            });

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            console.log(coordinates)

            new mapboxgl.Popup()
                .setLngLat(coordinates)
                .setHTML(description)
                .addTo(map);
        });

        // Add navigation control (the +/- zoom buttons)
        map.addControl(new mapboxgl.NavigationControl(), "top-right");

        // Clean up on unmount
        return () => map.remove();
    }, []);


    return (
        <div ref={mapContainer} className="map"/>
    );
}