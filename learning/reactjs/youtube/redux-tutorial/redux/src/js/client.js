// Single Reducer
//import { createStore } from "redux";

//Multiple Reducers
import {applyMiddleware,combineReducers,createStore} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";

// Single Reducer
// const reducer=function(state, action){
//   if(action.type==="INC"){
//     return state+action.payload;
//   } else if(action.type==="DEC"){
//     return state-action.payload;
//   } 
//   return state;
// }

const initialState={
  name:"",
  age:"",
  fetching:false,
  fetched:false,
  error:null,
  users:[]
}


//Multiple Reducers
const userReducer=(state=initialState,action)=>{
  //way1
  //const newState={...state}; 
  switch(action.type){
     case "CHANGE_NAME":
     //way 1
     //newState.name=action.payload;

     // You are mutating original state replacing old state. This is not a correct way
     //state.name=action.payload;
     
     // below two different types to mutate states either use ES6 way or pure javascript
     //state={...state,name:action.payload};
     state=Object.assign({},state,{name:action.payload})
     break;
     case "CHANGE_AGE":
      //way 1
     //newState.age=action.payload;
     
     // You are mutating original state replacing old state. This is not a correct way
     //state.age=action.payload;
     
     // below two different types to mutate states either use ES6 way or pure javascript
    // state={...state,age:action.payload};
     state=Object.assign({},state,{age:action.payload})
     break;
     case "FETCH_USERS_START":
     state={...state,fetching:true};
     break;
     case "RECEIVE_USERS":
     state={...state,
            fetching:false,
            fetched:true,
            users:action.payload
          };
     break;
     case "FETCH_USERS_ERROR":
     state={...state,
      error:action.payload
    };
     break;
     case "E":
     throw new Error("AHHH! Erorr");
     break;
   }
   //way 1
   //return newState
   return state;
};

const tweetsReducer=(state=[],action)=>{
  return state;
};

const reducers=combineReducers({
  user:userReducer,
  tweets:tweetsReducer
}
);


const error=(store)=>(next)=>(action)=>{
   try{
     next(action);
    } catch(e){
     console.log("AHHH!", e);
   }
};


// Custom  middleware
// const logger=(store)=>(next)=>(action)=>{
//   console.log("action fired ", action);
//   next(action);
// };

const middleware=applyMiddleware(promise(),thunk,logger(),error);

// Single Reducer
//const store=createStore(reducer,0);

//Multiple Reducers

// Use this way also or use es6 feature by adding default state i.e, in userReducer and tweetsReducer
// const store=createStore(reducers,{
//   user:{
//     name:"tarun",
//     age:29
//   },
//   tweets:[
//     {tweet:"Hello!"}
//   ]
// });
const store=createStore(reducers,middleware)

store.subscribe(()=>{
  console.log("store changed", store.getState());
});

// store.dispatch({type:"INC", payload:1});
// store.dispatch({type:"INC", payload:3});
// store.dispatch({type:"INC", payload:4});
// store.dispatch({type:"INC", payload:2});
// store.dispatch({type:"DEC", payload:10});

store.dispatch({type:"CHANGE_NAME",payload:"Tarun Khurana"});
store.dispatch({type:"CHANGE_AGE",payload:"29"});
store.dispatch({type:"CHANGE_TWEETS",payload:[{"tweet":"Hello!"}]});
store.dispatch({type:"E"});
// store.dispatch((dispatch)=>{
//   dispatch({type:"FETCH_USERS_START",payload:"FETCH_USERS_START"});
//   axios.get("http://rest.learncode.academy/api/western/users")
//        .then((response)=>{
//          dispatch({type:"RECEIVE_USERS",payload:response.data})
//        }).catch((err)=>{
//         dispatch({type:"FETCH_USERS_ERROR",payload:err})
//        });
// })

store.dispatch({
  type:"FETCH_USERS",
  payload:axios.get("http://rest.learncode.academy/api/western/users")
});