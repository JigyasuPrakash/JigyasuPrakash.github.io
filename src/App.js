import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './component/Header';
import Particle from './component/Particle'
import About from './component/About';
import Projects from './component/Projects';
import Home from './component/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Particle />
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
      </Router>

    )
  }
}

export default App;