import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'; // 引入 MapboxGeocoder
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'; // 引入 MapboxGeocoder 的 CSS
import './index.css';

mapboxgl.accessToken = 'pk.eyJ1IjoieWVzZW5pYW8iLCJhIjoiY2xrMjhwOWczMDBpYzNlcXBsanZmaDhjdCJ9.9dLoG5t_-OMelTBRWdlKRw';

const AlbedoMap = ({ center, zoom, legendData, rasterValues }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [mapStyle, setMapStyle] = useState('mapbox://styles/mapbox/satellite-v9'); // 默认底图样式
  const [isAlbedoLayerVisible, setIsAlbedoLayerVisible] = useState(true); // 控制Albedo图层的状态

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
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

    map.current.on('load', () => {

      map.current.addSource('atlanta_albedo', {
        'type': 'raster',
        'url': 'mapbox://yeseniao.cs09sm2b',
        'tileSize': 64,
      });

      map.current.addLayer({
        'id': 'atlanta-albedo',
        'type': 'raster',
        'source': 'atlanta_albedo',
        'paint': {
          "raster-color": [
            "interpolate",
            ["linear"],
            ["raster-value"],
            rasterValues[0] / 255, "rgb(0,0,0)",     // 第一个停止点，值为5，颜色为黑色
            rasterValues[1] / 255, "rgb(87,16,110)", // 第二个停止点，值为14，颜色为紫色
            rasterValues[2] / 255, "rgb(188,55,85)",  // 第三个停止点，值为19，颜色为红色
            rasterValues[3] / 255, "rgb(255,141,10)", // 第四个停止点，值为26，颜色为橙色
            rasterValues[4] / 255, "rgb(253,255,165)"  // 第五个停止点，值为76，颜色为黄色
          ],
          "raster-resampling": "nearest",
        }
      });

      map.current.addSource('austin_albedo1', {
        'type': 'raster',
        'url': 'mapbox://yeseniao.3z86o2cj',
        'tileSize': 64,
      });

      map.current.addLayer({
        'id': 'austin-albedo1',
        'type': 'raster',
        'source': 'austin_albedo1',
        'paint': {
          "raster-color": [
            "interpolate",
            ["linear"],
            ["raster-value"],
            rasterValues[0] / 255, "rgb(0,0,0)",     // 第一个停止点，值为5，颜色为黑色
            rasterValues[1] / 255, "rgb(87,16,110)", // 第二个停止点，值为14，颜色为紫色
            rasterValues[2] / 255, "rgb(188,55,85)",  // 第三个停止点，值为19，颜色为红色
            rasterValues[3] / 255, "rgb(255,141,10)", // 第四个停止点，值为26，颜色为橙色
            rasterValues[4] / 255, "rgb(253,255,165)"  // 第五个停止点，值为76，颜色为黄色
          ],
          "raster-resampling": "nearest",
        }
      });

      map.current.addSource('austin_albedo2', {
        'type': 'raster',
        'url': 'mapbox://yeseniao.9waart6k',
        'tileSize': 64,
      });

      map.current.addLayer({
        'id': 'austin-albedo2',
        'type': 'raster',
        'source': 'austin_albedo2',
        'paint': {
          "raster-color": [
            "interpolate",
            ["linear"],
            ["raster-value"],
            rasterValues[0] / 255, "rgb(0,0,0)",     // 第一个停止点，值为5，颜色为黑色
            rasterValues[1] / 255, "rgb(87,16,110)", // 第二个停止点，值为14，颜色为紫色
            rasterValues[2] / 255, "rgb(188,55,85)",  // 第三个停止点，值为19，颜色为红色
            rasterValues[3] / 255, "rgb(255,141,10)", // 第四个停止点，值为26，颜色为橙色
            rasterValues[4] / 255, "rgb(253,255,165)"  // 第五个停止点，值为76，颜色为黄色
          ],
          "raster-resampling": "nearest",
        }
      });

      map.current.addSource('philadelphia_albedo', {
        'type': 'raster',
        'url': 'mapbox://yeseniao.7mh79t1u',
        'tileSize': 64,
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
            rasterValues[0] / 255, "rgb(0,0,0)",     // 第一个停止点，值为5，颜色为黑色
            rasterValues[1] / 255, "rgb(87,16,110)", // 第二个停止点，值为14，颜色为紫色
            rasterValues[2] / 255, "rgb(188,55,85)",  // 第三个停止点，值为19，颜色为红色
            rasterValues[3] / 255, "rgb(255,141,10)", // 第四个停止点，值为26，颜色为橙色
            rasterValues[4] / 255, "rgb(253,255,165)"  // 第五个停止点，值为76，颜色为黄色
          ],
          "raster-resampling": "nearest",
        }
      });

      // 根据初始状态设置Albedo图层的可见性
      toggleAlbedoLayer(isAlbedoLayerVisible);
    });

    // 清理函数，组件卸载时移除地图
    return () => map.current.remove();
  }, [mapStyle]);

  useEffect(() => {
    if (map.current) {
      map.current.setCenter(center);  // 直接设置中心
      map.current.setZoom(zoom);
    }
  }, [center, zoom]);

  // 处理 Albedo 图层的显示和隐藏
  // const toggleAlbedoLayer = (isVisible) => {
  //   if (map.current.getLayer('atlanta-albedo')) {
  //     map.current.setLayoutProperty(
  //         'atlanta-albedo',
  //         'visibility',
  //         isVisible ? 'visible' : 'none'
  //     );
  //   }
  //   if (map.current.getLayer('philadelphia-albedo')) {
  //     map.current.setLayoutProperty(
  //         'philadelphia-albedo',
  //         'visibility',
  //         isVisible ? 'visible' : 'none'
  //     );
  //   }
  // };

  const toggleAlbedoLayer = (isVisible) => {
      const layers = map.current.getStyle().layers; // 获取所有图层

      layers.forEach(layer => {
          // 检查图层ID是否包含 '-albedo'，以识别 Albedo 图层
          if (layer.id.includes('-albedo')) {
              map.current.setLayoutProperty(
                  layer.id,
                  'visibility',
                  isVisible ? 'visible' : 'none'
              );
          }
          if (layer.id.includes('-albedo1')) {
              map.current.setLayoutProperty(
                  layer.id,
                  'visibility',
                  isVisible ? 'visible' : 'none'
              );
          }
          if (layer.id.includes('-albedo2')) {
              map.current.setLayoutProperty(
                  layer.id,
                  'visibility',
                  isVisible ? 'visible' : 'none'
              );
          }
      });
  };
  // 处理开关点击事件
  const handleAlbedoToggle = () => {
    const newVisibility = !isAlbedoLayerVisible;
    setIsAlbedoLayerVisible(newVisibility);
    toggleAlbedoLayer(newVisibility);
  };

  const commonColors = [
    "rgb(0,0,0)",
    "rgb(87,16,110)",
    "rgb(188,55,85)",
    "rgb(255,141,10)",
    "rgb(253,255,165)"
  ];

  const handleStyleChange = (event) => {
    setMapStyle('mapbox://styles/mapbox/' + event.target.value);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mapContainer} className="map" style={{ width: '100%', height: '100%' }} />

      <div id="menu" className="menu">
        <input id="satellite-v9" type="radio" name="rtoggle" value="satellite-v9" onChange={handleStyleChange} />
        <label htmlFor="satellite-v9">Satellite</label>
        <input id="standard" type="radio" name="rtoggle" value="standard" onChange={handleStyleChange} />
        <label htmlFor="standard">Map</label>

        <input id="toggle-albedo" type="checkbox" checked={isAlbedoLayerVisible} onChange={handleAlbedoToggle} />
        <label htmlFor="toggle-albedo">Albedo Layer</label>
      </div>

      <div className="legend">
        <h4>Surface Albedo</h4>
        <div className="legend-scale">
          {legendData.map((label, index) => (
            <div key={index} className="legend-item">
              <span className="legend-color" style={{ backgroundColor: commonColors[index] }}></span>
              <span className="legend-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AlbedoMap;