<template>
  <div class="rwd-container">
    <div class="main-container">
      <div class="navbar"><Navbar /></div>
      <div class="main-page">
        <div class="create-tweet">
          <CreateComment :currentUser="currentUser" />
        </div>
        <div class="tweets"><UserTweets :tweets="tweets" /></div>
      </div>
      <div class="relate-users"><RelatedUsers /></div>
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import CreateComment from "./../components/CreateComment.vue";
import UserTweets from "./../components/UserTweets.vue";
import RelatedUsers from "./../components/RelatedUsers.vue";
import tweetAPI from "./../apis/tweet";
import { Fire } from "./../utils/helper";
import { mapState } from "vuex";

export default {
  name: "UserMainPage",
  components: {
    Navbar,
    CreateComment,
    UserTweets,
    RelatedUsers,
  },
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        const { data } = await tweetAPI.getTweets();
        this.tweets = data;
      } catch (error) {
        Fire.fire({
          icon: "warning",
          title: "無法取得資料，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
.rwd-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

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
