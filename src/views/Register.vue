<template>
  <div class="container">
    <form @submit.stop.prevent="handleSubmit">
      <div class="logo">
        <svg
          width="50"
          height="50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.7 23.47s-7.467 12.108-13.59 12.108c-10.707 0-.728-23.065 7.082-23.065 5.449 0 6.508 10.958 6.508 10.958z"
            fill="#F60"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M39.572 38.697a19.997 19.997 0 01-31.81-3.557c1.77 2.408 4.772 4.013 9.041 4.013 10.517 0 16.487-8.173 16.487-8.173s.516 6.46 6.27 7.717h.012zM42.722 15.745a19.98 19.98 0 01-.481 19.395 5.947 5.947 0 01-2.803-3.531l-2.282-6.837 5.566-9.027zM25.003 5.017a19.96 19.96 0 0113.537 5.28l-3.788 6.112c-1.37-3.566-4.156-7.136-9.575-7.136-11.099 0-19.325 12.116-19.325 19.712-.002.982.123 1.96.373 2.91a20 20 0 019.53-24.628A20.008 20.008 0 0125.002 5v.017z"
            fill="#F60"
          />
        </svg>
      </div>

      <div class="title">
        <h1>建立你的帳號</h1>
      </div>

      <div class="form-label account-form-label">
        <label for="account" class="label">帳號</label>
        <input
          v-model="account"
          id="account"
          name="account"
          type="account"
          class="account-input"
          autocomplete="account"
          required
          autofocus
        />
      </div>
      <div class="form-label name-form-label">
        <label for="name" class="label">名稱</label>
        <input
          v-model="name"
          id="name"
          name="name"
          type="name"
          class="name-input"
          autocomplete="name"
          required
        />
      </div>

      <div class="form-label email-form-label">
        <label for="account" class="label">Email</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          class="email-input"
          autocomplete="email"
          required
          autofocus
        />
      </div>

      <div class="form-label password-form-label">
        <label for="password" class="label">密碼</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          class="password-input"
          autocomplete="current-password"
          required
        />
      </div>
      <div class="form-label check-password-form-label">
        <label for="checkPassword" class="label">確認密碼</label>
        <input
          v-model="checkPassword"
          id="checkPassword"
          name="checkPassword"
          type="password"
          class="check-password-input"
          autocomplete="checkPassword"
          required
        />
      </div>

      <button
        class="main-btn regist-btn"
        type="submit"
        :disabled="isProcessing"
      >
        註冊
      </button>

      <div class="regist-cancle-btn">
        <router-link to="/login"> 取消 </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Fire } from "./../utils/helper";

export default {
  name: "Register",
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      checkPassword: "",
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (this.password !== this.checkPassword) {
        Fire.fire({
          icon: "warning",
          title: "密碼輸入錯誤",
        });
        return;
      }
      if (
        !this.account ||
        !this.name ||
        !this.email ||
        !this.password ||
        !this.checkPassword
      ) {
        Fire.fire({
          icon: "warning",
          title: "請輸入所有欄位",
        });
        return;
      }
      if (this.password.length < 6) {
        Fire.fire({
          icon: "warning",
          title: "密碼長度不足",
        });
        return;
      }
      try {
        this.isProcessing = true;

        const { data } = await adminAPI.signUp({
          account: this.account,
          name: this.name,
          email: this.email,
          password: this.password,
          checkPassword: this.checkPassword,
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.isProcessing = false;
        console.log("signup success!");
        this.$router.push("/");
      } catch (error) {
        console.log(error);
        Fire.fire({
          icon: "warning",
          title: "無法註冊，請稍後再試！",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/regist.scss";
</style>
