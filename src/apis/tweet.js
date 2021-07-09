import { apiHelper } from "./../utils/helper";

export default {
  getTweets() {
    return apiHelper.get('/tweets')
  },
  createTweet({ description }) {
    return apiHelper.post('/tweets', { description })
  },
  getUserTweets({ userId }) {
    return apiHelper.get(`/users/${userId}/tweets`)
  }
}