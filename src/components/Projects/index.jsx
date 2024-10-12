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
import opendefecation from './images/OpenDefecation.jpeg';
import surface_albedo from './images/Surface_Albedo.jpg';
import surface_mrt from './images/SurfaceMRT.jpg';
import parkentrance from './images/ParkEntrance.jpg';
import solar_LCZ from './images/Solar_LCZ.jpg';
import GI from './images/GI_Planning.jpg';
import NPE from './images/NPE.jpg';
import logit from './images/Logit.png';
import farm from './images/Farms.png';
import Kmeans from './images/Kmeans.png';
import bike from './images/Bike.png';
import risk from './images/Risk.png';
import subsidy from './images/Subsidy.png';
import DRL from './images/DRL_framework.png';
import DRL_paper from './publications/DRL.pdf';
import Frequent_street from './images/Frequent_street.png';

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
            </div>
            <br/>
            <Divider id="researches" orientation="left" className="dynamic-font-divider">Publications</Divider>
            <div className="image-grid">
                <Link to="/Albedopedia">
                    <MyCard
                        hoverable
                        imageUrl={surface_albedo}
                        title="A sub-meter resolution urban surface albedo dataset for 34 U.S. cities based on deep learning"
                        description="Surface albedo, deep learning, high-resolution, dataset">
                    </MyCard>
                </Link>
                <Link to="/SurfaceMRT">
                    <MyCard
                        hoverable
                        imageUrl={surface_mrt}
                        title="Assessing the differential impact of suburban vegetated and urban built-up areas on heat exposure environment: A case study in Los Angeles"
                        description="Suburban vegetated areas, urban built-up areas, mean radiant temperature, urban surface albedo, SHAP">
                    </MyCard>
                </Link>
                <a href={'https://doi.org/10.1016/j.trd.2024.104456'} target="_blank" rel="noopener noreferrer">
                    <MyCard
                        hoverable
                        imageUrl={NPE}
                        title="Enhancing transit-oriented development sustainability through the integrated node-place-ecology (NPE) model"
                        journal="Accepted by Transportation Research Part D: Transport and Environment"
                        description="Transit-oriented development, Node-place model, Node-place-ecology model, Timeline-based, Sustainable development line">
                    </MyCard>
                </a>
                <a href={'https://doi.org/10.1016/j.scs.2024.105767'} target="_blank" rel="noopener noreferrer">
                    <MyCard
                        hoverable
                        imageUrl={GI}
                        title="Planning for green infrastructure by integrating multi-driver: Ranking priority based on accessibility-equity"
                        journal="Accepted by Sustainable Cities and Society"
                        description="Green infrastructure planning, Urban ecosystem, Multifunctionality, Sponge city, Nature-based solution">
                    </MyCard>
                </a>
                <a href={'https://doi.org/10.1016/j.compenvurbsys.2024.102176'} target="_blank" rel="noopener noreferrer">
                    <MyCard
                        hoverable
                        imageUrl={solar_LCZ}
                        title="LCZ-based city-wide solar radiation potential analysis by coupling physical modeling, machine learning, and 3D buildings"
                        journal="Accepted by Computers, Environment and Urban Systems"
                        description="Solar radiation potential, Machine learning, Local climate zone, 3D buildings">
                    </MyCard>
                </a>
                <Link to="/OpenDefecation">
                    <MyCard
                        hoverable
                        imageUrl={opendefecation}
                        title="Interpretable spatial machine learning insights into urban sanitation challenges: A case study of human feces distribution in San Francisco"
                        journal="Accepted by Sustainable Cities and Society"
                        description="Urban sanitation, Open defecation, Spatial IML, SHAP">
                    </MyCard>
                </Link>
                <a href={'https://doi.org/10.1016/j.jclepro.2024.142951'} target="_blank" rel="noopener noreferrer">
                    <MyCard
                        hoverable
                        imageUrl={parkentrance}
                        title="Effective or useless? Assessing the impact of park entrance addition policy on green space services from the 15-minute city perspective"
                        journal="Accepted by Journal of Cleaner Production"
                        description="Urban parks, Park entrance, Accessibility, 15-minute city">
                    </MyCard>
                </a>
                <Link to="/Homelessness">
                    <MyCard
                        hoverable
                        imageUrl={homelessness}
                        title="Exploring urban homelessness using multi-source urban big data and interpretable machine learning: A case study in New York City"
                        journal="Under reviewed by Journal of Environmental Management"
                        description="Homelessness, street view imagery, IML, SHAP">
                    </MyCard>
                </Link>
                <a href={DRL_paper} target="_blank" rel="noopener noreferrer">
                    <MyCard
                        hoverable
                        imageUrl={DRL}
                        title="Deep online recommendations for connected E-taxis by coupling trajectory mining and reinforcement learning"
                        journal="Accepted by IJGIS"
                        description="Deep reinforcement learning">
                    </MyCard>
                </a>
                <a href={'https://search.ebscohost.com/login.aspx?direct=true&profile=ehost&scope=site&authtype=crawler&jrnl=10000232&AN=171793816&h=Szz13CBriVmeoTOHKt6PNEP1awcu3RbygOnwpJWcgFW7fIs2QzTvdp2bX7L6IDvceRDK7yQHrVReJeYM6cqpcQ%3D%3D&crl=c'} target="_blank" rel="noopener noreferrer">
                    <MyCard
                        hoverable
                        imageUrl={Frequent_street}
                        title="High Frequency Street"
                        journal="Accepted by South Architecture"
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