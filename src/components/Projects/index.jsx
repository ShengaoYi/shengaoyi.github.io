import MyCard from "../Card";
import {Col, Divider, Layout, Row, Carousel } from 'antd';
import React from "react";
import {Link} from 'react-router-dom';
import rats from './images/Rats.png';
import wildfire from './images/Wildfire.gif';
import solar from './images/Solar.png';
import svi from './images/StreetView.jpg';
import house from './images/House.png';
import logit from './images/Logit.png';
import farm from './images/Farms.png';
import Kmeans from './images/Kmeans.png';
import bike from './images/Bike.png';
import risk from './images/Risk.png';
import subsidy from './images/Subsidy.png';
import DRL from './images/DRL_framework.png'
import DRL_paper from './publications/DRL.pdf'

const {Content} = Layout;

const Projects = () => (
    <div className="content-centered">
        <Content style={{margin: '24px 16px', padding: 24, background: "white"}}>
            <Divider id="data-analytics-web-development" orientation="left" className="dynamic-font-divider"
                     style={{fontSize: 18, fontWeight: "bold"}}>Data Analytics / Web Development</Divider>
            <Row gutter={[16, 16]} justify="space-around" align="middle" style={{ maxWidth: '90%', margin: '0 auto' }}>
                <Col xs={24} sm={12} md={10} lg={10} xl={4} className="centered-content-col">
                    <Link to="/RATScreener">
                        <MyCard
                            hoverable
                            imageUrl={rats}
                            title="RATScreener"
                            description="A Vermin Inspection Optimization Tool for Washington, DC">
                        </MyCard>
                    </Link>
                </Col>
                <Col xs={24} sm={12} md={10} lg={10} xl={4} className="centered-content-col">
                    <Link to="/Wildfire">
                        <MyCard
                            hoverable
                            imageUrl={wildfire}
                            title="Wildfire Risk Prediction"
                            description="Forecasting Wildfire Risk in California">
                        </MyCard>
                    </Link>
                </Col>
                <Col xs={24} sm={12} md={10} lg={10} xl={4} className="centered-content-col">
                    <Link to="/Solar">
                        <MyCard
                            hoverable
                            imageUrl={solar}
                            title="Solar Operation"
                            description="An Application to Calculate Solar Roof Savings: Estimate Potential Cost Savings for Building Owners and Our Community.">
                        </MyCard>
                    </Link>
                </Col>
                <Col xs={24} sm={12} md={10} lg={10} xl={4} className="centered-content-col">
                    <MyCard
                        hoverable
                        imageUrl={house}
                        title="House Values Prediction"
                        description="Predict house values with spatial lag, spatial error and geographically weighted regression (GWR) in Philadelphia.">
                    </MyCard>
                </Col>
            </Row>
            <br/>

            <br/>
            {/*<Row gutter={[16, 16]} justify="space-around" align="middle">*/}
            {/*    <Col xs={24} sm={24} md={12} lg={6} xl={4} className="centered-content-col">*/}
            {/*        <MyCard*/}
            {/*            hoverable*/}
            {/*            imageUrl={logit}*/}
            {/*            title="Logistic Regression"*/}
            {/*            description="Using logistic regression to examine the predictors of car crashes caused by alcohol.">*/}
            {/*        </MyCard>*/}
            {/*    </Col>*/}

            {/*</Row>*/}
            <Divider orientation="left" className="dynamic-font-divider"
                     style={{fontSize: 18, fontWeight: "bold"}}>Researches</Divider>
             <Row gutter={[16, 16]} justify="space-around" align="middle" style={{ maxWidth: '90%', margin: '0 auto' }}>
                <Col xs={24} sm={24} md={12} lg={8} xl={4} className="centered-content-col">
                    <a href={DRL_paper} target="_blank" rel="noopener noreferrer">
                        <MyCard
                            hoverable
                            imageUrl={DRL}
                            title="Deep Reinforcement Learning"
                            description="Deep online recommendations for connected E-taxis by coupling trajectory mining and reinforcement learning">
                        </MyCard>
                    </a>

                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={4} className="centered-content-col">

                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={4} className="centered-content-col">

                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={4} className="centered-content-col">

                </Col>

            </Row>

            <Divider orientation="left" className="dynamic-font-divider"
                     style={{fontSize: 18, fontWeight: "bold"}}>Funny Tools</Divider>

             <Row gutter={[16, 16]} justify="space-around" align="middle" style={{ maxWidth: '90%', margin: '0 auto' }}>
                <Col xs={24} sm={24} md={12} lg={8} xl={4} className="centered-content-col">
                     <a href="https://github.com/ShengaoYi/Google-StreetView-Downloader" target="_blank" rel="noopener noreferrer">
                         <MyCard
                            hoverable
                            imageUrl={svi}
                            title="Google StreetView Downloader"
                            description="A complete workflow for downloading Google Street View images, covering the entire process from the road network to saving the images.">
                        </MyCard>
                     </a>

                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={4} className="centered-content-col">

                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={4} className="centered-content-col">

                </Col>
                <Col xs={24} sm={24} md={12} lg={6} xl={4} className="centered-content-col">

                </Col>

            </Row>
        </Content>
    </div>
);

export default Projects;