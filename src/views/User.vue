<template>
  <div class="rwd-container">
    <div class="user-container">
      <div class="navbar">
        <Navbar @updateTweets="updateTweets" />
      </div>
      <div class="middle-container scrollbar">
        <div class="user-profile">
          <UserProfile :nowPage="nowPage" :currentUser="currentUser" />
        </div>
        <div class="user-tweets"><UserNavtabs :nowPage="nowPage" /></div>
        <router-view :NavbarSwitch="NavbarSwitch"></router-view>
      </div>
      <div class="related-users"><RelatedUsers /></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import UserProfile from "./../components/UserProfile.vue";
import UserNavtabs from "../components/UserNavtabs.vue";
import RelatedUsers from "./../components/RelatedUsers.vue";
import { mapState } from "vuex";

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
      NavbarSwitch: false,
    };
  },
  methods: {
    updateTweets() {
      this.NavbarSwitch = !this.NavbarSwitch;
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

* {
  font-style: normal;
  font-weight: bold;
}
.user-container {
  display: grid;
  grid-template-columns: 0.9fr 600px 1fr;
  grid-gap: 30px;

  .navbar {
    grid-column: 1 / 2;
  }
  .middle-container {
    grid-column: 2 / 3;
  }
  .related-users {
    grid-column: 3 / 4;
  }
}

.middle-container{
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
  .user-container {
    grid-template-columns: 1fr 2fr 0.2fr;
    grid-gap: 10px;
    .navbar {
      grid-column: 1 / 2;
    }
    .middle-container{
      grid-column: 2 / 3;
    }
    .related-users {
      display: none;
    }
  }
}
</style>
