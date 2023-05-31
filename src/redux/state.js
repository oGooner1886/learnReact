import { rerenderPage } from "../render";
const state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi how are you?", valueLike: 10 },
      { id: 2, message: "Fine, and you?", valueLike: 15 },
    ],
    newPostText: 'text',
  },

  messagePage: {
    messages: [
      {id: 1, value: "Hi" },
      {id: 2, value: "How are you?" },
      {id: 3, value: "My name is ..." },
    ],
    users: [
        { id: 1, name: "Sergey" },
        { id: 2, name: "Veronika" },
        { id: 3, name: "Liza" },
      ],
  },
};

export const addPost = () => {
  
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    valueLike: 0,
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderPage(state)
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText
  rerenderPage(state)
}


export default state;
