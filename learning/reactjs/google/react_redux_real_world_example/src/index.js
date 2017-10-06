import React,{Component} from "react";
import ReactDOM from "react-dom";
import {Router,Route,IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux";
import store from "./store";

import App from "./components/App";
import Home from "./components/Home";

ReactDOM.render(<Provider><Router history={hashHistory}>
    <Route path="/" component={App}>
       <IndexRoute component={Home}/>
    </Route>
</Router></Provider>,document.getElementById("root"))