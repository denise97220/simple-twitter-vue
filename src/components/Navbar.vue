<template>
  <div class="navbar-container">
    <div class="navbar">
      <div class="logo">
         <svg width="50" height="50" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30.7 23.47s-7.467 12.108-13.59 12.108c-10.707 0-.728-23.065 7.082-23.065 5.449 0 6.508 10.958 6.508 10.958z" fill="#F60"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39.572 38.697a19.997 19.997 0 01-31.81-3.557c1.77 2.408 4.772 4.013 9.041 4.013 10.517 0 16.487-8.173 16.487-8.173s.516 6.46 6.27 7.717h.012zM42.722 15.745a19.98 19.98 0 01-.481 19.395 5.947 5.947 0 01-2.803-3.531l-2.282-6.837 5.566-9.027zM25.003 5.017a19.96 19.96 0 0113.537 5.28l-3.788 6.112c-1.37-3.566-4.156-7.136-9.575-7.136-11.099 0-19.325 12.116-19.325 19.712-.002.982.123 1.96.373 2.91a20 20 0 019.53-24.628A20.008 20.008 0 0125.002 5v.017z" fill="#F60"/></svg>
      </div>
      <div class="nav-list">
        <router-link to="/main">
          <div class="home">
            <i class="logo home-logo">
              <svg width="24" height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.58 6.35L12.475.897a1 1 0 00-.95 0L1.425 6.35A1.002 1.002 0 001.9 8.23c.16 0 .324-.037.475-.12l.734-.395 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398a1 1 0 00.95-1.759l.002-.003zM12 14.435a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z" fill="#1C1C1C"/></svg>
            </i>
            <h2 class="list-title home-title">首頁</h2>
          </div>
        </router-link>
        <router-link to="/user/self">
          <div class="selfinfo">
            <i class="logo selfinfo-logo">
              <svg width="18" height="21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 10.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392C13.266 2.343 11.529.656 9 .656S4.734 2.343 4.354 5.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM5.84 5.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94h.001zm-1.576 1.016c-.126.16-.316.246-.552.246H2.848c-.235 0-.426-.085-.552-.246a.753.753 0 01-.12-.654c.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z" fill="#000"/></svg>
            </i>
            <h2 class="list-title selfinfo-title">個人資料</h2>
          </div>
        </router-link>
        <router-link to="">
          <div class="setting">
            <i class="logo setting-logo">
              <svg width="20.75" height="20.75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.75 20.75"><path class="cls-1" d="M10.74 20.75H10a2.27 2.27 0 01-2.27-2.06v-.15a.77.77 0 00-.47-.64.75.75 0 00-.8.11l-.12.1A2.34 2.34 0 013.29 18l-.51-.51a2.27 2.27 0 01-.14-3.06l.1-.12a.76.76 0 00.12-.79.77.77 0 00-.64-.52h-.15A2.26 2.26 0 010 10.74V10a2.26 2.26 0 012.06-2.25h.16a.77.77 0 00.64-.48.76.76 0 00-.12-.79l-.09-.12a2.25 2.25 0 01.14-3.06l.51-.51a2.34 2.34 0 013.06-.14l.11.1a.78.78 0 00.79.12.76.76 0 00.48-.64v-.16A2.27 2.27 0 0110 0h.72A2.26 2.26 0 0113 2.06v.16a.77.77 0 00.48.64.75.75 0 00.79-.12l.12-.1a2.34 2.34 0 013.06.14l.51.51a2.25 2.25 0 01.14 3.06l-.1.12a.76.76 0 00-.12.79.78.78 0 00.64.48h.16A2.26 2.26 0 0120.75 10v.73A2.26 2.26 0 0118.69 13h-.16a.79.79 0 00-.64.47.8.8 0 00.12.8l.1.12a2.25 2.25 0 01-.11 3.07l-.51.51a2.34 2.34 0 01-3.06.14l-.11-.1a.78.78 0 00-.79-.12.75.75 0 00-.48.64v.15a2.26 2.26 0 01-2.26 2.07zM7 16.33a2.32 2.32 0 01.87.17 2.27 2.27 0 011.4 1.9v.15a.77.77 0 00.77.7h.72a.77.77 0 00.77-.7v-.15a2.27 2.27 0 011.39-1.89 2.3 2.3 0 012.34.35l.11.09a.76.76 0 00.49.18.8.8 0 00.55-.22l.51-.51a.78.78 0 00.05-1l-.1-.12a2.27 2.27 0 01-.35-2.33 2.23 2.23 0 011.89-1.39h.15a.76.76 0 00.7-.77V10a.77.77 0 00-.7-.77h-.16a2.28 2.28 0 01-1.54-3.72l.1-.12a.77.77 0 00-.05-1l-.51-.51a.76.76 0 00-.55-.23.82.82 0 00-.49.18l-.12.1a2.32 2.32 0 01-2.32.36 2.27 2.27 0 01-1.4-1.9V2.2a.77.77 0 00-.77-.7H10a.77.77 0 00-.77.7v.15a2.28 2.28 0 01-3.71 1.54L5.4 3.8a.78.78 0 00-1 0l-.51.51a.76.76 0 00-.05 1l.1.12a2.28 2.28 0 01-1.58 3.8H2.2a.76.76 0 00-.7.77v.72a.77.77 0 00.7.77h.15a2.28 2.28 0 011.55 3.75l-.1.12a.76.76 0 00.05 1l.51.51a.78.78 0 001 0l.11-.09A2.27 2.27 0 017 16.33z"/><path class="cls-1" d="M10.33 6.34a3.79 3.79 0 103.79 3.78 3.79 3.79 0 00-3.79-3.78zm0 6.07a2.29 2.29 0 112.29-2.29 2.29 2.29 0 01-2.29 2.29z"/></svg>
            </i>
            <h2 class="list-title setting-title">設定</h2>
          </div>
        </router-link>
      </div>
      <button class="twitter-btn" data-bs-toggle="modal" data-bs-target="#twitterModal">推文</button>
    </div>
  <!-- Modal -->
  <div class="modal fade" id="twitterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
  </div>

  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

* {
  font-style: normal;
}

.navbar-container {
  width: 378px;
  height: 100%;
}

.navbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 103px;
  padding-top: 14px;
}

.nav-list {
  margin-top: 51px;
}

.home, .selfinfo, .setting {
  display: flex;
  align-items: center;

  .list-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #1C1C1C;
  }
}

.selfinfo, .setting {
  margin-top: 34px;
}

.logo {
  width: 23px;
  height: 23px;
  margin-right: 20px;
}

.twitter-btn {
  width: 210px;
  height: 45px;
  background-color: $mainColor;
  border-radius: 100px;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  border: none;
  margin-top: 27px;

  &:hover {
    background-color: $mainColorHover;
  }
}

#twitterModal {
  position: absolute;
  top: 100px;
  left: 200px;
} 

</style>
