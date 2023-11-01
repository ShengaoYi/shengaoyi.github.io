import {Menu} from 'antd';
import {HomeOutlined} from '@ant-design/icons';
import {Avatar, Tooltip} from 'antd';
import {Link} from "react-router-dom";
import React from "react";
import ratIcon from '../../img/rats-icon.png';
import github from "../../img/github.png";
import LI from "../../img/LI.png";
import email from "../../img/email.jpg";

import { Image } from 'antd';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem(<Link to="/home">Home</Link>, '1', <HomeOutlined
        style={{fontSize: '35px'}}/>, null, null, null, {style: {fontSize: '30px'}}),
    getItem(<Link to="/RATScreener">RATScreener</Link>, '2', <Avatar shape="square" size="large"
                                                                     icon={<img src={ratIcon}
                                                                                alt="Avatar"/>}/>, null, null, null, {style: {fontSize: '30px'}}),
];
const MyMenu = () => {
    const onClick = (e) => {
        console.log('click ', e);
    };
    return (
        <div>
            <Menu
                onClick={onClick}
                style={{
                    width: 300,
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
            <Tooltip title="GitHub" placement="bottom">
                <a href="https://github.com/ShengaoYi" target={"_blank"}>
                    <Image width={50} src={github} preview={false} />
                </a>
            </Tooltip>
            <Tooltip title="LinkedIn" placement="bottom">
                <a href="https://www.linkedin.com/in/sheng-ao-yi-918738236/" target={"_blank"}>
                    <Image width={128} src={LI} preview={false} />
                </a>
            </Tooltip>
            <Tooltip title="Email" placement="bottom">
                <a href="mailto:yishengao@alumni.upenn.edu" target={"_blank"}>
                    <Image width={50} src={email} preview={false} />
                </a>
            </Tooltip>


        </div>


    )
};
export default MyMenu;