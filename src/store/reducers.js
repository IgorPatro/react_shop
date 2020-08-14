import {
  ADMIN_AUTH_SUCCESS,
  ADMIN_LOGOUT_SUCCESS,
  FETCH_CATEGORIES_SUCCESS,
  ADD_CATEGORY_SUCCESS,
} from 'store/actions';

const initialState = {
  adminToken: window.localStorage.adminToken,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_AUTH_SUCCESS:
      return {
        ...state,
        adminToken: action.payload.data,
      };
    case ADMIN_LOGOUT_SUCCESS:
      return {
        ...state,
        adminToken: undefined,
        categories: undefined,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.data,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        categories: [...state.categories, action.payload.data],
      };
    default:
      return state;
  }
};

export default rootReducer;
