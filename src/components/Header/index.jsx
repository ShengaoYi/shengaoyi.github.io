import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Dropdown  } from 'antd';
import { Link as ScrollLink } from 'react-scroll';
import {Link} from "react-router-dom";
import { MenuOutlined } from '@ant-design/icons';

const { Header } = Layout;
const CustomHeader = () => {
    const lightBlue = '#70C1B3';

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

    const menuItems = (
        <Menu selectedKeys={[selectedKey]} style={{ backgroundColor: lightBlue, borderBottom: 'none' }}>
            <Menu.Item key="1" style={{ color: 'white' }}>
                <ScrollLink to="top" smooth={true} duration={500} offset={0}  onClick={() => setSelectedKey('1')}>
                    Home
                </ScrollLink>
            </Menu.Item>
            <Menu.Item key="2" style={{ color: 'white' }} >
                <ScrollLink to="data-analytics-web-development" smooth={true} duration={500} offset={-100} onClick={() => setSelectedKey('2')}>
                    Projects
                </ScrollLink>
            </Menu.Item>
            <Menu.Item key="3" style={{ color: 'white' }} onClick={() => setSelectedKey('3')}>
                Publications
            </Menu.Item>
            <Menu.Item key="4" style={{ color: 'white' }} onClick={() => setSelectedKey('4')}>
                About
            </Menu.Item>
        </Menu>
    );

    return (
        <Header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: lightBlue
        }}>
            <div style={{ color: 'white', fontSize: '1.5em' }}>
                Shengao Yi
            </div>

            {isMobile ? (
                <Dropdown overlay={menuItems} trigger={['click']}>
                    <Button type="text" icon={<MenuOutlined />} />
                </Dropdown>
            ) : (
                <Menu mode="horizontal" selectedKeys={[selectedKey]} style={{ width: '30%', backgroundColor: lightBlue, borderBottom: 'none' }}>
                    {menuItems.props.children}
                </Menu>
            )}
        </Header>
    );
}


// const CustomHeader = () => {
//     const lightBlue = '#70C1B3';
//
//     const [selectedKey, setSelectedKey] = useState('1');
//
//     useEffect(() => {
//         console.log("Selected Key:", selectedKey);
//     }, [selectedKey]);
//
//     return (
//         <Header style={{
//                 position: 'fixed',
//                 top: 0,
//                 left: 0,
//                 width: '100%',
//                 zIndex: 1000,
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'center',
//                 backgroundColor: lightBlue
//             }}>
//
//             <div style={{ color: 'white', fontSize: '1.5em' }}>
//                 Shengao Yi
//             </div>
//
//             <Menu mode="horizontal" selectedKeys={[selectedKey]} style={{ backgroundColor: lightBlue, borderBottom: 'none' }}>
//                 {/*<Menu.Item key="1" style={{ color: 'white' }}><Link to="/home">Home</Link></Menu.Item>*/}
//                 <Menu.Item key="1" style={{ color: 'white' }} >
//                     <ScrollLink
//                         to="top"
//                         smooth={true}
//                         duration={500}
//                         offset={0}
//                         onClick={() => setSelectedKey('1')}
//                     >
//                         Home
//                     </ScrollLink>
//                 </Menu.Item>
//                 <Menu.Item key="2" style={{ color: 'white' }}>
//                     <ScrollLink
//                         to="data-analytics-web-development"
//                         smooth={true}
//                         duration={500}
//                         offset={-100}
//                         onClick={() => setSelectedKey('2')}
//                     >
//                         Projects
//                     </ScrollLink>
//                 </Menu.Item>
//                 <Menu.Item key="3" style={{ color: 'white' }} onClick={() => setSelectedKey('3')}>publications</Menu.Item>
//             </Menu>
//         </Header>
//     );
// }
export default CustomHeader;