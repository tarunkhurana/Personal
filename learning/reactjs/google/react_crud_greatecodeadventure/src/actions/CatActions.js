import CatsApi from "../api/CatsApi";
import * as types from './actionTypes';

export function loadCats(){
    return function(dispatch){
        return CatsApi.getAllCats().then(cats=>{
            dispatch(loadCatsSuccess(cats))
        }).catch(error=>{
            throw(error);
        })
    }
}

export function loadCatsSuccess(cats){
    return {
        type:types.LOAD_CATS_SUCCESS,
        payload:{
            cats
        }
    }
}

export function updateCat(cat){
    return function(dispatch){
        return fetch(CatsApi.updateCat(cat)).then(response=>{
            dispatch(updateCatSuccess(response));
        }).catch(error=>{
            throw(error);
        })
    }
}

export function updateCatSuccess(response){
    return{
        type:types.UPDATE_CAT_SUCCESS,
        payload:{
            cat:cat
        }
    }
}

export function createCat(cat){
   return function(dispatch){
       return CatsApi.createCat(cat).then(responseCat=>{
           dispatch(createCatSuccess(responseCat));
       }).catch(error=>{
           throw(error);
       })
   }
}

export function createCatSuccess(cat){
    return{
        type:types.CREATE_CAT_SUCCESS,
        payload:{
            cat:cat
        }
    }
}

export function deleteCat(cat){
    return function(dispatch){
        return CatsApi.deleteCat(cat).then(responseCat=>{
            dispatch(deleteCatSuccess(responseCat))
        }).catch(error=>{
            throw(error);
        })
    }
}

export function deleteCatSuccess(cat){
    return {
        type:types.DELETE_CAT_SUCCESS,
        payload:{
            cat
        }
    }
}