import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

const initialState = {
    posts: [
      { id: 1, message: "Hi how are you?", valueLike: 10 },
      { id: 2, message: "Fine, and you?", valueLike: 15 },
    ],
    // newPostText: "text",
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      const newPost = {
        id: 5,
        message: action.newPostText,
        valueLike: 0,
      };
      const stateCopy = {...state}
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost); //! указываем state из параметров функции
      return stateCopy;
    }
    // case UPDATE_NEW_POST_TEXT:{
    //   return {...state, newPostText: action.newText}

    // }
    case SET_USER_PROFILE:{
      return {...state, profile: action.profile}
      
    }
    case SET_STATUS:{
      return {...state, status: action.status}
      
    }
    default:{
      return state;
    }
  }
  
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfileActionCreator = (profile) => ({type: SET_USER_PROFILE, profile})
// export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setStatusActionCreator = (status) => ({type: SET_STATUS, status})

//! -THUNK-

export const getUserProfileThunk = (userId, currentUserId) => {
  return (dispatch) => {
    usersAPI.getContentProfile(userId, currentUserId)
      .then((response) => {
        dispatch(setUserProfileActionCreator(response.data));
      });
  }
}
export const getStatus = (userId, currentUserId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId, currentUserId)
      .then((response) => {
        dispatch(setStatusActionCreator(response.data));
      });
  }
}
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status)
      .then((response) => { 
        if(response.data.resultCode === 0){
        dispatch(setStatusActionCreator(status))
        }
      });
  }
}







export default profileReducer;
