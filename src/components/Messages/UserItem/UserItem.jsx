import { NavLink } from 'react-router-dom'
import s from './../Messages.module.css'

const UserItem = (props) => {
  return (
    <div className={s.user}>
      {/* потом вставить клик по аве -> переход на профиль */}
      <a><img src="https://w7.pngwing.com/pngs/364/361/png-transparent-account-avatar-profile-user-avatars-icon.png" alt="" className={s.ava}/></a>
      <NavLink to={'/message/' + props.id}>{props.name}</NavLink>

    </div>
  );
};

export default UserItem