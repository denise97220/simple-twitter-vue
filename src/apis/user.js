import { apiHelper } from "./../utils/helper";

export default {
  getCurrentUser() {
    return apiHelper.get("/current_user");
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
