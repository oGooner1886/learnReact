import s from './ContentProfile.module.css'
import MyPosts from './MyPosts/MyPosts'
const ContentProfile = () => {
    return (
      <div className={s.content}>
        <div>
          <img
            className={s.zxc}
            src="https://posekretyvsemysvety.ru/wp-content/uploads/2021/05/cropped-7492.png"
          ></img>
        </div>
        <div>
          Main content
          <div>
            <img
              className={s.avatar}
              src="https://i.pinimg.com/736x/7c/bb/a2/7cbba2effcfb2c4d74c7e55aedf54077.jpg"
            ></img>
            Description
          </div>
          <MyPosts />
        </div>
      </div>
    );
}
export default ContentProfile