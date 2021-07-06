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
            src="https://static.highsnobiety.com/thumbor/2JZ3h4ae-l9oKz9VW52-6Gmnb94=/1600x1067/static.highsnobiety.com/wp-content/uploads/2020/05/26145040/rick-morty-season-4-finale-teaser-01.jpg"
            alt=""
          />
        </div>
        <div class="tweet-content">
          <div class="user-info">
            <div class="user-name">
              <a href="#">{{ adminTweet.User.name }}</a>
            </div>
            <div class="user-account"><a href="#">@ashley · 3小時</a></div>
          </div>
          <div class="tweet-comment">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </div>
        </div>
        <div class="delete-btn">x</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
* {
  font-style: normal;
  font-weight: bold;
}
.container {
  height: 100%;
  max-height: 1020px;
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
  max-width: 902px;
  max-height: 44px;
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