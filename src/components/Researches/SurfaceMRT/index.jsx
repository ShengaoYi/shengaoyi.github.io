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
                <h1>Assessing the differential impact of vegetated and built-up areas on heat exposure environment: A case study of Los Angeles</h1>
                <p className="basic-info">This paper is accepted by <a href="https://doi.org/10.1016/j.buildenv.2025.112538" target="_blank" rel="noopener noreferrer">Building and Environment</a>.</p>
            </div>
            <div className="content">
                <h2>Abstract</h2>
                <p>The urban heat island (UHI) effect exacerbates heat stress, energy consumption, and public health challenges in urban environments. Traditional studies often combine vegetated and built-up areas, overlooking their distinct thermal behaviors, and rely on Land Surface Temperature (LST), which does not fully capture the heat exposure perceived by humans. This study addresses these gaps by using 1-meter resolution mean radiant temperature (T_mrt) to evaluate heat exposure in Los Angeles, separating vegetated areas (VA) and built-up areas (BA). We developed distinct indicator systems for VA and BA and applied random forest regression, spatial error modeling, and SHapley Additive exPlanations (SHAP) to assess their independent effects on
T_mrt. Results indicate that vegetated areas, particularly tree canopies and wetlands, provide significant cooling effects on
T_mrt, while impervious surfaces like asphalt roads and bare earth increase heat exposure. In built-up areas, the sky view factor showed the strongest positive correlation with
T_mrt, while residential areas demonstrated a negative correlation. The study also highlights the relative importance of variables and nonlinear impacts of indicator thresholds on
T_mrt. Notably, increasing albedo in impervious surfaces, a conventional cooling strategy to reduce LST, may elevate perceived heat exposure, challenging its effectiveness. These findings emphasize the need for urban planners to prioritize tree canopy coverage in heat hotspots and develop context-specific strategies that address the nonlinear impacts of urban surfaces on heat exposure. Material selection in built-up areas should carefully consider albedo impacts to balance cooling benefits with potential thermal discomfort, providing actionable insights for sustainable urban design.</p>
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
                <h2>The global and local RI of VA and BA variables from the SHAP model</h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={shap} preview={false}/>
                </div>
                <h2>Non-linear relationships between heat exposure and vegetated areas variables</h2>
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