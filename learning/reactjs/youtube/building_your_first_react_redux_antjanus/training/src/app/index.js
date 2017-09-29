import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {provider} from "react-redux";
import thunkMiddleware from "redux-thunk";
import { authenticationMiddleware } from './middleware';

import App from "./app";

import RootReducer from "./reducers";

let store=createStore(RootReducer,applyMiddleware(thunkMiddleware, authenticationMiddleware));

let rootElement=document.getElementById("root");

ReactDOM.render(
    <Provider >
        <App/>
    </Provider>,
    root
);