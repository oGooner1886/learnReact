import { authAPI } from "../api/api";

const SET_USER_DATA = "SET-USER-DATA";

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserDataActionCreator = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});

//! -THUNK-
export const getAuthUserThunk = () => {
  return (dispatch) => {
    authAPI.getlogin().then((response) => {
      if (response.data.resultCode === 0) {
        const { id, email, login } = response.data.data;
        dispatch(setAuthUserDataActionCreator(id, email, login));
      }
    });
  };
};

export default authReducer;
