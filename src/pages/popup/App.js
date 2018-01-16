import React, { Component } from "react";
import { connect } from "react-redux";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Switch>
            <Route exact path="/pages/popup.html" component={App} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
