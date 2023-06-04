import s from "./ProfileInfo.module.css";
import cover from "./2-Inverno-min.jpg"
const ProfileInfo = () => {
  return (
    <div className={s.profileHeader}>
      <div className={s.ownerPageCover}>
        <img
          className={s.content_background}
          src={cover}
        ></img>
      </div>
      <div className={s.profileHeader_info}>
        
      </div>






      Main content
      <div>
        <img
          className={s.avatar}
          src="https://i.pinimg.com/736x/7c/bb/a2/7cbba2effcfb2c4d74c7e55aedf54077.jpg"
        ></img>
        Description
      </div>
    </div>
  );
};

export default ProfileInfo;
