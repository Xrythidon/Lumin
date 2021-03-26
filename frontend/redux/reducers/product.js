import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from "../types/product";


const INITIAL_LIST_STATE = {
    products: [],
    error: null,
    loading: null
}

export const productListReducer = (state = INITIAL_LIST_STATE, action) => {
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

const INITIAL_DETAILS_STATE = {
    product: { 
        reviews: []
    },
    error: null,
    loading: null
}

export const productDetailsReducer = (state = INITIAL_DETAILS_STATE, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {...state, loading: true}
        case PRODUCT_DETAILS_SUCCESS:
            return {...state, loading: false, product: action.payload}
        case PRODUCT_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload}
        default: return state
    }
}