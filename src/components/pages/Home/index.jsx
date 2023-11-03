import Map from "../../Map";
import {Layout} from "antd";
import Projects from "../../Projects";
import React from "react";
import {Route} from "react-router-dom";
import CustomHeader from "../../Header";
import './index.css';
const { Content } = Layout;

const Home = () => (
    <div id="top">
         <CustomHeader />
         <Content style={{ padding: 0, margin: 0, marginTop: '60px'}}>
            <div style={{ width: '100%', height: '70vh' }}>
                <Map />
            </div>
        </Content>
        <Projects></Projects>
    </div>
)

export default Home;