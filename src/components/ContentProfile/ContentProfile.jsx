import s from "./ContentProfile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from './../../redux/reduxStore';

const ContentProfile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostsContainer 
        // store = {props.store}
        // posts={props.profilePage.posts}
        // dispatch={props.dispatch}
        // newPostText={props.profilePage.newPostText}
        // updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default ContentProfile;
