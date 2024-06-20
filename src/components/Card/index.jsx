import React from "react";
import {Card} from 'antd';
import './index.css';
const {Meta} = Card;

const MyCard = (props) => (
  <>
      <div className="card-img-container">
            <img src={props.imageUrl} alt="Project" className="card-img" />
      </div>
      <div style={{ paddingLeft: '5px', paddingRight: '5px', flex: 1 }}>
          <div className="image-title">{props.title}</div>
          <div className="image-subject">{props.description}</div>
      </div>
  </>
);

export default MyCard;