import Map from "../../Map";
import {Layout} from "antd";
import Projects from "../../Projects";
import React from "react";
import CustomHeader from "../../Header";
import './index.css';
import About from "../../About";
import { Link as ScrollLink } from 'react-scroll';

const { Content } = Layout;

const Home = () => (
    <div id="top">
         <CustomHeader />
         <Content className="home-content">
             <section className="hero-section" aria-label="Introduction">
                 <div className="hero-copy">
                     <p className="hero-kicker">City & Regional Planning / GeoAI / Climate Analytics</p>
                     <h1>Hello, I am Shengao Yi.</h1>
                     <p className="hero-summary">
                         Shengao Yi is a Ph.D. student at the University of Pennsylvania and a Penn AI Fellow.
                         His work connects urban analytics, environmental planning, microclimate modeling,
                         and interpretable AI for more resilient cities.
                     </p>
                     <div className="hero-actions">
                         <a href="#/Albedopedia">Featured dataset</a>
                         <a href="#/SurfaceMRT">Heat research</a>
                         <ScrollLink className="hero-scroll-link" to="about" smooth duration={500} offset={-96}>
                             About / CV
                         </ScrollLink>
                     </div>
                     <div className="hero-metrics" aria-label="Research highlights">
                         <div>
                             <strong>GeoAI</strong>
                             <span>Urban sensing and spatial modeling</span>
                         </div>
                         <div>
                             <strong>Climate</strong>
                             <span>Heat exposure and mitigation</span>
                         </div>
                         <div>
                             <strong>Planning</strong>
                             <span>Equity, accessibility, and design</span>
                         </div>
                     </div>
                 </div>
                 <div className="hero-map" aria-label="Research geography map">
                      <Map />
                 </div>
             </section>
             <div className="profile-container">
                 <About />
             </div>
        </Content>
        <Projects />
    </div>
)

export default Home;
