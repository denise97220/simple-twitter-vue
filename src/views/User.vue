<template>
  <div class="user-container">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="middle-container">
      <div class="user-profile"><UserProfile /></div>
      <div class="user-tweets"><UserNavtabs :nowPage="nowPage" /></div>
      <router-view></router-view>
    </div>
    <div class="user-related"><RelatedUsers /></div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import UserProfile from "./../components/UserProfile.vue";
import UserNavtabs from "../components/UserNavtabs.vue";
import RelatedUsers from "./../components/RelatedUsers.vue";

export default {
  name: "User",
  components: {
    Navbar,
    UserProfile,
    UserNavtabs,
    RelatedUsers,
  },
  data() {
    return {
      nowPage: "self",
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  font-style: normal;
  font-weight: bold;
}
.user-container {
  display: grid;
  grid-template-columns: 0.9fr 600px 1fr;
  grid-gap: 40px;

  .navbar {
    grid-column: 1 / 2;
  }
  .middle-container {
    grid-column: 2 / 3;
  }
}
</style>
