import RootReducer from "./reducers";
import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";

const middlewares=[thunk];

if(process.env.NODE_ENV!=='production'){
    middlewares.push(createLogger());
}

export default function configStore(){
    return createStore(RootReducer,applyMiddleware(...middlewares))
}