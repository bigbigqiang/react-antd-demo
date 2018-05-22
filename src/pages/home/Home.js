import React, {Component} from 'react';
// import { connect } from 'react-redux';

import './home.css'

import menus from '../../constants/menus';

import {Layout, Icon} from 'antd';
import Menus from '../../components/menus';
import Routers from '../../routers/routers';
import UserInfo from "../../components/userInfo";

const {Header, Sider, Content} = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
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
                        <UserInfo/>
                    </Header>
                    <Content style={{padding: 24, background: 'rgb(240, 242, 245)', minHeight: 280}}>
                        {/*<button onClick={this.props.changeName}>change name</button>*/}
                        {/*<button onClick={this.props.showDialog}>showDialog</button>*/}
                        {/*<div>{`${this.props.dialog}`} </div>*/}
                        {/*<div>{`${this.props.card.name}`} </div>*/}
                        <Routers routerProps={this.props}/>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Home;

// function mapStateToProps(state) {
//     return state
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         changeName () {
//             dispatch({
//                 type: 'CHANGE_NAME',
//                 name: '葬爱'
//             });
//         },
//         showDialog () {
//             dispatch({
//                 type: 'SHOW_DIALOG'
//             })
//         }
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(Home)
