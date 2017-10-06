import React from "react";
import {Route, IndexRoute} from "react-router";
import HomePage from "./components/home/HomePage";
import CatsPage from "./components/cats/CatsPage";
import CatPage from "./components/cats/CatPage";
import NewCatPage from "./components/cats/NewCatPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/cats" component={CatsPage}>
    <Route path="/cats/new" component={NewCatPage}/>
    <Route path="/cats/:id" component={CatPage}/>
    </Route>
  </Route>
)