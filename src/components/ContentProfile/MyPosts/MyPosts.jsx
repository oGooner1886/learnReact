import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLength, required } from './../../../utils/validators';
import { Textarea } from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
  const postsElement = props.posts.map((post) => (
    <Post id={post.id} message={post.message} valueLike={post.valueLike} />
  ));

  const addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  const MyPostsReduxForm = reduxForm({ form: "posts" })(MyPostsForm);

  return (
    <div className={s.posts}>
      <h3>My Posts</h3>
      <MyPostsReduxForm onSubmit={addNewPost} />
      <div className={s.post}>{postsElement}</div>
    </div>
  );
};

const maxLength10 = maxLength(10)

const MyPostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field
            className={s.textPost}
            component={Textarea}
            name={"newPostText"}
            placeholder={"Add new post"}
            validate={[required, maxLength10]}
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
