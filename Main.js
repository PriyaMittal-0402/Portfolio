import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "./projects/Projects";
import Error404 from "../pages/errors/error404/Error";
import Hobbies from "../pages/Hobbies/hobbies";





import { settings } from "../portfolio.js";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          {/* SPLASH ONLY */}
          {settings.isSplash && (
            <Route
              exact
              path="/"
              render={(props) => (
                <Splash {...props} theme={this.props.theme} />
              )}
            />
          )}

          {/* HOME */}
          <Route
            exact
            path="/home"
            render={(props) => (
              <Home {...props} theme={this.props.theme} />
            )}
          />

          <Route
            exact
            path="/experience"
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />

          <Route
            exact
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />

          <Route
            exact
            path="/projects"
            render={(props) => (
              <Projects {...props} theme={this.props.theme} />
            )}
          />

          <Route
            exact
            path="/contact"
            render={(props) => (
              <Contact {...props} theme={this.props.theme} />
            )}
          />

          <Route
  exact
  path="/hobbies"
  render={(props) => (
    <Hobbies {...props} theme={this.props.theme} />
  )}
/>



          {/* FALLBACK */}
          <Route
            path="*"
            render={(props) => (
              <Error404 {...props} theme={this.props.theme} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}


