const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

const initialState = {
    posts: [
      { id: 1, message: "Hi how are you?", valueLike: 10 },
      { id: 2, message: "Fine, and you?", valueLike: 15 },
    ],
    newPostText: "text",
    profile: null,
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:{
      const newPost = {
        id: 5,
        message: state.newPostText,
        valueLike: 0,
      };
      const stateCopy = {...state}
      stateCopy.posts = [...state.posts]
      stateCopy.posts.push(newPost); //! указываем state из параметров функции
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT:{
      return {...state, newPostText: action.newText}
      // stateCopy.newPostText = action.newText;
      // return stateCopy;
    }
    case SET_USER_PROFILE:{
      return {...state, profile: action.profile}
      
    }
    default:{
      return state;
    }
  }
  
};

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfileActionCreator = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer;
