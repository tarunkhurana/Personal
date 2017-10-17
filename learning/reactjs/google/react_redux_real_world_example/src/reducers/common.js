import {APP_LOAD, REGISTER, REDIRECT, LOGIN, LOGOUT, SETTINGS_SAVED} from "../constants";

const inititalState={
    appName:"Conduit"
}

export default (state=inititalState,action)=>{
    console.log(action);
   switch(action.type){
       case APP_LOAD:
       return {
           ...state,
           token:action.token || null,
           appLoaded:true,
           currentUser:action.payload? action.payload.user:null
       }
    case REDIRECT:
    return { ...state, redirectTo: null };
       case REGISTER:
       case LOGIN:
       return {
           ...state,
           redirectTo:action.error?null:"/",
           token:action.error?null:action.payload.user.token,
           currentUser:action.error?null:action.payload.user
       }
       case LOGOUT:
       return {
           ...state,
           redirectTo:action.error?null:"/",
           token:null,
           currentUser:null
       }
       case SETTINGS_SAVED:
       return {
         ...state,
          redirectTo: action.error ? null : '/',
          currentUser: action.error ? null : action.payload.user
       };
       default:
       return state;
   }
}