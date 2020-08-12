import axios from 'axios';

export const ADMIN_AUTH_REQUEST = 'AUTH_REQUEST';
export const ADMIN_AUTH_SUCCESS = 'AUTH_SUCCESS';
export const ADMIN_AUTH_FAILURE = 'AUTH_FAILURE';

// Admin logging
export const adminAuthenticate = (adminLogin, adminPassword) => (dispatch) => {
  dispatch({ type: ADMIN_AUTH_REQUEST });

  return axios
    .post('http://localhost:8080/api/admin/login', {
      login: adminLogin,
      password: adminPassword,
    })
    .then((payload) => {
      console.log(payload);
      dispatch({ type: ADMIN_AUTH_SUCCESS, payload });
      window.localStorage.setItem('adminToken', payload.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_AUTH_FAILURE });
    });
};
