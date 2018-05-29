import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Example from './Card';
import table from './table';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Sidebar from 'react-bootstrap-sidebar';



class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div>
      <Nav />
      <Route exact path="/table" component={table} />
      </div>
      </Router>
      
      </div>
    );
  }
}

export default App;
