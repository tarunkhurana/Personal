import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function HobbyReducer(state=initialState.hobbies,action){
    switch(action){
        case types.LOAD_HOBBIES_SUCCESS:
        return action.hobbies
        default:
        return state;

    }

}