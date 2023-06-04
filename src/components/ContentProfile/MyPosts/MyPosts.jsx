import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postsElement = props.posts.map((post) => (
    <Post id={post.id} message={post.message} valueLike={post.valueLike} />
  ));

  const newPostElement = React.createRef();

  const addPost = () => {
    const text = newPostElement.current.value;
    props.addPost();
  };

  const updatePost = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.posts}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            className={s.textPost}
            ref={newPostElement}
            onChange={updatePost}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.post}>{postsElement}</div>
    </div>
  );
};
export default MyPosts;
