import React from "react";
import './index.css';

const MyCard = (props) => (
  <article className="work-card">
      <div className="card-img-container">
            <img src={props.imageUrl} alt="Project" className="card-img" />
      </div>
      <div className="work-card-body">
          <h3 className="image-title">{props.title}</h3>
          {props.journal && <div className="journal">{props.journal}</div>}
          <div className="image-subject">{props.description}</div>
      </div>
  </article>
);

export default MyCard;
