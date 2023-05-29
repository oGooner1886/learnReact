import s from "./ContentProfile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';


const ContentProfile = () => {
  return (
    <div className={s.content}>
        <ProfileInfo/>
        <MyPosts />
    </div>
  );
};
export default ContentProfile;
