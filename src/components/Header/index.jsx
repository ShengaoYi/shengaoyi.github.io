import React, { useState, useEffect } from 'react';
import { Layout, Button, Dropdown } from 'antd';
import { Link as ScrollLink } from 'react-scroll';
import { MenuOutlined } from '@ant-design/icons';
import './index.css';

const { Header } = Layout;

const CustomHeader = () => {
    const [selectedKey, setSelectedKey] = useState('1');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navItems = [
        { key: '1', label: 'Home', target: 'top', offset: 0 },
        { key: '2', label: 'Work', target: 'data-analytics', offset: -96 },
        { key: '3', label: 'Publications', target: 'researches', offset: -96 },
        { key: '4', label: 'About', target: 'about', offset: -96 },
    ];

    const menuItems = navItems.map((item) => ({
        key: item.key,
        label: (
            <ScrollLink
                to={item.target}
                smooth
                duration={500}
                offset={item.offset}
                onClick={() => setSelectedKey(item.key)}
            >
                {item.label}
            </ScrollLink>
        ),
    }));

    return (
        <Header className="site-header">
            <div className="site-brand">
                <span>Shengao Yi</span>
                <small>GeoAI / Urban Analytics</small>
            </div>

            {isMobile ? (
                <Dropdown
                    menu={{ items: menuItems, selectedKeys: [selectedKey] }}
                    trigger={['click']}
                    overlayClassName="site-mobile-menu"
                >
                    <Button className="site-menu-button" type="text" icon={<MenuOutlined />} />
                </Dropdown>
            ) : (
                <nav className="site-nav" aria-label="Primary navigation">
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.key}
                            className={selectedKey === item.key ? 'site-nav-link is-active' : 'site-nav-link'}
                            to={item.target}
                            smooth
                            duration={500}
                            offset={item.offset}
                            onClick={() => setSelectedKey(item.key)}
                        >
                            {item.label}
                        </ScrollLink>
                    ))}
                </nav>
            )}
        </Header>
    );
}

export default CustomHeader;
