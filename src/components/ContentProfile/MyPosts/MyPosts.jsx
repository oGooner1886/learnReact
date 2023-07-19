import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";

const MyPosts = (props) => {
  const postsElement = props.posts.map((post) => (
    <Post id={post.id} message={post.message} valueLike={post.valueLike} />
  ));

  const newPostElement = React.createRef();

  // const onAddPost = () => {
  //   // const text = newPostElement.current.value;
  //   props.addPost();
  //   // props.dispatch(addPostActionCreator());
  // };

  const updatePost = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
    // props.dispatch(updateNewPostTextActionCreator(text));
  };

  const addNewPost = (values) => {
    props.addPost(values.newPostText)
    
  }

  const MyPostsReduxForm = reduxForm({ form: "posts" })(MyPostsForm);

  return (
    <div className={s.posts}>
      <h3>My Posts</h3>
      <MyPostsReduxForm onSubmit={addNewPost}/>
      <div className={s.post}>{postsElement}</div>
    </div>
  );
};
const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field
            className={s.textPost}
            // ref={newPostElement}
            // onChange={updatePost}
            // value={props.newPostText}
            component={"textarea"}
            name={"newPostText"}
            placeholder={"Add new post"}
          />
        </div>
        <div>
          <button>Add Post</button>
        </div>
      </div>
    </form>
  );
};
export default MyPosts;
