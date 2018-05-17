import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route
} from 'react-router-dom';
import Home from './home/Home';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div style={{height:'100%',width:'100%'}}>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                {/*<Redirect frome="/" to="/home"/>*/}
            </div>
        </Router>
    );
  }
}

export default App;
