import React, {Component} from 'react';

import {
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Dashboard from "../pages/dashboard/Dashboard";
import Buttons from "../pages/ui/Buttons";
import Icons from '../pages/ui/Icons';
import Spins from '../pages/ui/Spins';
import Modals from '../pages/ui/Modals';
import Notifications from '../pages/ui/Notifications';
import Tabs from '../pages/ui/Tabs';
import Banners from '../pages/ui/banners';
import Wysiwyg from '../pages/ui/Wysiwyg';
import Drags from '../pages/ui/Draggable';
import Gallery from '../pages/ui/Gallery';
import MapUi from '../pages/ui/map';
import BasicAnimations from '../pages/animation/BasicAnimations';
import ExampleAnimations from '../pages/animation/ExampleAnimations';
import BasicTable from '../pages/tables/BasicTables';
import AdvancedTable from '../pages/tables/AdvancedTables';
import AsynchronousTable from '../pages/tables/AsynchronousTable';
import BasicForm from '../pages/forms/BasicForm';
import Echarts from '../pages/charts/Echarts';
import Recharts from '../pages/charts/Recharts';

import Cssmodule from '../pages/cssmodule';

export default class Routers extends Component {
    constructor(props) {
        super(props);
    }
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
                {/*<Route exact path="/" render={()=><Redirect to="/home"/>}/>*/}
            </Switch>
        );
    }
}