import React from "react";
import '../index.css';
import wildfire from '../images/Wildfire.gif';
import {Breadcrumb, Layout, Row, Tooltip} from "antd";
import {Link} from "react-router-dom";
import {Image} from 'antd';
import fire1 from "../images/Fire1.png";
import fire2 from "../images/Fire2.png";
import markdown from "../../../img/markdown.png";

const {Content} = Layout;

const Solar = () => (
    <div className="container-centered">
        <Content className="site-layout-background content-width">
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
                            title: 'Solar Operation',
                        },
                    ]}
                />
            </Row>

            <div className="project-image">
                <Image width={650} src={wildfire} preview={false}/>
            </div>
            <div className="title">
                <h1>Wildfire Prediction in California</h1>
                <p className="basic-info">December 2023</p>
                <p className="basic-info">By Minwook Kang, and Shengao Yi</p>
                <p className="basic-info">Role: Model Building, R Markdown</p>
                <p className="basic-info">University of Pennsylvania</p>
                <div style={{display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px'}}>
                    <Tooltip title="Markdown" placement="bottom">
                        <a href="https://shengaoyi.github.io/UPenn/MUSA508/Forecasting%20wildfire%20risk%20for%20a%20region%20in%20California.html" target="_blank">
                            <Image width={50} src={markdown} preview={false}/>
                        </a>
                    </Tooltip>
                </div>
            </div>
            <div className="content">
                <h2>What is our motivation?</h2>
                <p>Since the 1980s, the size and intensity of wildfires in California have notably increased. The amount of land burned by wildfires in the state has risen steeply in the past five years. In 2021, 8,619 wildfires burned almost 2.6 million acres. There were three fatalities and 3,629 structures were damaged or destroyed. Although the government has paid much attention to this problem and made effort to reduce these kind of things, the situation has not changed.</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={fire1} preview={false}/>
                </div>
                <h2>What we did?</h2>
                <p>As the changes of climate, the wildfires becomes more and more frequent. So it’s essential for us to predict wildfires more accurately. Our solution is using Logistic Regression to predict probability occurrence rate of wildfires in California by merging various data like elevation, land cover, precipitation and so on. Then we run a 100-folds cross validation to test the model’s generalizability. At last, we conduct weight scenario analysis to find the optimal threshold. For more accurate results, we also create 12 models for each month. That would provide more granular guidance to government departments.</p>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Image width={700} src={fire2} preview={false}/>
                </div>
                <h2>Our App</h2>
                <p>We have designed a web application named Favigator for patrols. It contains the basic function like when you click a month, it will show the wildfire risk prediction map accordingly, and you can also zoom to fire unit which you are interested in. The second and also main usage is to suggest an optimal patrol route of risky area based on user location. <a href="https://www.youtube.com/watch?v=VgH8ib5mufw" target="_blank">Click here</a> to access the Favigator introduction video.</p>
            </div>
        </Content>
    </div>
)

export default Solar;