import s from "./Users.module.css"
const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.avaImg} className={s.ava}></img>
            </div>
            <div>
                {user.followed 
                ? <button onClick={() => {props.unfollow(user.id)}}>Unfollow</button>
                : <button onClick={() => {props.follow(user.id)}}>Follow</button>}
              
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
