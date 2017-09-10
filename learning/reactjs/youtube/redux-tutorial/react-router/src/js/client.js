import React from "react";
import ReactDOM from "react-dom";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

import {Router, Route, IndexRoute, browserHistory} from "react-router";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives"  component={Archives}/>
      <Route path="settings" name="settings" component={Settings}/>
    </Route>
  </Router>,
app);
