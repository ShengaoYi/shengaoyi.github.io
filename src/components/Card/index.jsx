import React from "react";
import {Card} from 'antd';
import './index.css';
const {Meta} = Card;

const MyCard = (props) => (
    <Card className="my-card" hoverable={true}>
        <div className="card-img-container">
            <img src={props.imageUrl} alt="Project" className="card-img" />
        </div>
        <div style={{ paddingLeft: '5px', paddingRight: '5px', flex: 1 }}>
            <Meta
                title={
                    <span style={{fontSize: '18px', textAlign: 'center', fontWeight: "bold", display: 'block'}}>
                        {props.title}
                    </span>
                }
                description={props.description}
                style={{ fontWeight: "bold", color: "white" }}
            />
        </div>
    </Card>



);

export default MyCard;