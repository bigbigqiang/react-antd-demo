import React, {Component} from 'react';

import {Menu, Icon} from 'antd';

export default class Menus extends Component {
    constructor(props) {
        super(props);
        this.renderSubMenu = this.renderSubMenu.bind(this);
        this.renderMenuItem = this.renderMenuItem.bind(this);
    }
    renderSubMenu(item){
        return (
            <Menu.SubMenu
                key={item.key}
                title={<span>{item.icon && <Icon type={item.icon} />}<span>{item.title}</span></span>}
            >
                {item.sub && item.sub.map(item => this.renderMenuItem(item))}
            </Menu.SubMenu>
        )
    }
    renderMenuItem(item){
        return (
            <Menu.Item
                key={item.key}
            >
                {item.icon && <Icon type={item.icon} />}<span >{item.title}</span>
            </Menu.Item>
        )
    }

    render() {
        return (
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.props.onClick}>
                {this.props.menus.map(item => item.sub && item.sub.length ?
                    this.renderSubMenu(item) : this.renderMenuItem(item)
                )}
            </Menu>
        );
    }
}