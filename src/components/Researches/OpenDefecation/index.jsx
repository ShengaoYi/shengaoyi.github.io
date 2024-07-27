import React from "react";
import '../index.css';
import opendefecation from '../../Projects/images/OpenDefecation.jpeg'
import shap from './imgs/SHAP.jpg';
import table from './imgs/Table.png';
import built_environment from './imgs/Built_environment_Interaction.jpg'
import {Breadcrumb, Layout, Row, Tooltip} from "antd";
import {Link} from "react-router-dom";
import {Image} from 'antd';
import github from "../../../img/github.png";

const {Content} = Layout;
const OpenDefecation = () => (
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
                            title: <span>OpenDefecation</span>,
                        },
                    ]}
                />
            </Row>

            <div className="project-image">
                <Image width={650} src={opendefecation} preview={false}/>
            </div>
            <div className="title">
                <h1>Interpretable spatial machine learning insights into urban sanitation challenges: A case study of human feces distribution in San Francisco</h1>
                <p className="basic-info">This paper is accepted by <a href="https://doi.org/10.1016/j.scs.2024.105695" target="_blank" rel="noopener noreferrer">Sustainable Cities and Society</a>.</p>
            </div>
            <div className="content">
                <h2>Abstract</h2>
                <p>Urban sanitation is critical for public health, with the management of human feces presenting significant challenges in growing urban areas. While prior research has concentrated on the health impacts of fecal contaminants, the spatial distribution and determinants of open defecation in urban contexts have received less attention. To address these gaps, this study proposed an interpretable spatial machine learning framework integrating Geographically Weighted Random Forest (GW-RF) and SHapley Additive exPlanations (SHAP) analysis to reveal the complex spatial heterogeneity and factors influencing feces density in cities, taking San Francisco as a case study. Our findings highlight that homelessness, population density, and building density are critical drivers of feces distribution. Importantly, higher restroom density was linked to increased feces density, underscoring the need for urban planning to focus on improving restroom accessibility rather than merely increasing their number. Additionally, our research suggests that green spaces serve as a mitigating factor, indicating that enhancing urban greenery could be an effective strategy for addressing sanitation challenges. This study not only offers insights into San Francisco’s urban sanitation management but also provides practical implications for urban development strategies globally, advocating for targeted, evidence-based interventions to foster healthier and more sustainable cities. </p>
                <h2>Explanation and descriptive statistics of independent variables</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={table} preview={false}/>
                </div>
                <h2>Results of SHAP feature importance analysis by location type</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={shap} preview={false}/>
                </div>
                <h2>Non-linear relationships between homeless incidence and built environment</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={built_environment} preview={false}/>
                </div>
                <h2>Policy implications</h2>
                <ul>
                <li style={{ color: 'white' }}>
                    <strong>Improve Accessibility to Sanitation Facilities</strong>
                    <p>Increase the number and strategic placement of public restrooms in high-need areas. San Francisco's “Pit Stop” program, which provides clean, staffed public restrooms, serves as an excellent model. The goal is to reduce wait times, improve user experience, and encourage public use.</p>
                </li>
                <li style={{ color: 'white' }}>
                    <strong>Targeted Interventions in High-Risk Areas</strong>
                    <p>Prioritize sanitation efforts in areas with high homelessness, felony, and violation density. Use insights to enhance initiatives like San Francisco's "Poop Patrol" to optimize resource allocation and intervention timing for maximum impact.</p>
                </li>
                <li style={{ color: 'white' }}>
                    <strong>Leverage Green Infrastructure</strong>
                    <p>Promote the development of green spaces to improve sanitation outcomes. The High Line in New York City is a successful example of converting underutilized spaces into parks, gardens, or green corridors.</p>
                </li>
                <li style={{ color: 'white' }}>
                    <strong>Eyes on the Streets</strong>
                    <p>Encourage active community participation in monitoring and maintaining cleanliness. Implement social education programs and workshops on sanitation awareness using posters, handouts, and digital media to enhance public awareness and encourage responsible behavior.</p>
                </li>
            </ul>
            </div>
        </Content>
    </div>
)

export default OpenDefecation;