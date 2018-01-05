import {combineReducers} from "redux";

import cart, { getProductByIds, getQuantityById } from "./cart";
import products, {getProduct as _getProduct} from "./products";

export default combineReducers({
   cart,
   products
});

export const getCartProducts=(state)=>{
   return getProductByIds(state).map(id=>({
       ..._getProduct(state.products, id),       
    }))  
};

export const getCartTotal=state=>{
    return getProductByIds(state).reduce((total,id)=>{
        return total + _getProduct(state.products, id).price * getQuantityById(state, id);
    },0)
}