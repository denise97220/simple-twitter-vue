<template>
  <div class="form-container">
    <div class="title">
      <h1>帳戶設定</h1>
    </div>
    
    <form>
      <div class="form-label account-form-label">
        <label for="account" class="label">帳號</label>
        <input
        id="account"
        name="account"
        type="text"
        class="input account-input"
        autocomplete="username"
        required
        autofocus
        v-model="currentUser.account"
        >
      </div>

      <div class="form-label name-form-label">
        <label for="name" class="label">名稱</label>
        <input
        id="name"
        name="name"
        type="text"
        class="input name-input"
        autocomplete="current-name"
        required
        v-model="currentUser.name"
        >
      </div>

      <div class="form-label email-form-label">
        <label for="email" class="label">Email</label>
        <input
        id="email"
        name="email"
        type="email"
        class="input email-input"
        autocomplete="current-email"
        required
        v-model="currentUser.email"
        >
      </div>

      <div class="form-label password-form-label">
        <label for="password" class="label">密碼</label>
        <input
        id="password"
        name="password"
        type="password"
        class="input password-input"
        autocomplete="current-password"
        required
        >
      </div>

      <div class="form-label checkPassword-form-label">
        <label for="checkPassword" class="label">密碼確認</label>
        <input
        id="checkPassword"
        name="checkPassword"
        type="password"
        class="input checkPassword-input"
        autocomplete="current-checkPassword"
        required
        >
      </div>

      <button
        class="main-btn save-btn"
        type="submit"
      >
        儲存
      </button>  
    
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserSettingForm',
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.form-container {
  border-left: solid 1px #E6ECF0; 
}

.title {
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
  line-height: 28px;
  border-bottom: solid 1px #E6ECF0; 
  padding: 14px;
  padding-left: 24px;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start; 
  position: relative;
  padding-left: 16px;
  padding-top: 6px;

  .title {
    margin-top: 35px;
    font-size: 23px;
    line-height: 33px;
    color: #1C1C1C;
  }

  .form-label {
    position: relative;
  }

  .label {
    position: absolute;
    color: #657786;
    top: 25px;
    left: 10px;
  }

  .input {
    width: 632px;
    height: 26px;
    background: #F5F8FA;
    border: none;
    border-bottom: solid 3px #657786;
    border-radius: 4px;
    margin-top: 20px;
    padding-top: 24px;
    padding-left: 10px;
    font-size: 16px;
  }
}

.save-btn {
  width: 122px;
  height: 50px;
  border-radius: 50px;
  margin-top: 30px;
  font-size: 18px;
  line-height: 26px;
  position: relative;
}
</style>

