import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../components/about";
import Home from "../components/home";
import Contact from "../components/contact/index";
import Nav from "../components/navbar";
import Products from "../components/products";
import Product from "../components/product";

const Layout = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route path="/about" component={About}></Route>
          <Route exact path="/products" component={Product}></Route>
          <Route exact path="/products/:id" component={Product}></Route>
          <Route path="/Contact" component={Contact}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Layout;
