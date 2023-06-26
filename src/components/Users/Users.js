import axios from "axios";
import s from "./Users.module.css";
import ava from "../../assets/images/ava_default.png";
import React from "react";

// const Users = (props) => {
//   if (props.users.length === 0) {
//     axios
//       .get("https://social-network.samuraijs.com/api/1.0/users")
//       .then((response) => {
//         props.setUsers(response.data.items);
//       });
//   }

//   return (
//     <div>
//       {props.users.map((user) => (
//         <div key={user.id}>
//           <span>
//             <div>
//               <img src={ user.photos.small != null ? user.photos.small : ava} className={s.ava}></img>
//             </div>
//             <div>
//               {user.followed ? (
//                 <button
//                   onClick={() => {
//                     props.unfollow(user.id);
//                   }}
//                 >
//                   Unfollow
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => {
//                     props.follow(user.id);
//                   }}
//                 >
//                   Follow
//                 </button>
//               )}
//             </div>
//           </span>
//           <span>
//             <span>
//               <div>{user.name}</div>
//               <div>{user.status}</div>
//             </span>
//             <span>
//               <div>{"user.location.country"}</div>
//               <div>{"user.location.city"}</div>
//             </span>
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
          .get("https://social-network.samuraijs.com/api/1.0/users")
          .then((response) => {
            this.props.setUsers(response.data.items);
          });
  }
    
  
    render() {
      return (
        <div>
          {this.props.users.map((user) => (
            <div key={user.id}>
              <span>
                <div>
                  <img
                    src={user.photos.small != null ? user.photos.small : ava}
                    className={s.ava}
                  ></img>
                </div>
                <div>
                  {user.followed ? (
                    <button
                      onClick={() => {
                        this.props.unfollow(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        this.props.follow(user.id);
                      }}
                    >
                      Follow
                    </button>
                  )}
                </div>
              </span>
              <span>
                <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
                </span>
                <span>
                  <div>{"user.location.country"}</div>
                  <div>{"user.location.city"}</div>
                </span>
              </span>
            </div>
          ))}
        </div>
      );
    };
  
}
export default Users;
