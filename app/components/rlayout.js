import React from 'react';
import { Layout } from 'antd';
const { Sider } = Layout;

/*components*/
import RHeader from './Header/rHeader'
import RHMenu from './Header/rHmenu';
import RComtent from './Comtent/rComtent'
import RFooter from './Footer/rFooter'


export default class RLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true
        }
    }
    onCollapse(collapsed) {
        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse.bind(this)}>
                    <div className="logo">
                        <a href="/">
                            <img src="/Images/news.png" alt="" />
                            <span className={(!this.state.collapsed) ? "visited" : null}>实时闻报</span>
                        </a>
                    </div>
                    <RHMenu />
                </Sider>
                <Layout>
                    <RHeader />
                    <RComtent />
                    <RFooter />
                </Layout>

            </Layout>
        )
    }
}