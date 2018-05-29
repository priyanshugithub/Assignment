import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Nav';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import FaIconPack from 'react-icons/lib/fa';
import IoIconPack from 'react-icons/lib/io';
import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import Sidebar from 'react-bootstrap-sidebar';




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
