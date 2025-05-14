import React from "react";
import '../index.css';
import framework from './imgs/Framework.jpg'
import homeless from './imgs/Homeless.png';
import homeless_shap from './imgs/Homeless_SHAP.jpg';
import table from './imgs/Table.png';
import land_use from './imgs/Land use.jpg'
import built_environment from './imgs/Built_environment_Interaction.jpg'
import {Breadcrumb, Layout, Row, Tooltip} from "antd";
import {Link} from "react-router-dom";
import {Image} from 'antd';
import github from "../../../img/github.png";

const {Content} = Layout;
const Homelessness = () => (
    <div className="container-centered">
        <Content className="site-layout-background content-width">
            <br/>
            <Row>
                <Breadcrumb className="custom-breadcrumb"
                    items={[
                        {
                            title: <Link to="/">Home</Link>,
                        },
                        {
                            title: <a href="">Research</a>,
                        },
                        {
                            title: <span>Homelessness</span>,
                        },
                    ]}
                />
            </Row>
            <br/>
            <div className="project-image">
                <Image width={650} src={homeless} preview={false}/>
            </div>
            <div className="title">
                <h1>Uncovering nonlinear urban factors of homelessness: Evidence from New York City using interpretable machine learning</h1>
                <p className="basic-info">This paper is accepted by <a href="https://doi.org/10.1177/23998083251342406" target="_blank" rel="noopener noreferrer">Environment and Planning B: Urban Analytics and City Science</a>.</p>
                {/*<p className="basic-info">By Shengao Yi</p>*/}
                {/*<p className="basic-info">Role: Front-end, Web design, Visualization</p>*/}
                {/*<p className="basic-info">University of Pennsylvania</p>*/}
                {/*<div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px'}}>*/}
                {/*    <Tooltip title="GitHub" placement="bottom">*/}
                {/*        <a href="https://github.com/ShengaoYi/Solar-Operations" target="_blank">*/}
                {/*            <Image width={30} src={github} preview={false}/>*/}
                {/*        </a>*/}
                {/*    </Tooltip>*/}
                {/*</div>*/}
            </div>
            <div className="content">
                <h2>Abstract</h2>
                <p>Urban homelessness is a complex issue rooted in structural inequalities and spatial disparities, significantly affecting urban life and well-being. Existing research often relies on survey-based or linear regression methods, which are limited in scope, coverage, and their ability to capture nonlinear associations. This study addresses these gaps by combining homeless incident reports from New York City’s 311 service with multi-source urban big data and employing a Light Gradient Boosting Machine (LightGBM) model alongside SHapley Additive Explanations (SHAP). Through a census tract-level analysis, we examine how socioeconomic, built environment, transportation, and urban landscape factors relate to homelessness incidence. Our findings show that (1) the importance of predictive factors varies across location types, for instance, information, and communication POIs are most predictive in commercial areas, while felony crime and median income dominate in residential zones; (2) socioeconomic and built environment features are consistently more important than transportation and visual landscape indicators; and (3) many factors exhibit nonlinear relationships and threshold effects, such as sharp increases in homelessness beyond a median rent of $1800 or Gini index of 0.53. These findings offer new insights into the spatial distribution and drivers of homelessness and underscore the value of interpretable machine learning in urban analytics. By identifying key environmental thresholds, this study provides evidence-based guidance for spatially targeted urban interventions, such as prioritizing support services in high-risk areas and designing inclusive public spaces that can help mitigate homelessness and promote more sustainable and equitable cities.</p>
                <h2>Overall analysis framework</h2>
                <p>This study consists of three main parts: 1) Collect and extract features from the multi-source urban big data, including socioeconomic features, build environment, urban transportation, urban landscape,  and homeless data; 2) Machine learning models' validation, evaluation, and interpretation with SHAP; 3) Interpretation results analysis.</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={framework} preview={false}/>
                </div>
                <h2>Explanation and descriptive statistics of dependent and independent variables across New York City census tracts (N=1,712)</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={table} preview={false}/>
                </div>
                <h2>2D and 3D spatial distribution of land use in New York City</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={land_use} preview={false}/>
                </div>
                <h2>Results of SHAP feature importance analysis by location type</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={homeless_shap} preview={false}/>
                </div>
                <h2>Non-linear relationships between homeless incidence and built environment</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={built_environment} preview={false}/>
                </div>
            </div>
        </Content>
    </div>
)

export default Homelessness;