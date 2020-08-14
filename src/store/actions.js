import axios from 'axios';

// Admin dispatches
export const ADMIN_AUTH_REQUEST = 'ADMIN_AUTH_REQUEST';
export const ADMIN_AUTH_SUCCESS = 'ADMIN_AUTH_SUCCESS';
export const ADMIN_AUTH_FAILURE = 'ADMIN_AUTH_FAILURE';
export const ADMIN_LOGOUT_REQUEST = 'ADMIN_LOGOUT_REQUEST';
export const ADMIN_LOGOUT_SUCCESS = 'ADMIN_LOGOUT_SUCCESS';
export const ADMIN_LOGOUT_FAILURE = 'ADMIN_LOGOUT_FAILURE';

// Admin logging
export const adminAuthenticate = (adminLogin, adminPassword) => (dispatch) => {
  dispatch({ type: ADMIN_AUTH_REQUEST });

  return axios
    .post('http://localhost:8080/api/admin/login', {
      login: adminLogin,
      password: adminPassword,
    })
    .then((payload) => {
      dispatch({ type: ADMIN_AUTH_SUCCESS, payload });
      window.localStorage.setItem('adminToken', payload.data);
    })
    .catch((err) => {
      dispatch({ type: ADMIN_AUTH_FAILURE });
    });
};

// Admin logging out
export const adminLogOut = () => (dispatch) => {
  dispatch({ type: ADMIN_LOGOUT_REQUEST });

  try {
    dispatch({ type: ADMIN_LOGOUT_SUCCESS });
    window.localStorage.removeItem('adminToken');
  } catch {
    dispatch({ type: ADMIN_LOGOUT_FAILURE });
  }
};

// Categories dispatches
export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const ADD_CATEGORY_REQUEST = 'ADD_CATEGORY_REQUEST';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const ADD_CATEGORY_FAILURE = 'ADD_CATEGORY_FAILURE';

// Get all categories
export const getCategories = () => (dispatch) => {
  dispatch({ type: FETCH_CATEGORIES_REQUEST });

  return axios
    .get('http://localhost:8080/api/categories/all')
    .then((payload) => {
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload });
    })
    .catch((err) => {
      dispatch({ type: FETCH_CATEGORIES_FAILURE });
    });
};

// Add new category
export const addCategory = (adminToken, categoryName) => (dispatch) => {
  dispatch({ type: ADD_CATEGORY_REQUEST });

  return axios
    .post(
      'http://localhost:8080/api/categories/add',
      { name: categoryName },
      { headers: { 'admin-token': adminToken } },
    )
    .then((payload) => {
      console.log(payload);
      dispatch({ type: ADD_CATEGORY_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADD_CATEGORY_FAILURE });
    });
};
