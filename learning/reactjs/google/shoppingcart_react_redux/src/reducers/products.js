
import * as types from "../actions/actionTypes";


export const getProduct=(state,productId)=>{
    return state.find(product=>productId===product.id);
}
   
export default function products(state=[], action){
    switch(action.type){
        case types.RECEIVE_PRODUCTS:
        return action.products;
        case types.ADD_TO_CART:
        const index=state.findIndex(product=>product.id===action.productId);
        return [
            ...state.slice(0, index),
            {
                ...state[index],
                inventory:state[index].inventory-1
            },
            ...state.slice(index+1)
        ]
        case types.CHECKOUT_SUCCESS:
        return action.products;

        default:
        return state;
    } 
}
