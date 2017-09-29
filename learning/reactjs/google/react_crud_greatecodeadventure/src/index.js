import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {Router, BrowserHistory} from "react-router";
import {Provider} from "react-redux";
import Routes from "./routes";
import configStore from "./store/configStore";

const store=configStore();

render(
    <Provider store={store}>
    <Router history={BrowserHistory} routes={Routes}/>
    </Provider>,
    document.getElementById("app")
);