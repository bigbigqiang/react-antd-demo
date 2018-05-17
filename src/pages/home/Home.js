import React, {Component} from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';

import './home.css'

import About from '../about/About';
import menus from '../constants/menus';

import {Layout, Menu, Icon} from 'antd';

const {Header, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;


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
        console.log(this.props.match.url);
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
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleClick}>
                        <Menu.Item key="1">
                            <Icon type="mobile"/>
                            <span>首页</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop"/>
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="user"/><span>User</span></span>}
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="team"/><span>Team</span></span>}
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file"/>
                            <span>File</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        <Switch>
                            <Route path={`${this.props.match.url}/:topicId`} component={About}/>
                            <Route exact path={this.props.match.url} render={() => (
                                <h3>{this.props.match.url}请选择一个主题。</h3>
                            )}/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}
