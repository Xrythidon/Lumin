import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
  ORDER_MY_LIST_REQUEST,
  ORDER_MY_LIST_SUCCESS,
  ORDER_MY_LIST_FAIL,
  ORDER_MY_LIST_RESET,
} from "../types/order";

const INITIAL_ORDER_STATE = {
  order: [],
  error: null,
  loading: null,
  success: null,
};

export const orderCreateReducer = (state = INITIAL_ORDER_STATE, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        loading: true,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const INITIAL_ORDER_DETAILS_STATE = {
  order: {},
  shippingAddress: {},
  error: null,
  loading: true,
};

export const orderDetailsReducer = (state = INITIAL_ORDER_DETAILS_STATE, action) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        order: action.payload,
      };
    case ORDER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const INITIAL_PAY_STATE = {
  success: false,
  error: null,
  loading: true,
};

export const orderPayReducer = (state = INITIAL_PAY_STATE, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_PAY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case ORDER_PAY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ORDER_PAY_RESET:
      return INITIAL_PAY_STATE;
    default:
      return state;
  }
};

const INITIAL_MY_ORDERS_STATE = {
  orders: [],
  error: null,
  loading: true,
};

export const orderMyListReducer = (state = INITIAL_MY_ORDERS_STATE, action) => {
  switch (action.type) {
    case ORDER_MY_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_MY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    case ORDER_MY_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ORDER_MY_LIST_RESET:
      return INITIAL_MY_ORDERS_STATE;
    default:
      return state;
  }
};
