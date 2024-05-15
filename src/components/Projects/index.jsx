import MyCard from "../Card";
import {Divider, Layout} from 'antd';
import React from "react";
import {Link} from 'react-router-dom';
import rats from './images/Rats.png';
import wildfire from './images/Wildfire.gif';
import solar from './images/Solar.png';
import svi from './images/StreetView.jpg';
import pgRouting from './images/pgRouting.png';
import servicearea from './images/ServiceArea.png'
import homelessness from './images/Homeless.png';
import surface_albedo from './images/Surface_Albedo.jpg';
import logit from './images/Logit.png';
import farm from './images/Farms.png';
import Kmeans from './images/Kmeans.png';
import bike from './images/Bike.png';
import risk from './images/Risk.png';
import subsidy from './images/Subsidy.png';
import DRL from './images/DRL_framework.png'
import DRL_paper from './publications/DRL.pdf'
import Frequent_street from './images/Frequent_street.png'

const {Content} = Layout;

const Projects = () => (
    <div className="content-centered">
        <Content style={{margin: '24px 16px', padding: 24, background: "black"}}>
            <Divider id="data-analytics" orientation="left" className="dynamic-font-divider">Data Analytics</Divider>
            <div className="image-grid">
                <Link to="/RATScreener">
                    <MyCard
                        hoverable
                        imageUrl={rats}
                        title="A Vermin Inspection Optimization Tool"
                        description="Machine learning, Data analysis">
                    </MyCard>
                </Link>
                <Link to="/Wildfire">
                    <MyCard
                        hoverable
                        imageUrl={wildfire}
                        title="Forecasting Wildfire Risk in California"
                        description="Machine Learning, Data analysis">
                    </MyCard>
                </Link>
                <Link to="/Solar">
                    <MyCard
                        hoverable
                        imageUrl={solar}
                        title="Solar Roof Operations in Philadelphia"
                        description="Front-end, Web design, Visualization">
                    </MyCard>
                </Link>
                <Link to="/Wildfire">
                    <MyCard
                        hoverable
                        imageUrl={wildfire}
                        title="Wildfire Risk Prediction"
                        description="Forecasting Wildfire Risk in California">
                    </MyCard>
                </Link>
            </div>
            <br/>
            <Divider id="researches" orientation="left" className="dynamic-font-divider">Researches</Divider>
            <div className="image-grid">
                <Link to="/Albedopedia">
                    <MyCard
                        hoverable
                        imageUrl={surface_albedo}
                        title="A sub-meter resolution urban surface albedo dataset for 34 U.S. cities based on deep learning"
                        description="Surface albedo, deep learning, high-resolution, dataset">
                    </MyCard>
                </Link>
                <Link to="/Homelessness">
                    <MyCard
                        hoverable
                        imageUrl={homelessness}
                        title="Exploring urban homelessness using multi-source urban big data and interpretable machine learning: A case study in New York City"
                        description="Homelessness, street view imagery, IML, SHAP">
                    </MyCard>
                </Link>
                <a href={DRL_paper} target="_blank" rel="noopener noreferrer">
                    <MyCard
                        hoverable
                        imageUrl={DRL}
                        title="Deep online recommendations system for connected E-taxis"
                        description="Deep reinforcement learning">
                    </MyCard>
                </a>
                <a href={'https://search.ebscohost.com/login.aspx?direct=true&profile=ehost&scope=site&authtype=crawler&jrnl=10000232&AN=171793816&h=Szz13CBriVmeoTOHKt6PNEP1awcu3RbygOnwpJWcgFW7fIs2QzTvdp2bX7L6IDvceRDK7yQHrVReJeYM6cqpcQ%3D%3D&crl=c'} target="_blank" rel="noopener noreferrer">
                    <MyCard
                        hoverable
                        imageUrl={Frequent_street}
                        title="High Frequency Street"
                        description="">
                    </MyCard>
                </a>
            </div>
            <br/>
            <Divider id="funny-tool" orientation="left" className="dynamic-font-divider">Funny Tools</Divider>
            <div className="image-grid">
                 <a href="https://github.com/ShengaoYi/Google-StreetView-Downloader" target="_blank" rel="noopener noreferrer">
                    <MyCard
                        hoverable
                        imageUrl={svi}
                        title="Google StreetView Downloader"
                        description="Google Street View images, Road Network">
                    </MyCard>
                </a>
                <a href="https://github.com/ShengaoYi/pgRouting_tutorial" target="_blank" rel="noopener noreferrer">
                    <MyCard
                        hoverable
                        imageUrl={pgRouting}
                        title="pgRouting Tutorial"
                        description="Network Analysis, PostGIS, PostgreSQL">
                    </MyCard>
                </a>
                <a href="https://github.com/ShengaoYi/NX-ServiceArea" target="_blank" rel="noopener noreferrer">
                    <MyCard
                        hoverable
                        imageUrl={servicearea}
                        title="Service Area"
                        description="ArcPy, NetworkX, PostgreSQL">
                    </MyCard>
                </a>
            </div>
        </Content>
    </div>
);

export default Projects;