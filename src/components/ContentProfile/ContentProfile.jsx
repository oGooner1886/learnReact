import s from "./ContentProfile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ContentProfile = (props) => {
  
  return (
    <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts = {props.profilePage.posts} 
                 addPost = {props.addPost}
                 newPostText = {props.profilePage.newPostText}
                 updateNewPostText= {props.updateNewPostText}/>
    </div>
  );
  
  
};


export default ContentProfile;
