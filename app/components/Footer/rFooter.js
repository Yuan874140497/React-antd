import React from 'react';
import {Layout} from 'antd';

const {Footer} = Layout

export default class RFooter extends React.Component{
    render(){
        return(
            <Footer style={{textAlign:'center',background:"#fff",fontWeight:"bold"}}>
                React-Ant Design NEWS ©2017 Created by Yuan
            </Footer>
        )
    }
}


