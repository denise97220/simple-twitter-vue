<template>
  <div class="container">
    <div class="header">
      <div class="tweets-title">推文清單</div>
    </div>
    <div
      class="tweets-list"
      v-for="adminTweet in adminTweets"
      :key="adminTweet.id"
    >
      <div class="tweet-card">
        <div class="avatar">
          <img
            src="http://2.bp.blogspot.com/-xfVC7SfVJo0/Vg4lPyoup6I/AAAAAAAA0fQ/UcdPbLbfZEI/s320/7849306_151617247181_2.jpg"
            alt=""
          />
        </div>
        <div class="tweet-content">
          <div class="user-info">
            <div class="user-name">
              <a href="#">{{ adminTweet.name }}</a>
            </div>
            <div class="user-account"><a href="#">@ashley · 3小時</a></div>
          </div>
          <div class="tweet-comment">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
* {
  font-style: normal;
  font-weight: bold;
  font-size: 100px;
}
.wrapper {
  display: grid;
  grid-template-columns: 378px 1062px;
}

.header {
  width: 100%;
  height: 55px;
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
.tweets-list {
  display: flex;
  flex-direction: column;
}

.tweet-card {
  display: flex;
  padding-left: 15px;
  font-style: normal;
  border: 1px #e6ecf0 solid;
  padding-top: 10px;
  padding-bottom: 20px;
}
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
  max-width: 902px;
  max-height: 44px;
}
</style>

<script>
export default {
  name: "AdminTweetsList",
  props: {
    adminTweets: {
      type: Array,
      required: true,
    },
  },
};
</script>