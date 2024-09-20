import React, { useState } from 'react';
import '../../Projects/index.css';
import './index.css';
import AlbedoMap from "./albedo_map";
import AlbedoCard from "./albedo_card";
import {Breadcrumb, Layout, Row, Tooltip} from "antd";
import {Link} from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Button, Space } from 'antd';
import {Image} from 'antd';

const {Content} = Layout;

const cities = [
  {
    key: '1',
    label: 'Atlanta',
    coordinates: [-84.4080, 33.7700],
    zoom: 10.8,
    legendData: ["< 0.13", "< 0.19", "< 0.26", "< 0.36", "0.36 +"],
    // rasterValues: [5, 19, 26, 36, 37]
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '2',
    label: 'Austin',
    coordinates: [-97.7431, 30.3072],
    zoom: 10,
    legendData: ["< 0.12", "< 0.16", "< 0.22", "< 0.31", "0.32 +"],
    // rasterValues: [12, 16, 22, 31, 32]
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '3',
    label: 'Baltimore',
    coordinates: [-76.6122, 39.2904],
    zoom: 11,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [9, 16, 23, 34, 35]
  },
  {
    key: '4',
    label: 'Boston',
    coordinates: [-71.0589, 42.3601],
    zoom: 12,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '5',
    label: 'Charlotte',
    coordinates: [-80.8431, 35.2271],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '6',
    label: 'Chicago',
    coordinates: [-87.6298, 41.8781],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '7',
    label: 'Cleveland',
    coordinates: [-81.6944, 41.4993],
    zoom: 11,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '8',
    label: 'Dallas',
    coordinates: [-96.7970, 32.7767],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '9',
    label: 'Denver',
    coordinates: [-104.9903, 39.7392],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '10',
    label: 'Detroit',
    coordinates: [-83.0458, 42.3314],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '11',
    label: 'Houston',
    coordinates: [-95.3698, 29.7604],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '12',
    label: 'Indianapolis',
    coordinates: [-86.1581, 39.7684],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '13',
    label: 'Las Vegas',
    coordinates: [-115.1398, 36.1699],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '14',
    label: 'Los Angeles',
    coordinates: [-118.2437, 34.0522],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '15',
    label: 'Louisville',
    coordinates: [-85.7585, 38.2527],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '16',
    label: 'Memphis',
    coordinates: [-90.0490, 35.1495],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '17',
    label: 'Miami',
    coordinates: [-80.1918, 25.7617],
    zoom: 11,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '18',
    label: 'Milwaukee',
    coordinates: [-87.9065, 43.0389],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '19',
    label: 'Minneapolis',
    coordinates: [-93.2650, 44.9778],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '20',
    label: 'Nashville',
    coordinates: [-86.7816, 36.1627],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '21',
    label: 'New York City',
    coordinates: [-74.0060, 40.7128],
    zoom: 10.7,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '22',
    label: 'Oklahoma City',
    coordinates: [-97.5164, 35.4676],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '23',
    label: 'Philadelphia',
    coordinates: [-75.1652, 40.0026],
    zoom: 10.7,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '24',
    label: 'Phoenix',
    coordinates: [-112.0740, 33.4484],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '25',
    label: 'Pittsburgh',
    coordinates: [-79.9959, 40.4406],
    zoom: 11,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '26',
    label: 'Richmond',
    coordinates: [-77.4360, 37.5407],
    zoom: 11,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '27',
    label: 'Sacramento',
    coordinates: [-121.4944, 38.5816],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '28',
    label: 'Salt Lake City',
    coordinates: [-111.8910, 40.7608],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '29',
    label: 'San Antonio',
    coordinates: [-98.4936, 29.4241],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '30',
    label: 'San Diego',
    coordinates: [-117.1611, 32.7157],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '31',
    label: 'San Francisco',
    coordinates: [-122.4194, 37.7749],
    zoom: 10.5,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '32',
    label: 'Seattle',
    coordinates: [-122.3321, 47.6062],
    zoom: 11,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '33',
    label: 'St. Louis',
    coordinates: [-90.1994, 38.6270],
    zoom: 10,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  },
  {
    key: '34',
    label: 'Washington D.C.',
    coordinates: [-77.0369, 38.9072],
    zoom: 10.5,
    legendData: ["< 0.05", "< 0.14", "< 0.19", "< 0.26", "0.26 +"],
    rasterValues: [5, 14, 19, 26, 27]
  }
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
        <div className="content" style={{ width: '100%' }}>
          <div className="albedo-map">
            <AlbedoMap center={selectedCity.coordinates} zoom={selectedCity.zoom} legendData={selectedCity.legendData} rasterValues={selectedCity.rasterValues} />
          </div>
          <div className="city-cards">
            <AlbedoCard
              name="Amsterdam"
              greenViewIndex={20.6}
              populationDensity="4,908/km²"
              imageUrl="path_to_your_image"
            />
            <AlbedoCard
              name="New York"
              greenViewIndex={15.3}
              populationDensity="10,194/km²"
              imageUrl="path_to_your_image"
            />
            <AlbedoCard
              name="New York"
              greenViewIndex={15.3}
              populationDensity="10,194/km²"
              imageUrl="path_to_your_image"
            />
            <AlbedoCard
              name="New York"
              greenViewIndex={15.3}
              populationDensity="10,194/km²"
              imageUrl="path_to_your_image"
            />
            <AlbedoCard
              name="New York"
              greenViewIndex={15.3}
              populationDensity="10,194/km²"
              imageUrl="path_to_your_image"
            />

          </div>
        </div>
      </Content>
    </div>
  );
};
export default Albedopedia;