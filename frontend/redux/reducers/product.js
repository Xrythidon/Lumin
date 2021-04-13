import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_DELETE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
} from "../types/product";

const INITIAL_LIST_STATE = {
  products: [],
  pages: null,
  page: null,
  error: null,
  loading: null,
};

export const productListReducer = (state = INITIAL_LIST_STATE, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page,
      };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const INITIAL_DETAILS_STATE = {
  product: {
    reviews: [],
  },
  error: null,
  loading: null,
};

export const productDetailsReducer = (state = INITIAL_DETAILS_STATE, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const INITIAL_DELETE_STATE = {
  success: false,
  error: null,
  loading: null,
};

export const productDeleteReducer = (state = INITIAL_DELETE_STATE, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_DELETE_RESET:
      return INITIAL_DELETE_STATE;
    default:
      return state;
  }
};

const INITIAL_CREATE_STATE = {
  product: null,
  error: null,
  loading: null,
  success: false,
};

export const productCreateReducer = (state = INITIAL_CREATE_STATE, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_CREATE_SUCCESS:
      return { ...state, loading: false, product: action.payload, success: true };
    case PRODUCT_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_CREATE_RESET:
      return INITIAL_CREATE_STATE;
    default:
      return state;
  }
};

const INITIAL_UPDATE_STATE = {
  product: {},
  error: null,
  loading: null,
  success: false,
};

export const productUpdateReducer = (state = INITIAL_UPDATE_STATE, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { ...state, loading: false, product: action.payload, success: true };
    case PRODUCT_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return INITIAL_UPDATE_STATE;
    default:
      return state;
  }
};

const INITIAL_PRODUCT_CREATE_REVIEW_STATE = {
  error: null,
  loading: null,
  success: false,
};

export const productCreateReviewReducer = (state = INITIAL_PRODUCT_CREATE_REVIEW_STATE, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { ...state, loading: false, success: true };
    case PRODUCT_CREATE_REVIEW_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PRODUCT_CREATE_REVIEW_RESET:
      return INITIAL_PRODUCT_CREATE_REVIEW_STATE;
    default:
      return state;
  }
};

const INITIAL_PRODUCT_TOP_STATE = {
  error: null,
  loading: null,
  products: [],
};

export const productTopRatedReducer = (state = INITIAL_PRODUCT_TOP_STATE, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_TOP_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_TOP_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

