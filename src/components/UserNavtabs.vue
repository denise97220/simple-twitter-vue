<template>
  <div class="container">

    <router-link to="/user/other/1/tweet">
      <div class="list tweet">
        <h2 class="list-title tweet-title">推文</h2>
      </div>
    </router-link>

    <router-link 
      :to="{ name: 'user-other-reply', params: { id: 1 } }"
    >
      <div class="list reply">
        <h2 class="list-title reply-title">推文與回覆</h2>
      </div>
    </router-link>

    <router-link to="/user/other/1/like">
      <div class="list like">
        <h2 class="list-title like-title">喜歡的內容</h2>
      </div>
    </router-link>

  </div>
</template>

<script>
export default {
  name: "UserTweets",
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.container {
  display: flex;
  height: 54px;
  line-height: 54px;
  font-weight: bold;
  font-size: 15px;
  color: #657786;
  border: solid 1px #E6ECF0;
  border-top: none;
}

.router-link {
  color: #657786;
}

.router-link-active {
  color: $mainColor;
  border-bottom: solid 2px $mainColor;
}

.list {
  width: 130px;
  display: flex;
  justify-content: center;
}
</style>