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
  grid-template-columns: 1fr 3fr 0.5fr;
  height: 100%;
  .admin-navbar{
    position: fixed;
    grid-column: 1 / 2;
  }
  .admin-tweets-list {
    grid-column: 2 / 3;
  }
}
</style>

