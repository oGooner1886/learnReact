import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
              New Post
            </div>
            <div className={s.posts}>
              <Post message = 'Hi how are you?' value = '10' />
              <Post message = 'Fine, and you?' value = '15'/>
            </div>
          </div>

    )
}
export default MyPosts