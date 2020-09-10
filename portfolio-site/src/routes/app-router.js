import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNotFound from "../components/page-not-found";
import Header from "../components/header";
import Home from "../components/home";
import Contact from "../components/contact";
import PortfolioItem from "../components/portfolio-item";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioItem} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
