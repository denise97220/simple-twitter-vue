<template>
  <div class="container">
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />
    <Spinner v-if="isLoading" />
    <div class="related-users-card" v-else>
      <div class="header">跟隨誰</div>
        <div class="single-user" 
          v-for="user in relatedUsers" :key="user.id" 
          @click="redirectToProfile(user.id)"
        >
          <div class="avatar">
            <img class="avatar-img" :src="user.avatar" alt="">
          </div>
          <div class="info">
            <div class="name">{{ user.name }}</div>
            <div class="account">{{ user.account }}</div>
          </div>
          <button 
            class="main-btn following-btn" 
            @click.stop.prevent="unFollow(user.id)" 
            v-if="user.isFollowed"
          >正在跟隨</button>
          <button 
            class="follow-btn" 
            @click.stop.prevent="follow(user.id)" 
            v-else
          >跟隨</button>
        </div>
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
import Spinner from "./../components/Spinner.vue"
import userAPI from "./../apis/user"
import { Fire } from "./../utils/helper"
import { mapState } from "vuex"

export default {
  name: "RelatedUsers",
  components: {
    Spinner
  },
  data() {
    return {
      relatedUsers: [],
      isShowMore: false,
      isLoading: true
    }
  },
  methods: {
    showMore() {
      this.isShowMore = true
    },
    showLess() {
      this.isShowMore = false
    },
    async follow(id) {
      try {
        const { data } = await userAPI.follow({ id })

        if (data.status !== "success") {
          throw new Error(data.message)
        }

        this.relatedUsers = this.relatedUsers.map(user => {
          if (user.id === id) {
            return user = {
              ...user,
              isFollowed: true
            }
          } else {
            return user
          }
        })
      } catch(error) {
        Fire.fire({
          icon: "warning",
          title: "無法追蹤，請稍後再試"
        })
      } 
    },
    async unFollow(userId) {
      try {
        const { data } = await userAPI.unFollow({ userId })

        if (data.status !== "success") {
          throw new Error(data.message)
        }

        this.relatedUsers = this.relatedUsers.map(user => {
        if (user.id === userId) {
          return user = {
            ...user,
            isFollowed: false
          }
        } else {
          return user
        }
      })
      } catch(error) {
        Fire.fire({
          icon: "warning",
          title: "無法取消追蹤，請稍後再試"
        })
      } 
    },
    async fetchTopUsers() {
      try {
        const { data } = await userAPI.getTopUsers()
        const { topUsers } = data
        this.relatedUsers = topUsers
        this.isLoading = false
      } catch(error) {
        console.log(error)
        Fire.fire({
          icon: "warning",
          title: "無法取得使用者資料，請稍後再試"
        })
        this.isLoading = false
      }
    },
    redirectToProfile(id) {
      if (id === this.currentUser.id) {
        this.$router.push("/user/self")
      } else {
        this.$router.push({ path: `/user/other/${id}/tweet` })
        this.$emit("updateUser", id)
      }
    },
  },
  computed: {
    ...mapState(["currentUser"])
  },
  created() {
    this.fetchTopUsers()
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.container {
  padding-left: 10px;
}

.related-users-card {
  width: 335px;
  height: 450px;
  background-color: #F5F8FA;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  margin-top: 10px;
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
  .following-btn, .follow-btn {
    width: 92px;
    height: 30px;
    border-radius: 100px;
    font-size: 15px;
    line-height: 15px;
  }
  .follow-btn {
    width: 62px;
    background: none;
    border: solid 1px $mainColor;
    color: $mainColor;
    cursor: pointer;
    transition: background-color .1s linear;
    &:hover {
      background-color: #e3e3e3;
    }
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
  transition: background-color .2s linear;
  cursor: pointer;
  .avatar-img {
    width: 42px;
    height: 42px;
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
  &:hover {
    background-color: #eeeeee;
  }
 .footer {
    width: 350px;
    height: 45px;
    background-color: #F5F8FA;
    border: solid 1px;
    line-height: 45px;
  }
}

label {
  cursor: pointer;
  width: 320px;
  height: 40px;
  background-color: #F5F8FA;
  color: $mainColor;
  line-height: 45px;
  padding-left: 15px;
  padding-bottom: 5px;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  transition: background-color .2s linear;
  &:hover {
    background-color: #eeeeee;
  }
}
</style>