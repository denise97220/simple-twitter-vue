<template>
  <div class="container">
    <div class="wrapper">
      <!-- Navbar -->
      <div class="admin-navbar">
        <AdminNavbar />
      </div>
      <!-- AdminTweets -->
      <div class="admin-tweets-list">
        <AdminTweetsList />
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";
import AdminTweetsList from "./../components/AdminTweetsList.vue";

export default {
  name: "AdminMain",
  components: {
    AdminNavbar,
    AdminTweetsList,
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

