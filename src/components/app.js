import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "../components/navbar/navbar";
import Gallery from "../components/gallery/gallery";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import GalleryInfo from "./gallery/gallery-info";
import NoMatch from "./pages/no-match";
import Hidden from "./pages/hidden";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Router>
            <NavBar />
            <div className="banner-wrapper">
              <div className="banner-title">
                <h1>AGAPE STILETO</h1>

                <h1>HaKuNa MaTaTa</h1>
              </div>
            </div>
            <div className="page-container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/zzWx" component={Hidden} />
                <Route
                  exact
                  path="/gallery/:location.pathname"
                  component={GalleryInfo}
                />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}
