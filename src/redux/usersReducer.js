const FOLLOW_USER = "FOLLOW-USER";
const UNFOLLOW_USER = "UNFOLLOW-USER";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SWITCHER_IS_FETCHING = "SWITCHER-IS-FETCHING";

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
  totalUsersCount: 10,
  currentPage: 3,
  isFetching: false,
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

    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowActionCreator = (userId) => ({
  type: UNFOLLOW_USER,
  userId,
});
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCountActionCreator = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});
export const switcherIsFetchingActionCreator = (isFetching) => ({
  type: SWITCHER_IS_FETCHING,
  isFetching,
});

export default usersReducer;
