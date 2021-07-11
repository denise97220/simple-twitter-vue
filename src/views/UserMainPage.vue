<template>
  <div class="rwd-container">
    <div class="main-container">
      <div class="navbar">
        <Navbar @updateTweets="updateTweets" />
      </div>
      <div class="main-page scrollbar">
        <div class="create-tweet">
          <CreateComment
            :currentUser="currentUser"
            @updateTweets="updateTweets"
          />
        </div>
        <div class="tweets">
          <UserTweets :Switch="Switch" />
        </div>
      </div>
      <div class="related-users">
        <RelatedUsers />
      </div>
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
      Switch: false,
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
    updateTweets() {
      this.Switch = !this.Switch;
    },
  },
  computed: {
    ...mapState(["currentUser"]),
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
  .related-users {
    grid-column: 3 / 4;
  }
}

.main-page {
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
  .main-container {
    grid-template-columns: 1fr 2fr 0.2fr;
    grid-gap: 10px;
    .navbar {
      grid-column: 1 / 2;
    }
    .main-page {
      grid-column: 2 / 3;
    }
    .related-users {
      display: none;
    }
  }
}
</style>
