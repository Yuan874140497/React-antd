import React from 'react';
import {Layout} from 'antd';

const {Content} = Layout;

let CStyle={
    margin:"20px 50px",
    backgroundColor:"#fff"
}

export default class RComtent extends React.Component{
    render(){
        return(
            <Content style={CStyle}>

            </Content>
        )
    }
}