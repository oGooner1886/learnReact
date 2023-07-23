import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        // isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserDataActionCreator = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});

//! -THUNK-
export const getAuthUserThunk = () => {
  return (dispatch) => {
    authAPI.getlogin().then((response) => {
      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        dispatch(setAuthUserDataActionCreator(id, email, login, true));
      }
    });
  };
};
export const postAuthUserThunk = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.postLogin(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserThunk());
      }
    });
  };
};
export const deleteAuthUserThunk = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataActionCreator(null, null, null, false));
      }
    });
  };
};

export default authReducer;
