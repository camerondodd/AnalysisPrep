import React, { Component } from 'react';
import Home from './components/home';
import AnalysisFinder from './components/analysis-finder';
import Info from './components/info';
import Calc from './components/calc';
import Definitions from './components/definitions';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router> 
          <div>
            <main>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/analysisfinder' component={AnalysisFinder}></Route>
              <Route exact path='/info' component={Info}></Route>
              <Route exact path='/calc' component={Calc}></Route>
              <Route exact path='/definitions' component={Definitions}></Route>
            </main>
          </div>
      </Router>
    );
  };
};

export default App;
