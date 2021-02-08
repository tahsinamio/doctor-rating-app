import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Footer from "./Footer";
import HomeImage from "./HomeImage";
import Landing from "./Landing";
import DoctorPage from "./DoctorPage";
import Admin from "./Admin";
import DoctorNew from "./surveys/DoctorNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={HomeImage} />
          <div className="container" style={{ paddingBottom: "500px" }}>
            <Route exact path="/" component={Landing} />
            <Route path="/doctors" component={DoctorPage} />
            <Route path="/admin" component={Admin} />
            <Route path="/create/doctor" component={DoctorNew} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
