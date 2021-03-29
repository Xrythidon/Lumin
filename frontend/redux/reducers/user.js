import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from "../types/user";


const INITIAL_LIST_STATE = {
    userInfo: null,
    error: null,
    loading: null
}

export const userLoginReducer = (state = INITIAL_LIST_STATE, action) => {
    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {...state, loading: true}
        case USER_LOGIN_SUCCESS:
            return {...state, loading: false, userInfo: action.payload}
        case USER_LOGIN_FAIL:
            return { ...state, loading: false, error: action.payload}
        case USER_LOGOUT:
            return {}
        default: return state
    }
}

