<template>
  <div class="container">
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <div class="related-users-card">
      <div class="header">跟隨誰</div>
      <router-link to="" v-for="user in relatedUsers" :key="user.id">
        <div class="single-user">
          <div class="avatar">
            <img class="avatar-img" :src="user.image" alt="">
          </div>
          <div class="info">
            <div class="name">{{ user.name }}</div>
            <div class="account">{{ user.account }}</div>
          </div>
          <button 
            class="main-btn following-btn" 
            @click.stop.prevent="unFollow(user.id)" 
            v-if="user.isFollowing"
          >正在跟隨</button>
          <button 
            class="main-btn following-btn" 
            @click.stop.prevent="follow(user.id)" 
            v-else
          >跟隨</button>
        </div>
      </router-link>
    </div>
     <!-- footer -->
    <div class="footer">
      <label 
        class="navbar-toggle-label" 
        for="navbar-toggle"
        v-if="!isShowMore"
        @click="showMore"
      >
        <div class="show-more-btn">顯示更多</div>
      </label>
      <label 
        class="navbar-toggle-label" 
        for="navbar-toggle"
        v-else
        @click="showLess"
      >
        <div class="show-less-btn">顯示較少</div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "RelatedUsers",
  data() {
    return {
      relatedUsers: [
        {
          name: "許丹",
          id: 1,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          isFollowing: false
        },
        {
          name: "許丹",
          id: 2,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          isFollowing: true
        },
        {
          name: "許丹",
          id: 3,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 "
        },
        {
          name: "許丹",
          id: 4,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 "
        },
        {
          name: "許丹",
          id: 5,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          isFollowing: false
        },
        {
          name: "許丹",
          id: 6,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          isFollowing: false,
        },
        {
          name: "許丹",
          id: 7,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          isFollowing: true
        },
        {
          name: "許丹",
          id: 8,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 "
        },
        {
          name: "許丹",
          id: 9,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          isFollowing: false
        },
      ],
      isShowMore: false
    }
  },
  methods: {
    showMore() {
      this.isShowMore = true
    },
    showLess() {
      this.isShowMore = false
    },
    follow(userId) {
      this.relatedUsers = this.relatedUsers.map(user => {
        if (user.id === userId) {
          user.isFollowing = true 
          return
        } else {
          return user
        }
      })
    },
    unFollow(userId) {
      this.relatedUsers = this.relatedUsers.map(user => {
        if (user.id === userId) {
          user.isFollowing = false
          return
        } else {
          return user
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.container {
  padding-left: 10px;
}

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
  overflow: hidden;
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

.navbar-toggle:checked ~ .related-users-card {
  height: 100%;
}

.navbar-toggle {
  display: none;
}

.navbar-toggle-label {
  position: absolute;
}

.single-user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #E6ECF0;
  position: relative;
  .avatar-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .info {
    position: absolute;
    left: 75px;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #1C1C1C;
    .account {
      color: #657786;
    }
  }

 .footer {
    width: 350px;
    height: 45px;
    background-color: #F5F8FA;
    border: solid 1px;
    line-height: 45px;
    label {
      width: 100%;
      height: 100%;
    }
  }
}
</style>