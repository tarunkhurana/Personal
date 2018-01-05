import shop from "../api/shop";
import * as types from "./actionTypes";

const receiveProducts=products=>({
   type:types.RECEIVE_PRODUCTS,
   products
});

export const getAllProducts=()=>dispatch=>{
    shop.getProducts(products=>{
        dispatch(receiveProducts(products));
    });
}

export const addToCart=(productId)=>{
    return {
        type:types.ADD_TO_CART,
        productId
    }
}

export const checkout=(products)=>dispatch=>{
    dispatch({
        type:types.CHECKOUT_REQUEST
    });

    shop.buyProducts(products, ()=>{
        shop.getProducts(products=>{
            dispatch({
                type:types.CHECKOUT_SUCCESS,
                products:products
            });
        });
    });
}
