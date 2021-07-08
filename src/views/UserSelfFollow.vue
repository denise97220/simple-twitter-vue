<template>
  <div class="follow-container">
    <div class="navbar"><Navbar /></div>
    <div class="middle-container">
      <div class="follow-tabs"></div>
      <div class="user-followe"><UserFollowList /></div>
    </div>
    <div class="related"><RelatedUsers /></div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import RelatedUsers from "./../components/RelatedUsers.vue";
import UserFollowList from "./../components/UserFollowerList.vue";

export default {
  name: "UserSelfFollow",
  components: {
    Navbar,
    RelatedUsers,
    UserFollowList,
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.follow-container {
  display: grid;
  grid-template-columns: 0.9fr 600px 1fr;
}
</style>