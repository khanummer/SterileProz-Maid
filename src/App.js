import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';

class App extends Component {

  render(){
    return(
      <div>
        <Header/>
      </div>
    );
  }
}

export default withRouter(App);