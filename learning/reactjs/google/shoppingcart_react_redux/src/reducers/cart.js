import * as types from "../actions/actionTypes";

const initialState={
  productByIds:[],
  quantityByIds:{}
};

export const getProductByIds=state=> state.cart.productByIds;

export const getQuantityById=(state, productId)=> state.cart.quantityByIds[productId];


export default function cart(state=initialState, action){
    switch(action.type){
        case types.ADD_TO_CART:
        return {
            ...state,
            productByIds:state.productByIds.indexOf(action.productId)===-1?[...state.productByIds,action.productId]:[...state.productByIds],
            quantityByIds:{
             ...state.quantityByIds,
             [action.productId]:state.quantityByIds[action.productId]?state.quantityByIds[action.productId]+1:1
            }
        }
        case types.CHECKOUT_SUCCESS:
         return {
             ...state,
             ...initialState
         }
        default:
        return state;
    }
}