import React, { Component } from "react";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact={true}
              component={ProductList}
            />
            <Route
              path="/product/:productId"
              exact={true}
              component={ProductDetails}
            />
            <Route>404 Not Found</Route>
          </Switch>
        </Router>
      </>
    );
  }
}
