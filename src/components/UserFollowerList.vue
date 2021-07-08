<template>
  <div class="container">
    <div class="user-navbar">
      <div class="icon">
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
      <router-link to="#">
        <div class="follower">跟隨者</div>
      </router-link>
      <router-link to="#">
        <div class="following">正在跟隨</div>
      </router-link>
    </div>
    <!-- Follow List -->
    <div class="follow-list">
      <!--  card    -->
      <div class="follow-card">
        <div class="avatar">
          <img
            src="https://scontent.ftpe4-1.fna.fbcdn.net/v/t1.6435-9/41733863_2401943579823502_6964299628061655040_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7bltECWyJOEAX_iAo19&_nc_ht=scontent.ftpe4-1.fna&oh=b74a26b71dee8ebd1228e3e4a4764c0e&oe=60EAF9BC"
            alt=""
          />
        </div>
        <div class="content">
          <div class="user-info">
            <div class="user-name">
              <div class="name">Ashley</div>
              <div class="user-account">@ashley</div>
            </div>
            <div class="follow-btn">跟隨</div>
          </div>

          <div class="tweet-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            incidunt explicabo libero modi sit eveniet sint voluptates illo,
            quibusdam excepturi!
          </div>
        </div>
      </div>
      <div class="follow-card">
        <div class="avatar">
          <img
            src="https://i.pinimg.com/originals/38/da/e2/38dae2d2337be986bbc1a2ade5e86f33.png"
            alt=""
          />
        </div>
        <div class="content">
          <div class="user-info">
            <div class="user-name">
              <div>Ashley</div>
              <div class="user-account">@ashley</div>
            </div>
            <div class="follow-btn">跟隨</div>
          </div>

          <div class="tweet-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            incidunt explicabo libero modi sit eveniet sint voluptates illo,
            quibusdam excepturi!
          </div>
        </div>
      </div>
      <div class="follow-card">
        <div class="avatar">
          <img
            src="https://scontent.ftpe4-1.fna.fbcdn.net/v/t1.6435-9/41733863_2401943579823502_6964299628061655040_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7bltECWyJOEAX_iAo19&_nc_ht=scontent.ftpe4-1.fna&oh=b74a26b71dee8ebd1228e3e4a4764c0e&oe=60EAF9BC"
            alt=""
          />
        </div>
        <div class="content">
          <div class="user-info">
            <div class="user-name">
              <div class="name">Ashley</div>
              <div class="user-account">@ashley</div>
            </div>
            <div class="follow-btn">跟隨</div>
          </div>

          <div class="tweet-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            incidunt explicabo libero modi sit eveniet sint voluptates illo,
            quibusdam excepturi!
          </div>
        </div>
      </div>
      <div class="follow-card">
        <div class="avatar">
          <img
            src="https://scontent.ftpe4-1.fna.fbcdn.net/v/t1.6435-9/41733863_2401943579823502_6964299628061655040_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7bltECWyJOEAX_iAo19&_nc_ht=scontent.ftpe4-1.fna&oh=b74a26b71dee8ebd1228e3e4a4764c0e&oe=60EAF9BC"
            alt=""
          />
        </div>
        <div class="content">
          <div class="user-info">
            <div class="user-name">
              <div class="name">Ashley</div>
              <div class="user-account">@ashley</div>
            </div>
            <div class="follow-btn">跟隨</div>
          </div>

          <div class="tweet-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            incidunt explicabo libero modi sit eveniet sint voluptates illo,
            quibusdam excepturi!
          </div>
        </div>
      </div>
      <div class="follow-card">
        <div class="avatar">
          <img
            src="https://scontent.ftpe4-1.fna.fbcdn.net/v/t1.6435-9/41733863_2401943579823502_6964299628061655040_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7bltECWyJOEAX_iAo19&_nc_ht=scontent.ftpe4-1.fna&oh=b74a26b71dee8ebd1228e3e4a4764c0e&oe=60EAF9BC"
            alt=""
          />
        </div>
        <div class="content">
          <div class="user-info">
            <div class="user-name">
              <div class="name">Ashley</div>
              <div class="user-account">@ashley</div>
            </div>
            <div class="follow-btn">跟隨</div>
          </div>

          <div class="tweet-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            incidunt explicabo libero modi sit eveniet sint voluptates illo,
            quibusdam excepturi!
          </div>
        </div>
      </div>
      <div class="follow-card">
        <div class="avatar">
          <img
            src="https://scontent.ftpe4-1.fna.fbcdn.net/v/t1.6435-9/41733863_2401943579823502_6964299628061655040_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=7bltECWyJOEAX_iAo19&_nc_ht=scontent.ftpe4-1.fna&oh=b74a26b71dee8ebd1228e3e4a4764c0e&oe=60EAF9BC"
            alt=""
          />
        </div>
        <div class="content">
          <div class="user-info">
            <div class="user-name">
              <div class="name">Ashley</div>
              <div class="user-account">@ashley</div>
            </div>
            <div class="follow-btn">跟隨</div>
          </div>

          <div class="tweet-content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
            incidunt explicabo libero modi sit eveniet sint voluptates illo,
            quibusdam excepturi!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

$borderColor: #e6ecf0;

@mixin border-box($length: 20px) {
  width: $length;
  height: $length;
  border: solid 1px #c4c4c4;
  border-radius: 100px;
}

* {
  font-family: "Noto Sans TC", sans-serif;
}

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
    border-bottom: solid 3px $mainColor;
    width: 130px;
    text-align: center;
    font-weight: 700;
    &:hover {
      cursor: pointer;
    }
  }
}
// Follow List
.follow-card {
  display: grid;
  grid-template-columns: 0.2fr auto;
  grid-gap: 1rem;
  border: solid 1px $borderColor;
  border-top: none;
  padding: 0.5rem;
  .avatar > img {
    @include border-box(50px);
    object-fit: cover;
  }
  .user-info {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    .follow-btn {
      width: 3.5rem;
      height: 1.5rem;
      grid-column: 4/4;
      text-align: center;
      justify-self: end;
      line-height: 1.5rem;
      background-color: #ffffff;
      font-weight: 500;
      font-size: 15px;
      color: $mainColor;
      border: 1px solid $mainColor;
      border-radius: 100px;
      &:hover {
        cursor: pointer;
      }
    }
    .name {
      font-size: 15px;
      font-weight: 700;
    }
    .user-account {
      font-size: 15px;
      font-weight: 500;
      color: #657786;
    }
  }
  .tweet-content {
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
  }
}
</style>