import {SETTINGS_SAVED, SETTINGS_PAGE_UNLOADED, ASYNC_START} from "../constants";

export default (state={},action)=>{
    switch (action.type) {
        case SETTINGS_SAVED:
          return {
            ...state,
            inProgress: false,
            errors: action.error ? action.payload.errors : null
          };
        case ASYNC_START:
        if(action.subtype===SETTINGS_SAVED){
            return {
                ...state,
                inProgress:true
            }
        }  
        case SETTINGS_PAGE_UNLOADED:
          return {};
        default:
          return state;
      }
}