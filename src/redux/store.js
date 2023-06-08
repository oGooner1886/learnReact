// import { rerenderPage } from "../render";
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import sidebarReducer from './sidebarReducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi how are you?", valueLike: 10 },
        { id: 2, message: "Fine, and you?", valueLike: 15 },
      ],
      newPostText: "text",
    },

    messagePage: {
      messages: [
        { id: 1, value: "Hi" },
        { id: 2, value: "How are you?" },
        { id: 3, value: "My name is ..." },
      ],
      users: [
        { id: 1, name: "Sergey" },
        { id: 2, name: "Veronika" },
        { id: 3, name: "Liza" },
      ],
      newMessageBody: [],
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("bla");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //паттерн observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.messagePage = messageReducer(this._state.messagePage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state);
  },


  // addPost() {
  //   const newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     valueLike: 0,
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
};




export default store;
window.store = store;



