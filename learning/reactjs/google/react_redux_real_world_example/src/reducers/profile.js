import {PROFILE_PAGE_LOADED, PROFILE_PAGE_UNLOADED, FOLLOW_USER, UNFOLLOW_USER} from "../constants";
export default (state={},action)=>{
    switch(action.type){
        case PROFILE_PAGE_LOADED:
        return {
            ...state,
            ...action.payload[0].profile
        }
        case PROFILE_PAGE_UNLOADED:
        return {};
        case FOLLOW_USER:
        return {
            ...state,
            ...action.payload.profile
        }
        case UNFOLLOW_USER:
        return {
            ...state,
            ...action.payload.profile
        }
        default:
        return state;
    }
}