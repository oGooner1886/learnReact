import { connect } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  setUsersTotalCountActionCreator,
  switcherIsFetchingActionCreator,
  switcherIsFollowingProgressActionCreator,
  unfollowActionCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import axios from "axios";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
// import { getUsers } from "../../api/api";
import { usersAPI } from './../../api/api';

class UsersContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.switcherIsFetching(true);
    // axios
    //   .get(
    //     `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
    //     { withCredentials: true }
    //   )
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.switcherIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.switcherIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then((data) => {
        this.props.switcherIsFetching(false);
        this.props.setUsers(data.items);
        
      });
  };

  render() {
    return (
      <>
        <span>
          {this.props.isFetching ? <Preloader /> : null}
          <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            switcherIsFollowingProgress={this.props.switcherIsFollowingProgress}
            isFollowingProgress={this.props.isFollowingProgress}
            
          />
        </span>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  //функция которая принимает весь стейт, и возвращает объект со списком пользователей
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingProgress: state.usersPage.isFollowingProgress
  };
};

/*const mapDispatchToProps = (dispatch) => {
  //todo функция которая передает дочерней компоненте коллбеки, которые она будет вызывать
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setUsersTotalCountActionCreator(totalCount));
    },
    switcherIsFetching: (isFetching) => {
        
      dispatch(switcherIsFetchingActionCreator(isFetching));
    },
  };
};*/

export default connect(mapStateToProps, {
  follow: followActionCreator,
  unfollow: unfollowActionCreator,
  setUsers: setUsersActionCreator,
  setCurrentPage: setCurrentPageActionCreator,
  setTotalUsersCount: setUsersTotalCountActionCreator,
  switcherIsFetching: switcherIsFetchingActionCreator,
  switcherIsFollowingProgress: switcherIsFollowingProgressActionCreator

})(UsersContainer);
