import { apiHelper } from "./../utils/helper";

export default {
  login({ email, password }) {
    return apiHelper.post("admin/signin", {
      email,
      password,
    });
  },
  tweets() {
    return apiHelper.get('/admin/tweets')
  },
  getUsers() {
    return apiHelper.get("/admin/users");
  },
  deleteTweet({ tweetId }) {
    return apiHelper.delete(`admin/tweets/${tweetId}`)
  }
}