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
  grid-template-columns: 0.1fr 1fr 4fr 2fr;
  grid-gap: 30px;

  .navbar {
    grid-column: 2 / 3;
  }
  .setting-form {
    grid-column: 3 / 4;
  }
}

@media screen and (max-width: 1000px) {
  .setting-container {
    grid-template-columns: 0.1fr 1fr 4fr 0.1fr;
  }
}
</style>

