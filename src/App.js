import React from 'react';
import './App.css';
import Details from './Details';
import Statewise from './Statewise';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Scroll from './Scroll'
import District from './Districtwise';
function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/details" exact component={Details} />
        <Redirect from="/" exact to="/details" />
        <Route path="/statewise" component={Statewise} />
        <Route path="/districtwise" component={District} />
      </Switch>
      <Scroll></Scroll>
    </div>

  );
}

export default App;
