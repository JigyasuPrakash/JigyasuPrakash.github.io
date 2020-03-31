import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import 'w3-css';
import Header from './component/Header';
import Particle from './component/Particle'
import More from './component/More';
import Projects from './component/Projects';
import Home from './component/Home';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Particle />
        <Header />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade">
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/more" component={More} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </BrowserRouter>
    )
  }
}

export default App;