import React from "react";
import {Card} from 'antd';

const {Meta} = Card;

const MyCard = (props) => (
    <Card className="my-card"
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        hoverable={true}
        cover={
            <img src={props.imageUrl} style={{ maxWidth: '100%', margin: 'auto' }}/>
        }
    >
        <Meta title={props.title} description={props.description} style={{ textAlign: 'center' }}/>
    </Card>
);

export default MyCard;