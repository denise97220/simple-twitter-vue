import { apiHelper } from "./../utils/helper";

export default {
  login({ email, password }) {
    return apiHelper.post("admin/signin", {
      email,
      password,
    });
  }
}