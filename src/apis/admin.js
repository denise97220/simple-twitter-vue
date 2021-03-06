import { apiHelper } from "./../utils/helper";

export default {
  login({ email, password }) {
    return apiHelper.post("/admin/signin", {
      email,
      password,
    });
  },
  signUp({ account, name, email, password, checkPassword }) {
    return apiHelper.post("/users", { account, name, email, password, checkPassword })
  },
  tweets() {
    return apiHelper.get('/admin/tweets')
  },
  getUsers() {
    return apiHelper.get("/admin/users");
  },
  deleteTweet({ tweetId }) {
    return apiHelper.delete(`/admin/tweets/${tweetId}`)
  }
}