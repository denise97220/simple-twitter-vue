<template>
  <div class="rwd-container">
    <div class="relpy-list-container">
      <div class="navbar">
        <Navbar />
      </div>
      <div class="middle-container scrollbar">
        <div class="user-profile">
          <UserProfile
            :updateId="updateId"
            :nowPage="nowPage"
            @tap-follow-button="tapFollowButton"
            :relatedFollowStatus="relatedFollowStatus"
          />
        </div>
        <div class="user-tweets">
          <UserNavtabs :nowPage="nowPage" />
        </div>
        <router-view :updateId="updateId"></router-view>
      </div>
      <div class="related-users">
        <RelatedUsers
          @updateUser="updateUser"
          :isFollowStatus="isFollowStatus"
          @related-to-userFollow="relatedToUserFollow"
        />
      </div>
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
      updateId: -1,
      isFollowStatus: {},
      relatedFollowStatus: {},
    };
  },
  watch: {
    // change profile status
    relatedFollowStatus(newValue) {
      this.relatedFollowStatus = newValue;
    },
  },
  methods: {
    updateUser(id) {
      this.updateId = id;
    },
    tapFollowButton(payload) {
      this.isFollowStatus = payload;
    },
    // from related to user profile status
    relatedToUserFollow(payload) {
      this.relatedFollowStatus = payload;
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  beforeRouteUpdate(to, from, next) {
    const id = to.params.id;
    this.updateId = id;
    next();
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