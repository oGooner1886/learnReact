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
    return profileAPI.getContentProfile(userId, currentUserId)
  },

};

export const profileAPI = {
  getContentProfile(userId, currentUserId){
    return example.get(`profile/` + currentUserId);
  },
  getStatus(userId, currentUserId){
    return example.get(`profile/status/` + currentUserId)
  },
  updateStatus(status){
    return example.put(`profile/status/`, {status})
  }
}


export const authAPI = {
  getlogin() {
    return example.get(`auth/me`);
  },
  postLogin(email, password, rememberMe) {
    return example.post(`auth/login`, {email, password, rememberMe});
  },
  logout() {
    return example.delete(`auth/login`);
  },
};
