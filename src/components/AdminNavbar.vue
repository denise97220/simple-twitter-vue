<template>
  <div class="container">
    <!-- navigation button block -->
    <div class="navbar-logo">
      <i class="logo">
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
      </i>
    </div>

    <div class="nav-btns">
      <!-- tweets list btn -->
      <router-link to="/admin_main">
        <div class="tweets-btn">
          <i class="navbar-icon">
            <svg
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.58 5.8501L12.475 0.3971C12.178 0.2371 11.821 0.2371 11.525 0.3971L1.42502 5.8501C0.939018 6.1141 0.758018 6.7201 1.02002 7.2061C1.20002 7.5411 1.54502 7.7311 1.90002 7.7311C2.06002 7.7311 2.22402 7.6931 2.37502 7.6111L3.10902 7.2151L4.69902 18.4651C4.91502 19.6791 6.00902 20.5271 7.35902 20.5271H16.641C17.991 20.5271 19.085 19.6791 19.303 18.4391L20.891 7.2141L21.628 7.6121C22.113 7.8751 22.72 7.6941 22.982 7.2081C23.245 6.7221 23.062 6.1151 22.578 5.8531L22.58 5.8501ZM12 13.9351C10.205 13.9351 8.75002 12.4801 8.75002 10.6851C8.75002 8.8901 10.205 7.4351 12 7.4351C13.795 7.4351 15.25 8.8901 15.25 10.6851C15.25 12.4801 13.795 13.9351 12 13.9351Z"
                fill="#FF6600"
              />
            </svg>
          </i>
          <span> 推文清單 </span>
        </div>
      </router-link>
      <!-- user list btn -->
      <router-link to="/admin_users">
        <div class="user-btn">
          <i class="navbar-icon">
            <svg
              width="18"
              height="21"
              viewBox="0 0 18 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00003 10.316C10.355 10.316 11.872 10.166 12.84 9.06001C13.654 8.13001 13.918 6.69201 13.646 4.66801C13.266 1.84301 11.529 0.156006 9.00003 0.156006C6.47103 0.156006 4.73403 1.84301 4.35403 4.67001C4.08203 6.69201 4.34603 8.13001 5.16003 9.06001C6.12803 10.167 7.64503 10.316 9.00003 10.316ZM5.84003 4.86801C6.00203 3.66801 6.62703 1.65601 9.00003 1.65601C11.373 1.65601 11.998 3.66901 12.16 4.86801C12.367 6.41801 12.217 7.49501 11.71 8.07301C11.255 8.59301 10.444 8.81601 9.00003 8.81601C7.55603 8.81601 6.74503 8.59301 6.29003 8.07301C5.78303 7.49501 5.63303 6.41701 5.84003 4.86801ZM17.28 17.736C16.403 14.21 12.998 11.746 9.00003 11.746C5.00203 11.746 1.59703 14.21 0.720027 17.736C0.548027 18.428 0.692027 19.136 1.11503 19.676C1.52303 20.196 2.15503 20.496 2.84803 20.496H15.152C15.845 20.496 16.477 20.196 16.885 19.676C17.309 19.136 17.452 18.429 17.279 17.736H17.28ZM15.704 18.752C15.578 18.912 15.388 18.998 15.152 18.998H2.84803C2.61303 18.998 2.42203 18.913 2.29603 18.752C2.15903 18.578 2.11603 18.34 2.17603 18.098C2.88603 15.243 5.69303 13.248 9.00003 13.248C12.307 13.248 15.114 15.242 15.824 18.098C15.884 18.34 15.841 18.578 15.704 18.752Z"
                fill="black"
              />
            </svg>
          </i>
          <span> 使用者列表</span>
        </div>
      </router-link>

      <!-- 登出 -->
      <div class="sign-out-btn">
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 13L5 9M5 9L9 5M5 9H19M14 13V14C14 14.7956 13.6839 15.5587 13.1213 16.1213C12.5587 16.6839 11.7956 17 11 17H4C3.20435 17 2.44129 16.6839 1.87868 16.1213C1.31607 15.5587 1 14.7956 1 14V4C1 3.20435 1.31607 2.44129 1.87868 1.87868C2.44129 1.31607 3.20435 1 4 1H11C11.7956 1 12.5587 1.31607 13.1213 1.87868C13.6839 2.44129 14 3.20435 14 4V5"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        登出
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
*,
html,
body {
  font-style: normal;
  font-weight: bold;
}
.container {
  display: grid;
  grid-template-rows: 100px 600px 50px;
  justify-items: center;
  width: 378px;
  height: 100%;
  font-size: 18px;
  font-weight: 700;
  font-style: normal;
  line-height: 26.06px;
}
.navbar-logo {
  position: relative;
  .logo {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 50px;
    height: 50px;
  }
}
.nav-group {
  height: 100%;
  max-height: 1202px;
  i {
    width: 22px;
    height: 20px;
  }
}
.tweets-btn,
.user-btn,
.navbar-logo,
.sign-out-btn {
  width: 210px;
  margin-top: 10%;
  justify-items: center;
  &:hover {
    cursor: pointer;
  }
  span {
    width: 72px;
    height: 27px;
    padding-left: 0.5rem;
  }
}
.tweets-btn {
  color: $mainColor;
}
.user-btn {
  color: black;
}
.sign-out-btn {
  position: absolute;
  bottom: -15px;
}
</style>