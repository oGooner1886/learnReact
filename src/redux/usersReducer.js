import { usersAPI } from "../api/api";

const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SWITCHER_IS_FETCHING = "SWITCHER-IS-FETCHING";
const SWITCHER_IS_FOLLOWING_PROGRESS = "SWITCHER-IS-FOLLOWING-PROGRESS";

const initialState = {
  users: [
    // {
    //   id: 1,
    //   avaImg: "https://w7.pngwing.com/pngs/364/361/png-transparent-account-avatar-profile-user-avatars-icon.png",
    //   followed: false,
    //   name: "Sergey",
    //   status: "Hello, add me",
    //   location: { country: "Russia", city: "Astrakhan" },
    // },
    // {
    //   id: 2,
    //   followed: true,
    //   name: "Veronika",
    //   status: "Hello, please add me",
    //   location: { country: "Russia", city: "Astrakhan" },
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   name: "Liza",
    //   status: "Hello, please add me",
    //   location: { country: "Russia", city: "Astrakhan" },
    // },
  ],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isFollowingProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: [...state.users].map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true }; //возвращаем копию и меняем параметр фоловед
          }
          return user;
        }),
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        users: [...state.users].map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false }; //возвращаем копию и меняем параметр фоловед
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users, // добавляем к существующим пользователям, новых
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage, // диспатчим при клике экшн
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case SWITCHER_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SWITCHER_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        isFollowingProgress: action.isFetching
          ? [...state.isFollowingProgress, action.userId]
          : state.isFollowingProgress.filter((id) => id != action.userId),
      };

    default:
      return state;
  }
};
//! ACTION CREATOR
export const follow = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollow = (userId) => ({
  type: UNFOLLOW_USER,
  userId,
});
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const switcherIsFetching = (isFetching) => ({
  type: SWITCHER_IS_FETCHING,
  isFetching,
});
export const switcherIsFollowingProgress = (isFetching, userId) => ({
  type: SWITCHER_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

//! -THUNK-
export const getUsersThunk = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(switcherIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then((data) => {
      dispatch(switcherIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
    });
  };
};
export const followThunk = (userId) => {
  return (dispatch) => {
    dispatch(switcherIsFollowingProgress(true, userId));
    usersAPI
      .follow(userId)
      .then((response) => {
        if (response.data.resultCode == 0) {
          dispatch(follow(userId))
        }
        dispatch(switcherIsFollowingProgress(false, userId));
      });
  };
};
export const unfollowThunk = (userId) => {
  return (dispatch) => {
    dispatch(switcherIsFollowingProgress(true, userId));
    usersAPI
      .unfollow(userId)
      .then((response) => {
        if (response.data.resultCode == 0) {
          dispatch(unfollow(userId))
        }
        dispatch(switcherIsFollowingProgress(false, userId));
      });
  };
};

export default usersReducer;
