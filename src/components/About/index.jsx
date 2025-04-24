import React from 'react';
import './index.css';
import { Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, FileTextOutlined } from '@ant-design/icons';
import CV from './Shengao_Yi_CV.pdf';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => (
  <div id="about">
      <h1 id="about">About Me</h1>

      <div className="social-links">
          <a href="https://github.com/ShengaoYi" target="_blank" className="social-link">
              <GithubOutlined />
          </a>
          <a href="https://www.linkedin.com/in/shengao-yi-918738236/" target="_blank" className="social-link">
              <LinkedinOutlined />
          </a>
          <a href="https://scholar.google.com/citations?user=nY2VtioAAAAJ&hl=en&authuser=1" target="_blank" className="social-link">
            <FaGraduationCap />  {/* Google Scholar link */}
          </a>
          <a href="mailto:yishengao@alumni.upenn.edu" className="social-link">
              <MailOutlined />
              yishengao@alumni.upenn.edu
          </a>
          <Button type="primary" icon={<FileTextOutlined />} href={CV} target="_blank">
              CV
          </Button>
      </div>
      <section>
          <p style={{fontSize: 17}}>Shengao Yi (he/his) is a Ph.D. student in City & Regional Planning at the University of Pennsylvania Weitzman School of Design, concentrating on landscape planning and urban analytics. He is also a graduate researcher at the Urban Spatial Informatics Lab led by Professor Xiaojiang Li, aiming to combine Science, Data, and Design together to tackle the pressing urban challenges through the collaboration with communities.</p>
          <p style={{fontSize: 17}}>His research focuses on the AI for landscape/environmental planning, optimization and design, urban microclimate modeling, micro-scale urban analytics, and GeoAI. Aspiring to an academic career, he is dedicated to addressing socio-environmental challenges by developing innovative AI-driven approaches to mitigate urban heat effects, optimize green infrastructure, and enhance urban resilience.</p>
          <h2>Education</h2>
          <div className="resume-item">
              <div className="resume-item-title">Doctor of Philosophy in City and Regional Planning, University of Pennsylvania</div>
              <div className="resume-item-time">2024/08–</div>
          </div>
          <ul>
             <li>AI for Landscape/Environmental Planning, Optimization and Design, Micro-scale Urban analytics, GeoAI</li>
          </ul>
          <div className="resume-item">
              <div className="resume-item-title">Master of Urban Spatial Analytics, University of Pennsylvania</div>
              <div className="resume-item-time">2022/08–2023/05</div>
          </div>
          <ul>
             <li>Urban analytics, Web development</li>
          </ul>
          <div className="resume-item">
              <div className="resume-item-title">Bachelor's in Geospatial Information Engineering, Shenzhen University</div>
              <div className="resume-item-time">2018/09–2022/06</div>
          </div>
          <ul>
             <li>GIS, Urban analytics, Web development</li>
          </ul>
      </section>
      <section>
          <h2>Previous employment</h2>
          <div className="resume-item">
              <div className="resume-item-title">Associate Fellow at <a href="https://ldi.upenn.edu/fellows/fellows-directory/shengao-yi/" target="_blank" rel="noopener noreferrer">Leonard Davis Institute of Health Economics (Penn LDI)</a></div>
              <div className="resume-item-time">2024/12–</div>
          </div>
          <ul>
              <li>Leveraging AI and high-resolution spatio-temporal modeling to explore the impacts of heat exposure on vulnerable populations and public health outcomes.</li>
          </ul>
          <div className="resume-item">
              <div className="resume-item-title">Research Intern at <a href="https://mobility.mit.edu/" target="_blank" rel="noopener noreferrer">Urban Mobility Lab, MIT</a></div>
              <div className="resume-item-time">2023/06–2024/01</div>
          </div>
          <ul>
              <li>Conducting a research project focusing on investigating the impacts of misallocation of bus drivers by looking at socioeconomic characteristics associated with bus routes.</li>
          </ul>
          <div className="resume-item">
              <div className="resume-item-title">Data Analytics Intern at CityDNA</div>
              <div className="resume-item-time">2023/06–2023/08</div>
          </div>
          <ul>
              <li>Data Analytics, ArcPy, Python</li>
          </ul>
          <div className="resume-item">
              <div className="resume-item-title">Machine Learning Intern at Tencent</div>
              <div className="resume-item-time">2021/09–2022/06</div>
          </div>
          <ul>
             <li>Working on a project to detect fraudulent user behavior by analyzing multi-source spatio-temporal data and WeChat user trajectories.</li>
          </ul>
      </section>
      <section style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
          <div style={{ flex: 1 }}>
            <h2>Skillset</h2>
            <div className="resume-item">
               <div className="resume-item-title">Geospatial Data Science</div>
            </div>
            <ul>
                <li>Tools: Python, R, C++, Javascript, Pytorch, Tensorflow</li>
                <li>Software: ArcGIS, QGIS, Envi</li>
            </ul>
            <div className="resume-item">
               <div className="resume-item-title">Web Development</div>
            </div>
            <ul>
                <li>Front-end: React.</li>
                <li>Back-end: Flask, Node.js, Python, and SQL databases.</li>
                <li>Cloud computing: Experienced with Google Cloud Platform.</li>
            </ul>
            <div className="resume-item">
               <div className="resume-item-title">Visualization</div>
            </div>
            <ul>
                <li>Mapbox.gl, Deck.gl, Kepler.gl, MapVGL</li>
            </ul>
          </div>

          <div style={{ flex: 1 }}>
            <h2>Reviewed Journals</h2>
            <ul>
              <li>Nature Health</li>
              <li>Computers, Environment and Urban Systems</li>
              <li>Sustainable Cities and Society</li>
              <li>Scientific Data</li>
              <li>International Journal of Digital Earth</li>
              <li>Applied Geography</li>
              <li>Journal of Transport Geography</li>
              <li>Travel Behaviour and Society</li>
              <li>Computational Urban Science</li>
              <li>and so on...</li>
            </ul>
          </div>
      </section>

      {/*<section className="skillset">*/}
      {/*    <h2>Skillset</h2>*/}
      {/*    <div className="resume-item">*/}
      {/*       <div className="resume-item-title">Geospatial Data Science</div>*/}
      {/*    </div>*/}
      {/*    <ul>*/}
      {/*        <li>Tools: Python, R, C++, Javascript, Pytorch, Tensorflow</li>*/}
      {/*        <li>Software: ArcGIS, QGIS, Envi</li>*/}
      {/*    </ul>*/}
      {/*    <div className="resume-item">*/}
      {/*       <div className="resume-item-title">Web Development</div>*/}
      {/*    </div>*/}
      {/*    <ul>*/}
      {/*        <li>Front-end: React.</li>*/}
      {/*        <li>Back-end: Flask, Node.js, Python, and SQL databases.</li>*/}
      {/*        <li>Cloud computing: Experienced with Google Cloud Platform.</li>*/}
      {/*    </ul>*/}
      {/*    <div className="resume-item">*/}
      {/*       <div className="resume-item-title">Visualization</div>*/}
      {/*    </div>*/}
      {/*    <ul>*/}
      {/*        <li>Mapbox.gl, Deck.gl, Kepler.gl, MapVGL</li>*/}
      {/*    </ul>*/}
      {/*</section>*/}
  </div>
);

export default About;
