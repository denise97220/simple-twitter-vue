<template>
  <div class="container">
    <header>
      <div class="header-text">使用者列表</div>
    </header>
    <Spinner v-if="isLoading" />
    <div v-else class="user-card-wrapper">
      <div class="user-card" v-for="user in users" :key="user.id">
        <router-link to="">
          <div class="user-card-inner-wrapper">
            <div class="user-cover">
              <img class="user-cover-img" :src="user.cover" alt="">
            </div>
            <div class="user-info">
              <div class="name">{{ user.name }}</div>
              <div class="account">{{ user.account }}</div>
              <div class="reply-info">
                <div class="reply">
                  <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.846.242L8.698.232h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828a.85.85 0 00.12.403.744.744 0 001.034.229c.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V14.67a.75.75 0 00-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" fill="#657786"/></svg>
                  <div class="reply-count">{{ user.TweetsCount }}</div>
                </div>
                <div class="like">
                  <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8 19.638h-.014C8.203 19.59.75 12.856.75 6.478.75 3.414 3.275.724 6.153.724c2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H10.8v.002zM6.154 2.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965h-.001z" fill="#657786"/></svg>
                  <div class="like-count">{{ user.LikesCount }}</div>
                </div>
              </div>
              <div class="follow-info">{{ user.FollowingsCount }} 個跟隨中 {{ user.FollowersCount }} 位跟隨者</div>
            </div>
          </div>
          <div class="user-avatar">
            <img class="user-avatar-img" :src="user.avatar" alt="">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import adminAPI from './../apis/admin'
import { Fire } from './../utils/helper'
import Spinner from "./../components/Spinner.vue"

export default {
  name: "AdminUsersCard",
  components: {
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true
    }
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.getUsers()
        this.users = data
        this.isLoading = false
      } catch(error) {
        console.log(error)
        this.isLoading = false
        Fire.fire({
          icon: "warning",
          title: "無法取得使用者資料，請稍後再試"
        })
      }
    }
  },
  created() {
    this.fetchUsers()
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

header {
  padding: 15px;
  border-left: solid 1px #E6ECF0;
  border-bottom: solid 1px #E6ECF0;
  .header-test {
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    padding-left: 26px;
  }
}

.user-card-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
  grid-gap: 15px;
  padding: 15px;
  border-left: solid 1px #E6ECF0;
}

.user-card {
  width: 245px;
  height: 314px;
  background-color: #F6F7F8;
  border-radius: 10px;
  position: relative;
  .user-card-inner-wrapper {
    height: 100%;
  }
  .user-avatar {
    position: absolute;
    top: 67px;
    left: 50%;
    transform: translateX(-50%);
    .user-avatar-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: solid 4px white; 
    }
  }
  .user-cover {
    .user-cover-img {
      width: 100%;
      height: 140px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 33px;
    line-height: 22px;
    .name {
      font-weight: 900;
    }
    .account {
      color: #657786;
      margin-top: 2px;
    }
    .reply-info, .reply, .like {
      display: flex;
      align-items: center;
    }
    .reply-info {
      width: 50%;
      margin-top: 12px;
      padding-right: 10px;
      justify-content: space-around;
    }
    .reply-count, .like-count {
      margin-left: 5px;
      font-weight: 500;
    }
    .follow-info {
      margin-top: 20px;
    }
  }
  
}

</style>