import * as types from "../actions/actionTypes";
import initialState from "./initialState";
import {browserHistory} from "react-router";

export default function catsReducer(state=initialState.cats,action){
    switch(action.type){
        case types.LOAD_CATS_SUCCESS:
        return action.payload.cats;
        case types.UPDATE_CAT_SUCCESS:
        return [
            ...state.filter(cat=>cat.id!==action.payload.cat.id), Object.assign({},action.payload.cat)
        ]
        case types.CREATE_CAT_SUCCESS:
        browserHistory.push(`/cats/${action.payload.cat.id}`)
        return[
            ...state.filter(cat=>cat.id!==action.payload.cat.id),Object.assign({},action.payload.cat)
        ]
        case types.DELETE_CAT_SUCCESS:
        //ONE WAY
        //browserHistory.push('/cats');
        // return [
        //     ...state.cats.filter(cat=>cat.id!==action.payload.cat.id)
        // ]
       // SECOND WAY 
       const newState=Object.assign([],state);
       const indexToDelete=state.findIndex(cat=>{
           return cat.id===action.payload.cat.id
       })

       newState.splice(indexToDelete,1);
        browserHistory.push('/cats');
        return newState;
        default:
        return state;
    }
}