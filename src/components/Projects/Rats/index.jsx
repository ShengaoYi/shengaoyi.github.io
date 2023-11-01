import React from "react";
import '../index.css';
import rats from '../Rats.png';
import ratsProcess from '../RatsProcess.png';
import {Breadcrumb, Layout, Row, Tooltip} from "antd";
import {Link} from "react-router-dom";
import {Image} from 'antd';
import github from "../../../img/github.png";
import markdown from "../../../img/markdown.png";

const {Content} = Layout;

const RATScreener = () => (
    <div style={{backgroundColor: "white"}}>
        <Content className="site-layout-background" style={{
            margin: '24px 16px',
            padding: 0,
            minHeight: 280,
            // backgroundColor: "white",
            textAlign: "center"
        }}
        >
            <br/>
            <Row>
                <Breadcrumb
                    items={[
                        {
                            title: <Link to="/home">Home</Link>,
                        },
                        {
                            title: <a href="">Data Analytics/ Web Development</a>,
                        },
                        {
                            title: 'RATScreener',
                        },
                    ]}
                />
            </Row>

            <div className="project-image">
                <Image width={500} src={rats} preview={false}/>
            </div>
            <div className="title">
                <h1>RATScreener</h1>
                <p className="basic-info">May 2023</p>
                <p className="basic-info">By Henry Feinstein, Kate Tanabe, and Shengao Yi</p>
                <p className="basic-info">Role: Model Building, R Markdown</p>
                <p className="basic-info">University of Pennsylvania</p>
                <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px'}}>
                    <Tooltip title="GitHub" placement="bottom">
                        <a href="https://github.com/ShengaoYi/RATScreener" target="_blank">
                            <Image width={30} src={github} preview={false}/>
                        </a>
                    </Tooltip>
                    <Tooltip title="Markdown" placement="bottom">
                        <a href="https://shengaoyi.github.io/RATScreener/RATScreener_FINAL_REPORT.html" target="_blank">
                            <Image width={50} src={markdown} preview={false}/>
                        </a>
                    </Tooltip>
                </div>
            </div>
            <div className="content">
                <h2>What is our motivation?</h2>
                <p>Rats thrive in cities. However, the feeling is not mutual according to city residents. In 2021,
                    DC’s 311 Service received over 11,000 requests for rodent inspection and abatement. As
                    inspection requests continue to increase after a pandemic-induced spike in rat populations,
                    inspection departments are inundated with requests for treatment.</p>
                <h2>What we did?</h2>
                <p>This project explores the spatial and time patterns related to vermin infestation in order to
                    develop a predictive model for estimating the probability of rat detection in a given area of
                    Washington, DC. The information provided by the tool will allow city health and vermin
                    inspectors to prioritize exterior inspections of properties suspected of vermin infestation
                    based on the actual likelihood of rodents being detected. We aim to create a proof-of-concept
                    infestation forecast that will be used as the basis of an inspection optimization data system
                    and web app, which will allow for more targeted and efficient inspections.</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={ratsProcess} preview={false}/>
                </div>
            </div>
        </Content>
    </div>
)

export default RATScreener;