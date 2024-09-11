import React from 'react';
import './albedo_card.css'; // 这里包含自定义样式

const AlbedoCard = ({ name, greenViewIndex, populationDensity, imageUrl }) => (
  <div className="city-card">
    <div className="city-card-image" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="city-card-title">{name}</div>
    </div>
    <div className="city-card-content">
      <div className="city-card-stat">
        <span>Green View Index</span>
        <span className="city-card-stat-value" style={{ color: "green" }}>{greenViewIndex}%</span>
      </div>
      <div className="city-card-stat">
        <span>Population Density</span>
        <span className="city-card-stat-value">{populationDensity}</span>
      </div>
    </div>
  </div>
);

export default AlbedoCard;
