import React from 'react';
import './App.css';
import {Layout} from 'antd';
import Home from "./components/pages/Home";
import {HashRouter, Navigate, Route, Routes} from 'react-router-dom';
import RATScreener from "./components/Projects/Rats";
import Wildfire from "./components/Projects/Wildfire";
import Solar from "./components/Projects/Solar";
import DRL from "./components/Researches/DRL";
import Albedopedia from "./components/Researches/Albedopedia";
import Homelessness from "./components/Researches/Homelessness";
import OpenDefecation from "./components/Researches/OpenDefecation";
import SurfaceMRT from "./components/Researches/SurfaceMRT";
import ScrollToTop from './components/ScrollToTop';

const {Footer} = Layout;

export default function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Layout className="all-layout">
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/RATScreener" element={<RATScreener/>}/>
                        <Route path="/Wildfire" element={<Wildfire/>}/>
                        <Route path="/Solar" element={<Solar/>}/>
                        <Route path="/Albedopedia" element={<Albedopedia/>}/>
                        <Route path="/Homelessness" element={<Homelessness/>}/>
                        <Route path="/OpenDefecation" element={<OpenDefecation/>}/>
                        <Route path="/SurfaceMRT" element={<SurfaceMRT/>}/>
                        <Route path="/DRL" element={<DRL/>}/>
                        <Route path="/" element={<Navigate replace to="/"/>}/>
                    </Routes>
                    <Footer className="custom-footer">Copyright {'\u00A9'} Shengao Yi, 2023</Footer>
                </Layout>
            </Layout>
        </HashRouter>
    );
}
