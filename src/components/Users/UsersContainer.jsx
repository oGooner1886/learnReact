import { connect } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  setUsersTotalCountActionCreator,
  switcherIsFetchingActionCreator,
  unfollowActionCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import axios from "axios";
import React from "react";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.switcherIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, { withCredentials: true }
      )
      .then((response) => {
        this.props.switcherIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.switcherIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, { withCredentials: true }
      )
      .then((response) => {
        this.props.switcherIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
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
  follow:followActionCreator,
  unfollow:unfollowActionCreator,
  setUsers:setUsersActionCreator,
  setCurrentPage:setCurrentPageActionCreator,
  setTotalUsersCount: setUsersTotalCountActionCreator,
  switcherIsFetching:switcherIsFetchingActionCreator,
})(UsersContainer);
