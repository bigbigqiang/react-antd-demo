import React, {Component} from 'react';

import './home.css'

import menus from '../../constants/menus';

import {Layout, Icon} from 'antd';
import Menus from '../../components/menus';
import Routers from '../../routers/routers';

const {Header, Sider, Content} = Layout;

export default class Home extends Component {
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.props.history.push(this.props.match.url+'/'+e.key);
    };

    render() {
        return (
            <Layout style={{height:'100%',width:'100%'}}>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <Menus menus={menus} onClick={this.handleClick}/>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: 'rgb(240, 242, 245)', minHeight: 280}}>
                        <Routers routerProps={this.props}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
