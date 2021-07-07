<template>
  <div class="container">
    <form 
      @submit.stop.prevent="submit"
    >
      <div class="logo">
        <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.7 23.47s-7.467 12.108-13.59 12.108c-10.707 0-.728-23.065 7.082-23.065 5.449 0 6.508 10.958 6.508 10.958z" fill="#F60"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39.572 38.697a19.997 19.997 0 01-31.81-3.557c1.77 2.408 4.772 4.013 9.041 4.013 10.517 0 16.487-8.173 16.487-8.173s.516 6.46 6.27 7.717h.012zM42.722 15.745a19.98 19.98 0 01-.481 19.395 5.947 5.947 0 01-2.803-3.531l-2.282-6.837 5.566-9.027zM25.003 5.017a19.96 19.96 0 0113.537 5.28l-3.788 6.112c-1.37-3.566-4.156-7.136-9.575-7.136-11.099 0-19.325 12.116-19.325 19.712-.002.982.123 1.96.373 2.91a20 20 0 019.53-24.628A20.008 20.008 0 0125.002 5v.017z" fill="#F60"/></svg>
      </div>

      <div class="title">
        <h1>登入 Alphitter</h1>
      </div>

      <div class="form-label email-form-label">
        <label for="email" class="label">帳號</label>
        <input
        v-model="email"
        id="email"
        name="email"
        type="email"
        class="email-input"
        autocomplete="username"
        required
        autofocus
        >
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
        >
      </div>

      <button
        class="main-btn login-btn"
        type="submit"
        :class="{ 'disabled-btn': isProcessing }"
        :disabled="isProcessing"
      >
        登入
      </button>  

      <div class="admin-login-btn">
        <router-link to="/regist">
          註冊 Alphitter
        </router-link>
        <div class="dot"></div>
        <router-link to="/admin">
          後台登入
        </router-link>
      </div>    
    </form>
  </div>
</template>

<script>
import userAPI from './../apis/user'
import { Fire } from './../utils/helper'

export default {
  name: "UserLogin",
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    }
  },
  methods: {
    async submit() {
      try {
        if (!this.email || !this.password) {
          Fire.fire({
            icon: 'warning',
            title: '請填入 email 和 password'
          })
          return
        }
        
        this.isProcessing = true
        
        const { data } = await userAPI.login({
          email: this.email,
          password: this.password
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        localStorage.setItem("token", data.token)
        this.$router.push("/setting")

      } catch(error) {
        console.log(error)

        this.isProcessing = false
        this.password = ''
        Fire.fire({
          icon: "warning",
          title: "登入失敗，請稍後再試"
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/login.scss";
</style>