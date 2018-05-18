import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route
} from 'react-router-dom';
import Home from './home/Home';
import NotFound from './NotFound';
import '../styles/App.css';
import '../styles/index.less';
import '../styles/lib/animate.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div style={{height:'100%',width:'100%'}}>
                <Switch>
                    <Route exact path="/" render={()=><Redirect to="/home"/>}/>
                    <Route path="/home" component={Home} />
                    <Route path="/404" component={NotFound} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
