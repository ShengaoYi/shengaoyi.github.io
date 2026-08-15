import React from 'react';
import './index.css';
import { Button } from 'antd';
import { GithubOutlined, LinkedinOutlined, MailOutlined, FileTextOutlined } from '@ant-design/icons';
import CV from './Shengao_CV_202605.pdf';
import { FaGraduationCap } from 'react-icons/fa';

const About = () => (
  <section id="about" className="about-section">
      <div className="about-heading">
          <p className="section-kicker">About</p>
          <h2>Research across data, design, and the urban environment.</h2>
          <p>
              Shengao Yi (he/his) is a Ph.D. student in City & Regional Planning and Penn AI Fellow
              at the University of Pennsylvania Weitzman School of Design. He is also a graduate
              researcher at the Urban Spatial Informatics Lab led by Professor Xiaojiang Li.
          </p>
      </div>

      <div className="about-grid">
          <div className="about-card about-bio">
              <h3>Focus</h3>
              <p>
                  His research develops AI-driven approaches for landscape and environmental planning,
                  urban microclimate modeling, micro-scale urban analytics, and GeoAI.
              </p>
              <p>
                  Across these projects, he connects interpretable machine learning, spatial data science,
                  and community-facing planning questions around heat, resilience, accessibility, and equity.
              </p>
              <div className="social-links">
                  <a href="https://github.com/ShengaoYi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <GithubOutlined />
                  </a>
                  <a href="https://www.linkedin.com/in/shengao-yi-918738236/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <LinkedinOutlined />
                  </a>
                  <a href="https://scholar.google.com/citations?user=nY2VtioAAAAJ&hl=en&authuser=1" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                      <FaGraduationCap />
                  </a>
                  <a href="mailto:yishengao@alumni.upenn.edu" aria-label="Email">
                      <MailOutlined />
                      <span>yishengao@alumni.upenn.edu</span>
                  </a>
                  <Button type="primary" icon={<FileTextOutlined />} href={CV} target="_blank">
                      CV
                  </Button>
              </div>
          </div>

          <div className="about-card">
              <h3>Current</h3>
              <div className="resume-item">
                  <div className="resume-item-title">Penn Climate Scholar</div>
                  <div className="resume-item-time">2026/08-</div>
              </div>
              <div className="resume-item">
                  <div className="resume-item-title">Ivy Plus Exchange Scholar, MIT Senseable City Lab</div>
                  <div className="resume-item-time">2026/08-</div>
              </div>
              <div className="resume-item">
                  <div className="resume-item-title">Penn AI Fellow</div>
                  <div className="resume-item-time">2026/01-</div>
              </div>
              <div className="resume-item">
                  <div className="resume-item-title">Associate Fellow, Penn Leonard Davis Institute of Health Economics</div>
                  <div className="resume-item-time">2024/12-</div>
              </div>
          </div>

          <div className="about-card">
              <h3>Education</h3>
              <div className="resume-item">
                  <div className="resume-item-title">Ph.D. in City and Regional Planning, University of Pennsylvania</div>
                  <div className="resume-item-time">2024/08-</div>
              </div>
              <div className="resume-item">
                  <div className="resume-item-title">Master of Urban Spatial Analytics, University of Pennsylvania</div>
                  <div className="resume-item-time">2022/08-2023/05</div>
              </div>
              <div className="resume-item">
                  <div className="resume-item-title">B.Eng. in Geospatial Information Engineering, Shenzhen University</div>
                  <div className="resume-item-time">2018/09-2022/06</div>
              </div>
          </div>

          <div className="about-card">
              <h3>Toolbox</h3>
              <div className="tag-list">
                  <span>Python</span>
                  <span>R</span>
                  <span>C++</span>
                  <span>JavaScript</span>
                  <span>PyTorch</span>
                  <span>TensorFlow</span>
                  <span>ArcGIS</span>
                  <span>QGIS</span>
                  <span>Mapbox GL</span>
                  <span>Deck.gl</span>
                  <span>Kepler.gl</span>
              </div>
          </div>

          <div className="about-card about-wide">
              <h3>Recent experience</h3>
              <div className="timeline-list">
                  <div>
                      <strong>Research Intern, Urban Mobility Lab, MIT</strong>
                      <span>2023/06-2024/01</span>
                      <p>Studied socioeconomic patterns associated with bus routes and operator allocation.</p>
                  </div>
                  <div>
                      <strong>Data Analytics Intern, CityDNA</strong>
                      <span>2023/06-2023/08</span>
                      <p>Worked on data analytics workflows with ArcPy and Python.</p>
                  </div>
                  <div>
                      <strong>Machine Learning Intern, Tencent</strong>
                      <span>2021/09-2022/06</span>
                      <p>Detected fraudulent user behavior from multi-source spatio-temporal data and trajectories.</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
);

export default About;
