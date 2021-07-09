import { apiHelper } from "./../utils/helper";

export default {
  getCurrentUser() {
    return apiHelper.get("/current_user");
  },
  getTopUsers() {
    return apiHelper.get("/users/top");
  },
  follow({ id }) {
    return apiHelper.post("/followships", { id });
  },
  unFollow({ userId }) {
    return apiHelper.delete(`/followships/${userId}`);
  },
  login({ email, password }) {
    return apiHelper.post("/signin", {
      email,
      password,
    });
  },
  saveAccount({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData);
  },
};
