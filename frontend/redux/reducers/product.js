import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../types/product";


const INITIAL_STATE = {
    products: [],
    error: null,
    loading: null

}

export const productListReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return {...state, loading: true, products: [],}
        case PRODUCT_LIST_SUCCESS:
            return {...state, loading: false, products: action.payload}
        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: action.payload}
        default: return state
    }
}