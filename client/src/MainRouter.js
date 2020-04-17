import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/screens/Home";
import Artist from "./components/screens/Artist";

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/artist/:id" component={Artist} />
    </Switch>
  );
};

export default MainRouter;
