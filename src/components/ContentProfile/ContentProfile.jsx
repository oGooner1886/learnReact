import s from "./ContentProfile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';


const ContentProfile = (props) => {
 
  return (
    <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts = {props.state.posts}/>
    </div>
  );
};
export default ContentProfile;
