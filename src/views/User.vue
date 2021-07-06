<template>
  <div class="container">
    <div class="user-navbar">
      <Navbar />
    </div>
    <div class="user-container">
      <div class="user-profile"><UserProfile /></div>
      <div class="user-tweets"><UsersTweets /></div>
    </div>
    <div class="user-related"><RelatedUsers /></div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import UserProfile from "./../components/UserProfile.vue";
import UsersTweets from "./../components/UserTweets.vue";
import RelatedUsers from "./../components/RelatedUsers.vue";

export default {
  name: "User",
  components: {
    Navbar,
    UserProfile,
    UsersTweets,
    RelatedUsers,
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
  height: 100%;
}
.user-container {
  width: 600px;
  margin-left: 5%;
  .user-profile {
    height: 430px;
  }
  .user-tweets {
    max-height: 720px;
  }
}
</style>
