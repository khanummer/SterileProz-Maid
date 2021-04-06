import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';

class App extends Component {

  render(){
    return(
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={() => <Home/>}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);