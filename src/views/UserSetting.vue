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

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.setting-container {
  display: flex;
}

.navbar {
  width: 378px;
}

.setting-form {
  flex: 1;
}
</style>

<script>
import Navbar from './../components/Navbar.vue'
import UserSettingForm from './../components/UserSettingForm.vue'

export default {
  name: 'UserSetting',
  components: {
    Navbar,
    UserSettingForm
  }
}
</script>