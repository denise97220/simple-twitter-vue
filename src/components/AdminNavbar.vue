<template>
  <div class="container">
    <div class="navbar">
      <div class="twitter-logo">
        <router-link to="/admin_main">
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
        </router-link>
      </div>
      <div class="nav-list">
        <router-link to="/admin_main">
          <div class="logo-wrapper home">
            <i class="logo home-logo">
              <svg
                width="24"
                height="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path :class="{'nav-list-logo-choosed': nowPage === 'admin-main'}" class="home-logo-path"
                  d="M22.58 6.35L12.475.897a1 1 0 00-.95 0L1.425 6.35A1.002 1.002 0 001.9 8.23c.16 0 .324-.037.475-.12l.734-.395 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398a1 1 0 00.95-1.759l.002-.003zM12 14.435a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z"
                  fill="#1C1C1C"
                />
              </svg>
            </i>
            <h2 
              :class="{ 'list-title-choosed': nowPage === 'admin-main', 'list-title': nowPage !== 'admin-main' }"
              class="home-title"
            >推文清單</h2>
          </div>
        </router-link>
        <router-link to="/admin_users">
          <div class="logo-wrapper selfinfo">
            <i class="logo selfinfo-logo">
              <svg
                width="18"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path :class="{ 'nav-list-logo-choosed': nowPage === 'admin-users'}" class="selfinfo-logo-path"
                  d="M9 10.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392C13.266 2.343 11.529.656 9 .656S4.734 2.343 4.354 5.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM5.84 5.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94h.001zm-1.576 1.016c-.126.16-.316.246-.552.246H2.848c-.235 0-.426-.085-.552-.246a.753.753 0 01-.12-.654c.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
                  fill="#000"
                />
              </svg>
            </i>
            <h2 
              :class="{ 'list-title-choosed': nowPage === 'admin-users', 'list-title': nowPage !== 'admin-users' }"
              class="selfinfo-title"
            >使用者列表</h2>
          </div>
        </router-link>
      </div>
      <div class="logout" @click.stop.prevent="logout">
        <svg
          width="20"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 13L5 9m0 0l4-4M5 9h14m-5 4v1a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h7a3 3 0 013 3v1"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="logout-text" @click.stop.prevent="logout">登出</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AdminNavbar",
  data() {
    return {
      nowPage: ""
    }
  },
  methods: {
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/login");
    },
  },
  created() {
    this.nowPage = this.$route.name
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.navbar-container {
  width: 100%;
  height: 100%;
}

.navbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 60px;
  padding-top: 14px;
}

.list-title-choosed {
  color: $mainColor;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  padding-bottom: 2px;
}

.nav-list-logo-choosed {
  fill: $mainColor;
}

.nav-list {
  margin-top: 51px;
}

.logo-wrapper {
  width: 110%;
  height: 50px;
  margin-bottom: 10px;
  padding-left: 10px;
  border-radius: 30px;
  transition: background-color 0.2s linear;
}

.home,
.selfinfo {
  display: flex;
  align-items: center;
  margin-left: 2px;

  .list-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #1c1c1c;
    padding-bottom: 2px;
  }
  .selfinfo-title {
    margin-left: -3px;
  }
}

.home {
  margin-left: 0;
}

.logo-wrapper:hover{
  background-color: $logoHover;
  
  .home-logo-path, 
  .selfinfo-logo-path, 
  .setting-logo-path {
    fill: $mainColor;
  }
  .list-title {
    color: $mainColor;
  }
}

.logo,
.twitter-logo {
  width: 23px;
  height: 23px;
  margin-right: 20px;
}

.logout {
  position: fixed;
  bottom: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .logout-text {
    margin-left: 23px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
  }
}

@media screen and (max-width: 900px) {
  .list-title, 
  .logout-text, 
  .home-title, 
  .selfinfo-title {
    display: none;
  }
  .logo-wrapper {
    width: 80%;
    border-radius: 100%;
    padding-left: 0px;
  }
  .logout {
    padding-left: 20px;
  }
  .logo {
    margin-left: 16px;
  }
}
</style>