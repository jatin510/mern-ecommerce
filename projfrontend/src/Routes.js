import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./core/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
