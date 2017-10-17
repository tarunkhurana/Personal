import React from "react";
import ReactDOM from "react-dom";
import {Router,Route,IndexRoute, hashHistory} from "react-router";
import {Provider} from "react-redux";
import store from "./store";

import App from "./components/App";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import ProfileFavorites from "./components/ProfileFavorites";

// DEFINE INITIAL STATE HERE ALSO. BUT I AM REFERRING common.js file for initial states if required
// const inititalState={
//     common:{
//     appName:"Conduit"
//     }
// }
const inititalState=null;

ReactDOM.render(<Provider  store={store.configure(inititalState)}><Router history={hashHistory}>
    <Route path="/" component={App}>
       <IndexRoute component={Home}/>
       <Route path="register" component={Register}/>
       <Route path="login" component={Login}/>
       <Route path="settings" component={Settings}/>
       <Route path="@:username" component={Profile}/>
       <Route path="@:username/favorites" component={ProfileFavorites}/>
    </Route>
</Router></Provider>,document.getElementById("root"))