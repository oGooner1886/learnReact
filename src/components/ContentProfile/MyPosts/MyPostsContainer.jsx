import React from "react";
import {
  updateNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   const state = props.store.getState();

//   const addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   const updatePost = (text) => {
//     props.store.dispatch(updateNewPostTextActionCreator(text));
//   };

//   return (
//     <MyPosts
//       updateNewPostText={updatePost}
//       addPost={addPost}
//       posts={state.profilePage.posts}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewPostTextActionCreator(text))
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
