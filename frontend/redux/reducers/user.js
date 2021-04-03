import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
  USER_DETAILS_RESET,
} from "../types/user";

const INITIAL_LOGIN_STATE = {
  userInfo: null,
  error: null,
  loading: null,
};

export const userLoginReducer = (state = INITIAL_LOGIN_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

const INITIAL_REGISTER_STATE = {
  userInfo: null,
  error: null,
  loading: null,
};

export const userRegisterReducer = (state = INITIAL_REGISTER_STATE, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true };
    case USER_REGISTER_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const INITIAL_DETAILS_STATE = {
  user: {},
  error: null,
  loading: null,
};

export const userDetailsReducer = (state = INITIAL_DETAILS_STATE, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return INITIAL_DETAILS_STATE
    default:
      return state;
  }
};

const INITIAL_UPDATE_PROFILE_STATE = {
  userInfo: null,
  error: null,
  loading: null,
  success: null,
};

export const userUpdateProfileReducer = (state = INITIAL_UPDATE_PROFILE_STATE, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { ...state, loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { ...state, loading: false, success: true, user: action.payload };
    case USER_UPDATE_PROFILE_FAIL:
      return { ...state, loading: false, success: false,  error: action.payload };
    case USER_UPDATE_PROFILE_RESET:
        return {}
    default:
      return state;
  }
};
