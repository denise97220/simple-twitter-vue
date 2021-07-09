import { apiHelper } from "./../utils/helper";

export default {
  getTweets() {
    return apiHelper.get("/tweets");
  },
  createTweet({ description }) {
    return apiHelper.post("/tweets", { description });
  },
  getUserTweets({ userId }) {
    return apiHelper.get(`/users/${userId}/tweets`);
  },
  getSingleTweet({ tweet_id }) {
    return apiHelper.get(`/tweets/${tweet_id}`);
  },
  replySingleTweet({ tweet_id, comment }) {
    return apiHelper.post(`/tweets/${tweet_id}/replies`, { comment });
  },
  likeSingleTweet({ TweetId }) {
    return apiHelper.post(`/tweets/${TweetId}/like`, null);
  },
  unlikeSingleTweet({ TweetId }) {
    return apiHelper.post(`/tweets/${TweetId}/unlike`, null);
  },
};