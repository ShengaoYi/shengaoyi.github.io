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
import DRL from "./components/Projects/DRL";
import MyFooter from "./components/Footer";
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
                    <Layout className={"all-layout"}>
                        <Layout>
                            <Routes>
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/RATScreener" element={<RATScreener/>}/>
                                <Route path="/Wildfire" element={<Wildfire/>}/>
                                <Route path="/Solar" element={<Solar/>}/>
                                <Route path="/DRL" element={<DRL/>}/>
                                <Route path="/" element={<Navigate replace to="/home"/>}/>
                            </Routes>
                            <Footer className="custom-footer" style={{textAlign: 'center', background: "black", color: "white"}}>Copyright © Shengao Yi, 2023</Footer>
                        </Layout>
                    </Layout>
                </BrowserRouter>
            </div>
        )
    }
};
