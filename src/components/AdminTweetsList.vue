<template>
  <div class="container">
    <div class="header">
      <div class="tweets-title">推文清單</div>
    </div>
    <Spinner v-if="isLoading" />
    <div v-else class="tweets-list">
      <div class="tweet-card" v-for="tweet in adminTweets" :key="tweet.id">
        <div class="avatar">
          <img :src="tweet.User.avatar" alt="" />
        </div>
        <div class="tweet-content">
          <div class="user-info">
            <div class="user-name">
              <a href="#">{{ tweet.User.name }}</a>
            </div>
            <div class="user-account">
              <a href="#">@{{ tweet.User.account }} · 3小時</a>
            </div>
          </div>
          <div class="tweet-comment">
            {{ tweet.description }}
          </div>
        </div>
        <div @click.stop.prevent="deleteTweet(tweet.id)" class="delete-btn">
          x
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminAPI from "./../apis/admin";
import { Fire } from "./../utils/helper";
import Spinner from "./../components/Spinner.vue"

export default {
  name: "AdminTweetsList",
  components: {
    Spinner
  },
  data() {
    return {
      adminTweets: [],
      isLoading: true
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        const { data } = await AdminAPI.tweets();
        this.adminTweets = data;
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log(error);
      }
    },
    async deleteTweet(tweetId) {
      try {
        const { data } = await AdminAPI.deleteTweet({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.adminTweets = this.adminTweets.filter(
          (tweet) => tweet.id !== tweetId
        );
      } catch {
        Fire.fire({
          icon: "warning",
          title: "無法刪除資料，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
* {
  font-style: normal;
  font-weight: bold;
}
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 1020px;
}
.header {
  width: 100%;
  height: 55px;
  border-left: solid 1px #E6ECF0;
}
.tweets-title {
  width: 127px;
  height: 26px;
  font-size: 18px;
  font-weight: 700;
  line-height: 26.06px;
  color: #1c1c1c;
  margin: 15px auto 14px 25px;
}
.tweet-card {
  position: relative;
  display: flex;
  padding-left: 15px;
  font-style: normal;
  border: 1px #e6ecf0 solid;
  padding-top: 10px;
  padding-bottom: 20px;
  .avatar img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid black;
    background: #c4c4c4;
  }
  .tweet-content {
    padding-left: 15px;
  }
}
.user-info {
  display: flex;
  text-decoration: none;
  margin-bottom: 10px;
}
.user-name {
  font-weight: 700;
  margin-bottom: 15px;
}
.user-name a {
  color: black;
}
.user-account a {
  color: #657786;
}
.tweet-comment {
  width: 100%;
}
.delete-btn {
  position: absolute;
  color: #657786;
  font-size: 15px;
  right: 19px;
  top: 19px;
  &:hover {
    cursor: pointer;
  }
}
</style>
