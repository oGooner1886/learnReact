// import { rerenderPage } from "../render";
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"


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
    if (action.type === ADD_POST) {
      const newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        valueLike: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY){
      this._state.messagePage.newMessageBody = action.body
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE){
      const body = this._state.messagePage.newMessageBody
      this._state.messagePage.newMessageBody = ""
      this._state.messagePage.messages.push({ id: 4, value: body })
      this._callSubscriber(this._state);
    }
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
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.store = store;



