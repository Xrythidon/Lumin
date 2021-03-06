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
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_RESET,
  USER_DELETE_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_RESET,
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
      return INITIAL_DETAILS_STATE;
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
      return { ...state, loading: false, success: false, error: action.payload };
    case USER_UPDATE_PROFILE_RESET:
      return {};
    default:
      return state;
  }
};

const INITIAL_USER_LIST_STATE = {
  users: [],
  error: null,
  loading: null,
};

export const userListReducer = (state = INITIAL_USER_LIST_STATE, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, loading: true };
    case USER_LIST_SUCCESS:
      return { ...state, loading: false, users: action.payload };
    case USER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LIST_RESET:
      return INITIAL_USER_LIST_STATE;
    default:
      return state;
  }
};

const INITIAL_USER_DELETE_STATE = {
  success: false,
  error: null,
  loading: null,
};

export const userDeleteReducer = (state = INITIAL_USER_DELETE_STATE, action) => {
  switch (action.type) {
    case USER_DELETE_REQUEST:
      return { ...state, loading: true };
    case USER_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case USER_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const INITIAL_USER_UPDATE_STATE = {
  success: false,
  error: null,
  loading: null,
};

export const userUpdateReducer = (state = INITIAL_USER_UPDATE_STATE, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return { ...state, loading: true };
    case USER_UPDATE_SUCCESS:
      return { ...state, loading: false, success: true };
    case USER_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_UPDATE_RESET:
      return INITIAL_USER_UPDATE_STATE;
    default:
      return state;
  }
};
