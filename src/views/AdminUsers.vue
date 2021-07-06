<template>
  <div class="container">
    <div class="wrapper">
      <div class="navbar">
        <AdminNavbar />
      </div>
      <div class="admin-users">
        <AdminUsersCard />
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";
import AdminUsersCard from "./../components/AdminUsersCard.vue"

export default {
  name: "AdminUsers",
  components: {
    AdminNavbar,
    AdminUsersCard
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.wrapper {
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
}

.navbar {
  position: fixed;
}

.admin-users {
  grid-column: 2 / 3;
}
</style>
