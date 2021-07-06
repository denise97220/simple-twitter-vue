<template>
  <div class="container">
    <div class="wrapper">
      <div class="navbar">
        <AdminNavbar />
      </div>
      <div class="admin-users"></div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "./../components/AdminNavbar.vue";

export default {
  name: "AdminUsers",
  components: {
    AdminNavbar,
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.wrapper {
  display: grid;
  grid-template-columns: 378px 1062px;
  height: 100%;
}
</style>
