<template>
  <div class="container">
    <div class="wrapper">
      <!-- Navbar -->
      <div class="admin-navbar">
        <AdminNavbar />
      </div>
      <!-- AdminTweets -->
      <div class="admin-tweets-list">
        <AdminTweetsList :admin-tweets="adminTweets" />
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";
import AdminTweetsList from "./../components/AdminTweetsList.vue";
import { Fire } from "./../utils/helper";
import AdminAPI from "./../apis/admin";

export default {
  name: "AdminMain",
  components: {
    AdminNavbar,
    AdminTweetsList,
  },
  data() {
    return {
      adminTweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        // TODO : API接收不到資料...
        const { data } = await AdminAPI.tweets();
        if (data.status !== "success") {
          throw new Error();
        }
        console.log(data);
      } catch (error) {
        console.error("error", error);
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
* {
  font-style: normal;
  font-weight: bold;
}

.wrapper {
  display: grid;
  grid-template-columns: 378px 1062px;
  height: 100%;
}
</style>

