<template>
  <div class="container">
    <div class="user-navbar">
      <div class="icon" @click.stop.prevent="$router.go(-1)">
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 5.99988H3.41399L7.70699 1.70687C8.09699 1.31687 8.09699 0.683875 7.70699 0.292875C7.31699 -0.0981249 6.68399 -0.0971249 6.29299 0.292875L0.292988 6.29288C-0.0970117 6.68288 -0.0970117 7.31588 0.292988 7.70687L6.29299 13.7069C6.48799 13.9019 6.74299 13.9999 6.99999 13.9999C7.25699 13.9999 7.51199 13.9019 7.70699 13.7069C8.09699 13.3169 8.09699 12.6839 7.70699 12.2929L3.41399 7.99988H16C16.553 7.99988 17 7.55288 17 6.99988C17 6.44688 16.553 5.99988 16 5.99988Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="user-navbar-info">
        <div class="user-name">Ashley</div>
        <div class="user-tweets-length">25 推文</div>
      </div>
    </div>
    <!-- Follow Navtabs -->
    <div class="nav-tabs">
      <router-link to="/user/self/follow/follower">
        <div class="follower">跟隨者</div>
      </router-link>
      <router-link to="/user/self/follow/following">
        <div class="following">正在跟隨</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFollowtabs",
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

$borderColor: #e6ecf0;

.user-navbar {
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  height: 55px;
  border: solid 1px $borderColor;
  border-bottom: none;
  align-items: center;
  justify-content: center;
  grid-gap: 20px;
  .icon {
    text-align: center;
    &:hover {
      cursor: pointer;
    }
  }
  .user-name {
    font-size: 19px;
    font-weight: 900;
  }
  .user-tweets-length {
    font-size: 13px;
    font-weight: 500;
    color: #657786;
  }
}

// Follow Navtabs
.nav-tabs {
  display: flex;
  height: 54px;
  align-items: center;
  border: solid 1px #e6ecf0;
  border-top: none;
  .follower,
  .following {
    padding: 1rem;
    width: 130px;
    text-align: center;
    font-weight: 700;
    &:hover {
      cursor: pointer;
    }
  }
  .router-link-active {
    text-decoration: none;
    color: $mainColor;
    border-bottom: 3px solid $mainColor;
  }
}
</style>