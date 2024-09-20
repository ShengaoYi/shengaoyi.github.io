import React from "react";
import '../index.css';
import surfaceMRT from '../../Projects/images/SurfaceMRT.jpg';
import gridMRT from './imgs/LA_MRT_Albedo_Grid.jpg';
import LISA from './imgs/MRT_Albedo_LISA.jpg';
import shap from './imgs/SHAP.jpg';
import table from './imgs/Table.png';
import framework from './imgs/Framework.jpg';
import green_albedo from './imgs/Interaction_Green_Albedo.jpg'
import {Breadcrumb, Layout, Row, Tooltip} from "antd";
import {Link} from "react-router-dom";
import {Image} from 'antd';
import github from "../../../img/github.png";

const {Content} = Layout;
const SurfaceMRT = () => (
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
                            title: <span>SurfaceMRT</span>,
                        },
                    ]}
                />
            </Row>
            <br/>
            <div className="project-image">
                <Image width={650} src={surfaceMRT} preview={false}/>
            </div>
            <div className="title">
                <h1>Assessing the differential impact of suburban vegetated and urban built-up areas on heat exposure environment: A case study in Los
Angeles</h1>
                <p className="basic-info">This paper is under view by <a href="https://www.sciencedirect.com/journal/sustainable-cities-and-society" target="_blank" rel="noopener noreferrer">Sustainable Cities and Society</a>.</p>
            </div>
            <div className="content">
                <h2>Abstract</h2>
                <p>The urban heat island (UHI) effect significantly influences urban environments, exacerbating
                heat stress, energy consumption, and public health challenges. Traditional studies often combine
                vegetated and built-up areas, overlooking their distinct thermal behaviors, and rely on Land Surface
                Temperature (LST), which does not fully capture human heat exposure. This study addresses
                these gaps by using mean radiant temperature (Tmrt) at a 1-meter resolution to assess heat exposure
                in Los Angeles, distinguishing between suburban vegetated areas (SVA) and urban built-up
                areas (UBA). We developed distinct indicator systems for these areas and applied random forest
                regression, spatial error modeling, and SHapley Additive exPlanations (SHAP) to evaluate their
                independent effects on Tmrt. Results show that suburban vegetated areas, particularly tree canopies
                and wetlands, exhibit strong cooling effects on Tmrt, while impervious surfaces in built-up areas,
                including roads and bare earth, are positively associated with increased heat exposure. The study
                also highlights the relative importance of variables and nonlinear impacts of indicator thresholds
                on Tmrt. Notably, increasing albedo in impervious surfaces may elevate perceived heat exposure,
                challenging conventional cooling strategies. These findings provide critical insights for urban
                planning, advocating targeted approaches to mitigate heat stress and improve thermal comfort in
                different area zones.</p>
                <h2>Overall framework</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={framework} preview={false}/>
                </div>
                <h2>Explanation and descriptive statistics of natural and environmental variables</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={table} preview={false}/>
                </div>
                <h2>The spatial distribution of the average Tmrt and LISA clustering in the grid cells</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={350} src={gridMRT} preview={false}/> <Image width={350} src={LISA} preview={false}/>
                </div>
                <h2>The global and local RI of SVA and UBA variables from the SHAP model</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={shap} preview={false}/>
                </div>
                <h2>Non-linear relationships between heat exposure and suburban vegetated areas variables</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={green_albedo} preview={false}/>
                </div>
                {/*<h2>Policy implications</h2>*/}
                {/*<ul>*/}
                {/*    <li style={{ color: 'white' }}>*/}
                {/*        <strong>Improve Accessibility to Sanitation Facilities</strong>*/}
                {/*        <p>Increase the number and strategic placement of public restrooms in high-need areas. San Francisco's “Pit Stop” program, which provides clean, staffed public restrooms, serves as an excellent model. The goal is to reduce wait times, improve user experience, and encourage public use.</p>*/}
                {/*    </li>*/}
                {/*    <li style={{ color: 'white' }}>*/}
                {/*        <strong>Targeted Interventions in High-Risk Areas</strong>*/}
                {/*        <p>Prioritize sanitation efforts in areas with high homelessness, felony, and violation density. Use insights to enhance initiatives like San Francisco's "Poop Patrol" to optimize resource allocation and intervention timing for maximum impact.</p>*/}
                {/*    </li>*/}
                {/*    <li style={{ color: 'white' }}>*/}
                {/*        <strong>Leverage Green Infrastructure</strong>*/}
                {/*        <p>Promote the development of green spaces to improve sanitation outcomes. The High Line in New York City is a successful example of converting underutilized spaces into parks, gardens, or green corridors.</p>*/}
                {/*    </li>*/}
                {/*    <li style={{ color: 'white' }}>*/}
                {/*        <strong>Eyes on the Streets</strong>*/}
                {/*        <p>Encourage active community participation in monitoring and maintaining cleanliness. Implement social education programs and workshops on sanitation awareness using posters, handouts, and digital media to enhance public awareness and encourage responsible behavior.</p>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </div>
        </Content>
    </div>
)

export default SurfaceMRT;