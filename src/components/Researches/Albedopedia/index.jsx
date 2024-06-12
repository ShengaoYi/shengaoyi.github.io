import React, { useState } from 'react';
import '../../Projects/index.css';
import './index.css';
import AlbedoMap from "./albedo_map";

import {Breadcrumb, Layout, Row, Tooltip} from "antd";
import {Link} from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Button, Space } from 'antd';
import {Image} from 'antd';

const {Content} = Layout;

const cities = [
  { key: '1', label: 'Atlanta', coordinates: [-84.3880, 33.7490] },
  { key: '2', label: 'Austin', coordinates: [-97.7431, 30.2672] },
  { key: '3', label: 'Baltimore', coordinates: [-76.6122, 39.2904] },
  { key: '4', label: 'Boston', coordinates: [-71.0589, 42.3601] },
  { key: '5', label: 'Charlotte', coordinates: [-80.8431, 35.2271] },
  { key: '6', label: 'Chicago', coordinates: [-87.6298, 41.8781] },
  { key: '7', label: 'Cleveland', coordinates: [-81.6944, 41.4993] },
  { key: '8', label: 'Dallas', coordinates: [-96.7970, 32.7767] },
  { key: '9', label: 'Denver', coordinates: [-104.9903, 39.7392] },
  { key: '10', label: 'Detroit', coordinates: [-83.0458, 42.3314] },
  { key: '11', label: 'Houston', coordinates: [-95.3698, 29.7604] },
  { key: '12', label: 'Indianapolis', coordinates: [-86.1581, 39.7684] },
  { key: '13', label: 'Las Vegas', coordinates: [-115.1398, 36.1699] },
  { key: '14', label: 'Los Angeles', coordinates: [-118.2437, 34.0522] },
  { key: '15', label: 'Louisville', coordinates: [-85.7585, 38.2527] },
  { key: '16', label: 'Memphis', coordinates: [-90.0490, 35.1495] },
  { key: '17', label: 'Miami', coordinates: [-80.1918, 25.7617] },
  { key: '18', label: 'Milwaukee', coordinates: [-87.9065, 43.0389] },
  { key: '19', label: 'Minneapolis', coordinates: [-93.2650, 44.9778] },
  { key: '20', label: 'Nashville', coordinates: [-86.7816, 36.1627] },
  { key: '21', label: 'New York City', coordinates: [-74.0060, 40.7128] },
  { key: '22', label: 'Oklahoma City', coordinates: [-97.5164, 35.4676] },
  { key: '23', label: 'Philadelphia', coordinates: [-75.1652, 39.9526] },
  { key: '24', label: 'Phoenix', coordinates: [-112.0740, 33.4484] },
  { key: '25', label: 'Pittsburgh', coordinates: [-79.9959, 40.4406] },
  { key: '26', label: 'Richmond', coordinates: [-77.4360, 37.5407] },
  { key: '27', label: 'Sacramento', coordinates: [-121.4944, 38.5816] },
  { key: '28', label: 'Salt Lake City', coordinates: [-111.8910, 40.7608] },
  { key: '29', label: 'San Antonio', coordinates: [-98.4936, 29.4241] },
  { key: '30', label: 'San Diego', coordinates: [-117.1611, 32.7157] },
  { key: '31', label: 'San Francisco', coordinates: [-122.4194, 37.7749] },
  { key: '32', label: 'Seattle', coordinates: [-122.3321, 47.6062] },
  { key: '33', label: 'St. Louis', coordinates: [-90.1994, 38.6270] },
  { key: '34', label: 'Washington D.C.', coordinates: [-77.0369, 38.9072] },
];

const Albedopedia = () => {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  const handleMenuClick = (e) => {
    const selected = cities.find((city) => city.key === e.key);
    if (selected) {
      setSelectedCity(selected);
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick} className="custom-dropdown-menu">
      {cities.map((city) => (
        <Menu.Item key={city.key}>{city.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
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
                title: <span>Albedopedia</span>,
              },
            ]}
          />
        </Row>
        <div className="title-container">
          <div className="title">
              <Dropdown overlay={menu} trigger={['click']} overlayStyle={{ width: 150 }}>
                  <Button className="dropdown-button">
                    <Space style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <span>{selectedCity.label}</span>
                      <DownOutlined />
                    </Space>
                  </Button>
              </Dropdown>
          </div>
        </div>
        <div className="content" style={{ width: '90%' }}>
          <div className="albedo-map">
            <AlbedoMap center={selectedCity.coordinates} zoom={12} />
          </div>
          {/*<h2>Abstract</h2>*/}
          {/*<p>*/}
          {/*  Urban homelessness, a manifestation of socioeconomic disparities, significantly impacts the quality of urban life. Despite its prevalence, elucidating the complex, non-linear relationships and interaction effects between various urban factors and homelessness presents considerable challenges. Traditional studies of homelessness struggle with methodological limitations and insufficient data coverage. This study utilized multi-source urban big data, the Light Gradient Boosting Machine (LightGBM) model, and SHapley Additive exPlanation (SHAP) analysis to uncover the nonlinearity and interpretability across different location types in New York City. Our results confirm that (1) the importance of features contributing to homelessness varies notably across different urban settings, such as in commercial area, the POI of information and communication exerts a greater influence, whereas in residential area, factors like felony crime density and median income emerge as critical. (2) Built environment and socioeconomic factors play a more importance role than urban landscape and transportation. (3) A majority of the examined urban factors exhibit show non-linear and threshold effects on homelessness. Thus, by uncovering specific determinants and their respective thresholds, this study makes a substantial contribution to the field of urban planning, aiming towards a sustainable, inclusive, and equitable urban future.*/}
          {/*</p>*/}
          {/*<h2>Overall analysis framework</h2>*/}
          {/*<p>*/}
          {/*  This study consists of three main parts: 1) Collect and extract features from the multi-source urban big data, including socioeconomic features, build environment, urban transportation, urban landscape,  and homeless data; 2) Machine learning models' validation, evaluation, and interpretation with SHAP; 3) Interpretation results analysis.*/}
          {/*</p>*/}
          {/*<h2>Policy implications</h2>*/}
          {/*<p>*/}
          {/*  The results from feature importance and non-linear relationship can help to find the potential high-risk areas of homelessness. This research can serve as a crucial guide for governments in allocating resources efficiently, tailoring interventions to the distinct needs of diverse homeless populations, and developing preventative strategies. For example, policies could be developed to increase the proportion of urban green spaces to exceed the identified 8.0\% threshold where a significant reduction in homelessness incidence is observed, such as incentivizing the creation of pocket parks and urban gardens in areas with high homelessness rates. Given the positive correlation of higher enclosure proportions with homelessness, urban design efforts could be targeted to prevent over-enclosure, while still providing sheltered public spaces for community activities. From the perspective of governmental responsibilities, addressing the underlying causes of homelessness is not only a moral obligation but is also pivotal for fostering societal harmony, improving public health, and boosting economic resilience. Proactively combating homelessness, in turn, alleviates pressure on public services and enhances the overall well-being of the community.*/}
          {/*</p>*/}
        </div>
      </Content>
    </div>
  );
};
export default Albedopedia;