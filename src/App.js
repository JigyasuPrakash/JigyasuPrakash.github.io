import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import "./App.css";
import NotFoundPage from "./component/NotFoundPage";
import "w3-css";
import Header from "./component/Header";
import More from "./component/More";
import Projects from "./component/Projects";
import Home from "./component/Home";
import Particle from "./component/Particle";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Gallery from "./component/Gallery";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/more" component={More} />
                  <Route path="/gallery" component={Gallery} />
                  <Route path="/404" component={NotFoundPage} />
                  <Redirect to="/404" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Particle />
      </BrowserRouter>
    );
  }
}

export default App;
