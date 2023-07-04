import s from "./ProfileInfo.module.css";
import cover from "./2-Inverno-min.jpg";
import avatar from "../../../assets/images/avatar.jpg";
import Preloader from "../../common/Preloader/Preloader";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  // if (!props.profile.photos.large) {
  //   return 
  //   <img className={s.avatar} src={avatar}></img>;
  // }

  return (
    <div className={s.profileHeader}>
      <div className={s.ownerPageCover}>
        <img className={s.content_background} src={cover}></img>
      </div>
      <div className={s.profileHeader_info}></div>
      Main content
      <div>
        <img className={s.avatar} src={props.profile.photos.large}></img>
        <blockquote style={{ display: "inline" }}>
          {props.profile.aboutMe}
        </blockquote>
        {/* <img className={s.avatar} src={avatar}></img> */}
      </div>
    </div>
  );
};

export default ProfileInfo;
