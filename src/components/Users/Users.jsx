import React from "react";
import styles from "./Users.module.css";
import ava from "../../assets/images/ava_default.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

const API_KEY = "37d349cc-830f-45b2-b4ad-6b8cd4a02319"

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page ? styles.selectedPage : ""}
              onClick={(event) => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>

      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : ava}
                  className={styles.ava}
                ></img>
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,
                        { withCredentials: true }
                      )
                      .then((response) => {
                        if(response.data.resultCode == 0) {
                        props.unfollow(user.id);
                      }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0//follow/${user.id}`,
                        {}, {withCredentials: true}
                      )
                      .then((response) => {
                        if(response.data.resultCode == 0) {
                          props.follow(user.id);
                        }
                      });
                    
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

export default Users;
