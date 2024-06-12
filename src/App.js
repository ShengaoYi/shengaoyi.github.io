import React from 'react';
import './App.css';
import {Layout} from 'antd';
import {Provider} from 'react-redux';
import MyMenu from "./components/Menu";
import myIcon from './img/Avatar.jpg';
import Home from "./components/pages/Home";
import {BrowserRouter, Link, Navigate, Route, Routes} from 'react-router-dom';
import {Avatar, Card, Space} from 'antd';
import RATScreener from "./components/Projects/Rats";
import Wildfire from "./components/Projects/Wildfire";
import Solar from "./components/Projects/Solar";
import DRL from "./components/Researches/DRL";
import Albedopedia from "./components/Researches/Albedopedia";
import Homelessness from "./components/Researches/Homelessness";
import OpenDefecation from "./components/Researches/OpenDefecation";
import MyFooter from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
const {Footer, Sider} = Layout;
export default class App extends React.Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div>
                <BrowserRouter>
                    <ScrollToTop />
                    <Layout className={"all-layout"}>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/RATScreener" element={<RATScreener/>}/>
                                <Route path="/Wildfire" element={<Wildfire/>}/>
                                <Route path="/Solar" element={<Solar/>}/>
                                <Route path="/Albedopedia" element={<Albedopedia/>}/>
                                <Route path="/Homelessness" element={<Homelessness/>}/>
                                <Route path="/OpenDefecation" element={<OpenDefecation/>}/>
                                <Route path="/DRL" element={<DRL/>}/>
                                <Route path="/" element={<Navigate replace to="/"/>}/>
                            </Routes>
                            <Footer className="custom-footer" style={{textAlign: 'center', background: "black", color: "white"}}>Copyright © Shengao Yi, 2023</Footer>
                        </Layout>
                    </Layout>
                </BrowserRouter>
            </div>
        )
    }
};
