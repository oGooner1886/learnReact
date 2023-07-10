import React from "react";
import styles from "./Users.module.css";
import ava from "../../assets/images/ava_default.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";
import { unfollowThunk } from "../../redux/usersReducer";
import { followThunk } from "./../../redux/usersReducer";

const API_KEY = "37d349cc-830f-45b2-b4ad-6b8cd4a02319";

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
                  disabled={props.isFollowingProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.unfollowThunk(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.isFollowingProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.followThunk(user.id);
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
