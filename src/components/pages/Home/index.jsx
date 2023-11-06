import Map from "../../Map";
import {Layout} from "antd";
import Projects from "../../Projects";
import React from "react";
import {Route} from "react-router-dom";
import CustomHeader from "../../Header";
import './index.css';
import About from "../../About";
const { Content } = Layout;

const Home = () => (
    <div id="top">
         <CustomHeader />
         <Content className="home-content" >
             <div className="map-container">
                  <Map />
             </div>
             <div className="profile-container">
                 <About></About>
            </div>
        </Content>
        <Projects></Projects>
    </div>
)

export default Home;