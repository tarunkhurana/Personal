import * as types from "./actionTypes";
import HobbyApi from "../api/HobbyApi";

export function loadHobiesSuccess(hobbies){
    return {
        type:types.LOAD_HOBBIES_SUCCESS,
        payload:{
            hobbies
        }
    }
}

export function loadHobbies(){
    return function(dispatch){
    return HobbyApi.getAllHobbies().then(hobbies=>{
         dispatch(loadHobiesSuccess(hobbies));
    }).catch(error=>{
        throw(error);
    })
  }
}
