import {UPDATE_FIELD_AUTH, ASYNC_START, REGISTER, REGISTER_PAGE_UNLOADED, LOGIN, LOGIN_PAGE_UNLOADED} from "../constants";

export default (state={},action)=>{
    switch(action.type){
    case UPDATE_FIELD_AUTH:
    return {
        ...state,
        [action.payload.key]:action.payload.value
    }
    case REGISTER:
    return {
        ...state,
        inProgress:false,
        errors:action.error?action.payload.errors:null
    }
    case REGISTER_PAGE_UNLOADED:
    case LOGIN_PAGE_UNLOADED:
    return {};
    case LOGIN:
    return {
        ...state,
        inProgress:false,
        errors:action.error?action.payload.errors:null
    }
    case ASYNC_START:
    if(action.subtype===REGISTER || action.subtype===LOGIN){
        return {
            ...state,
            inProgress:true
        }
   }
    default:
    return state;
    }
}