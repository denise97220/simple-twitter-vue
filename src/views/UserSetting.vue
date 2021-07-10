<template>
  <div class="setting-container">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="setting-form">
      <UserSettingForm />
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import UserSettingForm from "./../components/UserSettingForm.vue";

export default {
  name: "UserSetting",
  components: {
    Navbar,
    UserSettingForm,
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.setting-container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 40px;

  .navbar {
    grid-column: 1 / 2;
  }
  .setting-form {
    grid-column: 2 / 3;
    width: 100%;
  }
}
</style>

