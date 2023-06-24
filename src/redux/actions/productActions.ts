import { ActionTypes } from "../constants/action-types";
import { Products }  from '../types'
// interface Products {
//    type: string,
//    payload:[]
// }

export const setproducts = (products:Products) => {
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
   }
}

export const addToCart = (product:Products) => {
    console.log("productq ",product)
     return{
         type:ActionTypes.ADD_TO_CART,
         payload:product
    }
 }

 export const incrementcartitem = (product:Products) => {
    return {
        type:ActionTypes.INCREMENT_CART_ITEM,
        payload:product
    }
}


export const decrementcartitem = (product:Products) => {
    return {
        type:ActionTypes.DECREMENT_CART_ITEM,
        payload:product
    }
}