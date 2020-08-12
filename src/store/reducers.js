import { ADMIN_AUTH_SUCCESS } from 'store/actions';

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
    default:
      return state;
  }
};

export default rootReducer;
