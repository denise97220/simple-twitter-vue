<template>
  <div class="follow-container">
    <div class="navbar"><Navbar /></div>
    <div class="middle-container">
      <div class="follow-tabs">
        <UserFollowTabs :currentUser="currentUser" />
      </div>
      <router-view> </router-view>
    </div>
    <div class="related"><RelatedUsers /></div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import RelatedUsers from "./../components/RelatedUsers.vue";
import UserFollowTabs from "./../components/UserFollowTabs.vue";
import { mapState } from "vuex";

export default {
  name: "UserSelfFollow",
  components: {
    Navbar,
    UserFollowTabs,
    RelatedUsers,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["currentUser"]),
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