import React from 'react';
import {Menu,Icon} from 'antd';

const SubMenu = Menu.SubMenu;

export default class RHMenu extends React.Component{

    render(){
        return(
            <Menu mode="inline">
                <Menu.Item key="">
                    <Icon type="book" />
                    <span>头条</span>
                </Menu.Item>
            </Menu>
        )
    }
}