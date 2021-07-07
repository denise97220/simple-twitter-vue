<template>
  <div class="main-container">
    <div class="navbar"><Navbar /></div>
    <div class="main-page">
      <div class="create-tweet"><CreateComment /></div>
      <div class="tweets"><UserTweets /></div>
    </div>
    <div class="relate-users"><RelatedUsers /></div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import CreateComment from "./../components/CreateComment.vue";
import UserTweets from "./../components/UserTweets.vue";
import RelatedUsers from "./../components/RelatedUsers.vue";
export default {
  name: "UserMainPage",
  components: {
    Navbar,
    CreateComment,
    UserTweets,
    RelatedUsers,
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.main-container {
  display: grid;
  grid-template-columns: 0.9fr 600px 1fr;
  grid-gap: 40px;
  .navbar {
    grid-column: 1 / 2;
  }
  .main-page {
    grid-column: 2 / 3;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .relate-users {
    grid-column: 3 / 4;
  }
}
</style>
