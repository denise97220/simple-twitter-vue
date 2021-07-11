<template>
  <div class="relpy-list-container">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="middle-container scrollbar">
      <div class="user-profile">
        <UserProfile :nowPage="nowPage" />
      </div>
      <div class="user-tweets">
        <UserNavtabs :nowPage="nowPage" />
      </div>
      <router-view></router-view>
    </div>
    <div class="related-users">
      <RelatedUsers />
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import RelatedUsers from "./../components/RelatedUsers.vue";
import UserNavtabs from "../components/UserNavtabs.vue";
import UserProfile from "./../components/UserProfile.vue";
import { mapState } from "vuex";

export default {
  name: "OtherUser",
  components: {
    Navbar,
    UserProfile,
    UserNavtabs,
    RelatedUsers,
  },
  data() {
    return {
      nowPage: "other",
      id: -1,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.relpy-list-container {
  display: grid;
  grid-template-columns: 0.9fr 600px 1fr;
  grid-gap: 40px;

  .navbar {
    grid-column: 1 / 2;
  }
  .middle-container {
    grid-column: 2 / 3;
    width: 100%;
  }
  .related-users {
    grid-column: 3 / 4;
  }
}

.middle-container {
  height: calc(100vh);
  overflow-y: scroll;
}

.scrollbar {
  padding-left: 1px;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(225, 222, 222, 0.1);
  }
}

@media screen and (max-width: 1359px) {
  .relpy-list-container {
    grid-template-columns: 1fr 2fr 0.2fr;

    .navbar {
      grid-column: 1 / 2;
    }
    .middle-container {
      grid-column: 2 / 3;
    }
    .related-users {
      display: none;
    }
  }
}
</style>