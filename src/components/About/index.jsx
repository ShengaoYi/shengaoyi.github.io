import React from 'react';
import './index.css';
import { Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, FileTextOutlined } from '@ant-design/icons';
import CV from './Shengao_Yi_CV.pdf'

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
          <a href="mailto:yishengao@alumni.upenn.edu" className="social-link">
              <MailOutlined />
              yishengao@alumni.upenn.edu
          </a>
          <Button type="primary" icon={<FileTextOutlined />} href={CV} target="_blank">
              CV
          </Button>
      </div>
      <section>
          <h2>Education</h2>
          <div className="resume-item">
              <div className="resume-item-title">Doctor of Philosophy in Geography and Urban Studies, Temple University</div>
              <div className="resume-item-time">2023/09–</div>
          </div>
          <ul>
             <li>AI for Landscape Planning and Design, Micro-scale Urban analytics, GeoAI</li>
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
              <div className="resume-item-title">Research Intern at Urban Mobility Lab, MIT</div>
              <div className="resume-item-time">2023/06–</div>
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
      <section className="skillset">
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
      </section>
  </div>
);

export default About;
