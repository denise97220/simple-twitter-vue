<template>
  <div class="container">
    <div class="related-users-card">
      <div class="header">跟隨誰</div>
      <router-link to="/user/self">
        <div class="single-user">
          <div class="avatar"></div>
          <div class="info">
            <div class="name">許丹</div>
            <div class="account">@dandan</div>
          </div>
          <button class="main-btn following-btn">正在跟隨</button>
          <!-- <div class="main-btn">跟隨</div> -->
        </div>
      </router-link>
      <router-link to="/user/self">
        <div class="single-user">
          <div class="avatar"></div>
          <div class="info">
            <div class="name">許丹</div>
            <div class="account">@dandan</div>
          </div>
          <button class="main-btn following-btn">正在跟隨</button>
          <!-- <div class="main-btn">跟隨</div> -->
        </div>
      </router-link>
      <router-link to="/user/self">
        <div class="single-user">
          <div class="avatar"></div>
          <div class="info">
            <div class="name">許丹</div>
            <div class="account">@dandan</div>
          </div>
          <button class="main-btn following-btn">正在跟隨</button>
          <!-- <div class="main-btn">跟隨</div> -->
        </div>
      </router-link>

      <!-- footer -->
      <div class="footer">
        <div class="show-more-btn">顯示更多</div>
        <!-- <div class="show-less-btn">顯示較少</div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.related-users-card {
  width: 335px;
  height: 517px;
  background-color: #F5F8FA;
  border-radius: 14px;
  margin-top: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;

  .header {
    height: 35px;
    padding-top: 10px;
    padding-left: 15px;
    border-bottom: 1px solid #E6ECF0;
  }

  .following-btn {
    width: 92px;
    height: 30px;
    border-radius: 100px;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 15px;
  }
}

.single-user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #E6ECF0;
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-image: url("https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959");
    background-size: cover;
  }
}
</style>