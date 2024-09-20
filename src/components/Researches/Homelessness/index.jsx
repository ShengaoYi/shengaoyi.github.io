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
                <h1>Exploring urban homelessness using multi-source urban big data and interpretable machine learning: A case study in New York City</h1>
                <p className="basic-info">This paper is currently under review by the journal of Cities.</p>
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
                <p>Urban homelessness, a manifestation of socioeconomic disparities, significantly impacts the quality of urban life. Despite its prevalence, elucidating the complex, non-linear relationships and interaction effects between various urban factors and homelessness presents considerable challenges. Traditional studies of homelessness struggle with methodological limitations and insufficient data coverage. This study utilized multi-source urban big data, the Light Gradient Boosting Machine (LightGBM) model, and SHapley Additive exPlanation (SHAP) analysis to uncover the nonlinearity and interpretability across different location types in New York City. Our results confirm that (1) the importance of features contributing to homelessness varies notably across different urban settings, such as in commercial area, the POI of information and communication exerts a greater influence, whereas in residential area, factors like felony crime density and median income emerge as critical. (2) Built environment and socioeconomic factors play a more importance role than urban landscape and transportation. (3) A majority of the examined urban factors exhibit show non-linear and threshold effects on homelessness. Thus, by uncovering specific determinants and their respective thresholds, this study makes a substantial contribution to the field of urban planning, aiming towards a sustainable, inclusive, and equitable urban future.</p>
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
                <h2>Policy implications</h2>
                <p> The results from feature importance and non-linear relationship can help to find the potential high-risk areas of homelessness. This research can serve as a crucial guide for governments in allocating resources efficiently, tailoring interventions to the distinct needs of diverse homeless populations, and developing preventative strategies. For example, policies could be developed to increase the proportion of urban green spaces to exceed the identified 8.0\% threshold where a significant reduction in homelessness incidence is observed, such as incentivizing the creation of pocket parks and urban gardens in areas with high homelessness rates. Given the positive correlation of higher enclosure proportions with homelessness, urban design efforts could be targeted to prevent over-enclosure, while still providing sheltered public spaces for community activities. From the perspective of governmental responsibilities, addressing the underlying causes of homelessness is not only a moral obligation but is also pivotal for fostering societal harmony, improving public health, and boosting economic resilience. Proactively combating homelessness, in turn, alleviates pressure on public services and enhances the overall well-being of the community.</p>
            </div>
        </Content>
    </div>
)

export default Homelessness;