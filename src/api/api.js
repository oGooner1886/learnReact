import axios from "axios";

const example = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 100) {
    return example
      .get(`users?page=${currentPage}&count=${pageSize}`, {})
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return example.post(`follow/${userId}`, {});
  },
  unfollow(userId) {
    return example.delete(`follow/${userId}`);
  },
  getContentProfile(userId, currentUserId) {
    return example.get(`profile/` + currentUserId);
  },
};

export const authAPI = {
  getlogin() {
    return example.get(`auth/me`);
  },
};
