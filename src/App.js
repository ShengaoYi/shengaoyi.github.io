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
                        {/*<Sider trigger={null} collapsible collapsed={this.state.collapsed} width={300}*/}
                        {/*       style={{backgroundColor: "white"}}>*/}
                        {/*    <div className="logo" style={{padding: 20}}>*/}
                        {/*        <Avatar shape="square" size={64} icon={<img src={myIcon} alt="Avatar"/>}/>*/}
                        {/*    </div>*/}
                        {/*    <MyMenu></MyMenu>*/}
                        {/*</Sider>*/}

                        <Layout>
                            <Routes>
                                <Route path="/home" element={<Home/>}/>
                                <Route path="/RATScreener" element={<RATScreener/>}/>
                                <Route path="/Wildfire" element={<Wildfire/>}/>
                                <Route path="/Solar" element={<Solar/>}/>
                                <Route path="/" element={<Navigate replace to="/home"/>}/>
                            </Routes>

                            <Footer style={{textAlign: 'center'}}>Website©2023 Created by Shengao Yi</Footer>
                        </Layout>

                    </Layout>
                </BrowserRouter>


            </div>
        )
    }
};
