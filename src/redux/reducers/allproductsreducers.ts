import { ActionTypes } from "../constants/action-types";
import { AllProduct } from "../types";

const initialState = {
    products : [
        
      ]  
    }

    interface Action {
      type:string,
      payload:[]
    }

const productreducer = (state=initialState,{type, payload}:Action) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            console.log("productspayload ",payload)
            return {
                 products : [payload]
            }

            default: 
            return state
    }
}

export default productreducer;