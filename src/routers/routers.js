import React, {Component} from 'react';

import {
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

// 异步按需加载component
function asyncComponent(getComponent) {
    return class AsyncComponent extends Component {
        static Component = null;
        state = { Component: AsyncComponent.Component };

        componentWillMount() {
            if (!this.state.Component) {
                getComponent().then(({default: Component}) => {
                    AsyncComponent.Component = Component;
                    this.setState({ Component })
                })
            }
        }
        render() {
            const { Component } = this.state;
            if (Component) {
                return <Component {...this.props} />
            }
            return null
        }
    }
}

const Buttons = asyncComponent(() => import('../pages/ui/Buttons'));
const Icons = asyncComponent(() => import('../pages/ui/Icons'));
const Dashboard = asyncComponent(() => import('../pages/dashboard/Dashboard'));
const Spins = asyncComponent(() => import('../pages/ui/Spins'));
const Modals = asyncComponent(() => import('../pages/ui/Modals'));
const Notifications = asyncComponent(() => import('../pages/ui/Notifications'));
const Tabs = asyncComponent(() => import('../pages/ui/Tabs'));
const Banners = asyncComponent(() => import('../pages/ui/banners'));
const Wysiwyg = asyncComponent(() => import('../pages/ui/Wysiwyg'));
const Drags = asyncComponent(() => import('../pages/ui/Draggable'));
const Gallery = asyncComponent(() => import('../pages/ui/Gallery'));
const MapUi = asyncComponent(() => import('../pages/ui/map'));
const BasicAnimations = asyncComponent(() => import('../pages/animation/BasicAnimations'));
const ExampleAnimations = asyncComponent(() => import('../pages/animation/ExampleAnimations'));
const BasicTable = asyncComponent(() => import('../pages/tables/BasicTables'));
const AdvancedTable = asyncComponent(() => import('../pages/tables/AdvancedTables'));
const AsynchronousTable = asyncComponent(() => import('../pages/tables/AsynchronousTable'));
const BasicForm = asyncComponent(() => import('../pages/forms/BasicForm'));
const Echarts = asyncComponent(() => import('../pages/charts/Echarts'));
const Recharts = asyncComponent(() => import('../pages/charts/Recharts'));
const Cssmodule = asyncComponent(() => import('../pages/cssmodule'));

export default class Routers extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={`${this.props.routerProps.match.url}/index`} component={Dashboard}/>
                <Route exact path={`${this.props.routerProps.match.url}/ui/buttons`} component={Buttons}/>
                <Route exact path={`${this.props.routerProps.match.url}/ui/icons`} component={Icons}/>
                <Route exact path={`${this.props.routerProps.match.url}/ui/spins`} component={Spins}/>
                <Route exact path={`${this.props.routerProps.match.url}/ui/modals`} component={Modals}/>
                <Route exact path={`${this.props.routerProps.match.url}/ui/notifications`} component={Notifications}/>
                <Route exact path={`${this.props.routerProps.match.url}/ui/tabs`} component={Tabs}/>
                <Route exact path={`${this.props.routerProps.match.url}/ui/banners`} component={Banners}/>
                <Route exact path={`${this.props.routerProps.match.url}/ui/wysiwyg`} component={Wysiwyg}/>
                <Route exact path={`${this.props.routerProps.match.url}/ui/drags`} component={Drags}/>
                <Route exact path={`${this.props.routerProps.match.url}/ui/gallery`} component={Gallery}/>
                <Route exact path={`${this.props.routerProps.match.url}/ui/map`} component={MapUi}/>
                <Route exact path={`${this.props.routerProps.match.url}/animation/basicAnimations`} component={BasicAnimations}/>
                <Route exact path={`${this.props.routerProps.match.url}/animation/exampleAnimations`} component={ExampleAnimations}/>
                <Route exact path={`${this.props.routerProps.match.url}/table/basicTable`} component={BasicTable}/>
                <Route exact path={`${this.props.routerProps.match.url}/table/advancedTable`} component={AdvancedTable}/>
                <Route exact path={`${this.props.routerProps.match.url}/table/asynchronousTable`} component={AsynchronousTable}/>
                <Route exact path={`${this.props.routerProps.match.url}/form/basicForm`} component={BasicForm}/>
                <Route exact path={`${this.props.routerProps.match.url}/chart/echarts`} component={Echarts}/>
                <Route exact path={`${this.props.routerProps.match.url}/chart/recharts`} component={Recharts}/>
                <Route exact path={`${this.props.routerProps.match.url}/cssModule`} component={Cssmodule}/>
                <Route exact path={this.props.routerProps.match.url} render={() => (
                    <Dashboard />
                )}/>
                <Route path="*" render={()=><Redirect to="/404"/>} />
            </Switch>
        );
    }
}