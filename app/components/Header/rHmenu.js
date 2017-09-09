import React from 'react';
import {Menu,Icon} from 'antd';

const SubMenu = Menu.SubMenu;

const Style = {
    fontSize:"16px"
}

export default class RHMenu extends React.Component{

    render(){
        return(
            <Menu mode="inline" defaultSelectedKeys={['0']} theme="dark">
                <Menu.Item key="1" style={Style}>
                    <Icon type="book" />
                    <span>头条</span>
                </Menu.Item>
                <Menu.Item key="2" style={Style}>
                    <Icon type="edit" />
                    <span>社会</span>
                </Menu.Item>
                <Menu.Item key="3" style={Style}>
                    <Icon type="api" />
                    <span>国内</span>
                </Menu.Item>
                <Menu.Item key="4" style={Style}>
                    <Icon type="global" />
                    <span>国际</span>
                </Menu.Item>
                <Menu.Item key="5" style={Style}>
                    <Icon type="star" />
                    <span>娱乐</span>
                </Menu.Item>
                <Menu.Item key="6" style={Style}>
                    <Icon type="trophy" />
                    <span>体育</span>
                </Menu.Item>
                <Menu.Item key="7" style={Style}>
                    <Icon type="rocket" />
                    <span>军事</span>
                </Menu.Item>
                <Menu.Item key="8" style={Style}>
                    <Icon type="fork" />
                    <span>科技</span>
                </Menu.Item>
                <Menu.Item key="9" style={Style}>
                    <Icon type="line-chart" />
                    <span>财经</span>
                </Menu.Item>
                <Menu.Item key="10" style={Style}>
                    <Icon type="tags" />
                    <span>时尚</span>
                </Menu.Item>
            </Menu>
        )
    }
}