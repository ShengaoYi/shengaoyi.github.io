import React from "react";
import '../index.css';
import solar1 from '../Solar/imgs/Solar1.png';
import solar2 from '../Solar/imgs/Solar2.png';
import solar3 from '../Solar/imgs/Solar3.png';
import {Breadcrumb, Layout, Row, Tooltip} from "antd";
import {Link} from "react-router-dom";
import {Image} from 'antd';
import github from "../../../img/github.png";

const {Content} = Layout;
const Solar = () => (
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
                            title: <a href="">Data Analytics</a>,
                        },
                        {
                            title: <span>Solar Operation</span>,
                        },
                    ]}
                />
            </Row>

            <div className="project-image">
                <Image width={650} src={solar1} preview={false}/>
            </div>
            <div className="title">
                <h1>Solar Roof Operations in Philadelphia</h1>
                <p className="basic-info">December 2023</p>
                <p className="basic-info">By Shengao Yi, and Minwook Kang</p>
                <p className="basic-info">Role: Front-end, Web design, Visualization</p>
                <p className="basic-info">University of Pennsylvania</p>
                <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px'}}>
                    <Tooltip title="GitHub" placement="bottom">
                        <a href="https://github.com/ShengaoYi/Solar-Operations" target="_blank">
                            <Image width={30} src={github} preview={false}/>
                        </a>
                    </Tooltip>
                </div>
            </div>
            <div className="content">
                <h2>What is our motivation?</h2>
                <p>Our mission is to illuminate the financial and environmental benefits of Solar Roofs to building owners and communities. With the growing urgency for sustainable energy solutions, our website serves as a beacon, showcasing the untapped potential
                    of solar power across urban landscapes. We aim to not only inform but also inspire action towards adopting solar energy, highlighting its significant role in fostering a more sustainable and cost-effective future.</p>
                <h2>Exploring City-Wide Solar Capabilities</h2>
                <p>Our 'My City Potential' page broadens the scope, offering a macro perspective on the solar capabilities of entire cities. Through a dynamic dashboard,
                    stakeholders can explore data such as the total number of roofs suitable for solar panels, aggregate roof area, estimated annual energy generation in MWh,
                    and the overall environmental benefits. This city-level analysis empowers policymakers, environmentalists, and community leaders to champion solar
                    initiatives with tangible data and potential economic gains.</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={solar2} preview={false}/>
                </div>
                <h2>Discover Your Roof's Potential</h2>
                <p>At the heart of our platform is the 'My Roof Potential' page, a user-friendly interface designed to demystify solar installations for individual building owners. By simply entering an address or selecting a building on our interactive map, users receive a comprehensive analysis of their roof's solar potential. This includes annual sunlight hours, available area for solar panels, estimated net profits over 20 years, and the environmental impact of making the switch to solar.</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={solar3} preview={false}/>
                </div>
                <h2>Supported by Google Project Sunroof</h2>
                <p>This initiative is proudly supported by <a href="https://sunroof.withgoogle.com/" target="_blank">Google Project Sunroof</a>, a testament to our commitment to providing accurate, data-driven insights into solar potential. Leveraging the comprehensive data and analytical prowess of Google Project Sunroof, we enhance our platform's capability to predict solar energy benefits with greater precision. This collaboration underscores our dedication to advancing solar energy adoption through innovative technologies and partnerships.</p>
            </div>
        </Content>
    </div>
)

export default Solar;