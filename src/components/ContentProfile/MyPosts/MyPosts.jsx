import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const postData = [
  {id: 1, message: 'Hi how are you?', valueLike: 10},
  {id: 2, message: 'Fine, and you?', valueLike: 15},
]


const MyPosts = () => {
  return (
    <div className={s.posts}>
      <h3>My Posts</h3>
      <div>
        <textarea className={s.textPost}></textarea>
        <div>
          <button>Add Post</button>
        </div>
      </div>
      <div className={s.post}>
        <Post id={postData[0].id} message={postData[0].message} valueLike={postData[0].valueLike} />
        <Post id={postData[1].id} message={postData[1].message} valueLike={postData[1].valueLike} />
      </div>
    </div>
  );
};
export default MyPosts;
