import {createStore,applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { promiseMiddleware, localStorageMiddleware } from './middleware';
import RootReducer from "./reducers";

// ONE WAY

// const getMiddleware=()=>{
//     if(process.env.NODE_ENV==="production"){
//         return applyMiddleware(createLogger());
//     } else {
//         return applyMiddleware(createLogger())
//     }
// }

// export default function(){
//     return createStore(RootReducer,composeWithDevTools(getMiddleware()))
// } 

// SECOND WAY
let store;

export default{
    configure(initialState){
           
      if(initialState){
          store=createStore(RootReducer,initialState, applyMiddleware(promiseMiddleware,localStorageMiddleware,createLogger()));
          return store;
      }

      store=createStore(RootReducer,composeWithDevTools(applyMiddleware(promiseMiddleware,localStorageMiddleware,createLogger())));
      console.log(store);

      return store;
    },

    currentStore(){
        return store;
    }
}