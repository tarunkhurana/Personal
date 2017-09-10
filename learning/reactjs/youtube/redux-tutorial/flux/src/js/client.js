import React from "react";
import ReactDom from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/layout";
import Todos from "./pages/Todos";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";

const app=document.getElementById("app");

ReactDom.render(
<Router history={hashHistory}>
  <Route path="/" component={Layout}>  
    <IndexRoute component={Todos}></IndexRoute>
    <Route path="favorites" component={Favorites}></Route>
      <Route path="settings" component={Settings}></Route>
  </Route>
</Router>
    ,app
)