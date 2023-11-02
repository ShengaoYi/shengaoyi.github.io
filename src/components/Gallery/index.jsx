import React from 'react';
import './index.css';

const Gallery = ({ imageUrl, title, description }) => {
    return (
        <div className="gallery-container">
            <div className="gallery-image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="gallery-description">
                <div className="gallery-title">{title}</div>
                <div>{description}</div>
            </div>
        </div>
    );
}

export default Gallery;
