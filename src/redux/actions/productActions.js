import { ActionTypes } from "../contants/action-type";

export const setProcuts=(products)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    };
};

export const seletctedProcut = (product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product
    };
};

export const removeseletctedProcut = ()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        
    };
};