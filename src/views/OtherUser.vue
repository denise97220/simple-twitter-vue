<template>
  <div class="relpy-list-container">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="middle-container">
      <div class="user-profile">
        <UserProfile :currentUser="currentUser" :nowPage="nowPage" />
      </div>
      <div class="user-tweets">
        <UserNavtabs :nowPage="nowPage"/>
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
import userAPI from "./../apis/user";
import { Fire } from "./../utils/helper";

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
      currentUser: {},
      id: -1,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await userAPI.getOtherUser({ userId });
        this.id = userId;
        this.currentUser = {
          ...data,
        };
      } catch (error) {
        console.error(error);
        Fire.fire({
          icon: "warning",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
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

@media screen and (max-width: 1359px) {
  .relpy-list-container {
    grid-template-columns: 1fr 2fr;

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