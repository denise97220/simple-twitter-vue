<template>
  <div class="container">
    <!-- Follow List -->
    <div class="follow-list">
      <!--  card    -->
      <div
        class="follow-card"
        v-for="follow in Followings"
        :key="follow.followingId"
      >
        <div class="avatar">
          <img :src="follow.avatar" alt="avatar" />
        </div>
        <div class="content">
          <div class="user-info">
            <div class="user-name">
              <div class="name">{{ follow.name }}</div>
              <div class="user-account">{{ follow.account }}</div>
            </div>
            <div
              class="follow-btn"
              @click.stop.prevent="deleteFollowList(follow.followingId)"
            >
              正在跟隨
            </div>
          </div>

          <div class="tweet-content">
            {{ follow.introduction }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "./../apis/user";
import { Fire } from "./../utils/helper";

export default {
  name: "UserFollowingList",
  data() {
    return {
      id: this.$route.params.id,
      Followings: [],
    };
  },
  created() {
    this.fetchUserFollowings(this.id);
  },
  watch: {
    Followings(newValue) {
      return console.log("Following change", newValue);
    },
  },
  methods: {
    async fetchUserFollowings(userId) {
      try {
        const { data } = await userAPI.getUserFollowings({ userId });
        this.Followings = {
          ...data,
        };
      } catch (error) {
        console.error(error);
      }
    },
    async deleteFollowList(userId) {
      try {
        const { data } = await userAPI.unFollow({ userId });
        console.log("data", data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.Followings = this.Followings.filter(
          (follow) => follow.followingId !== userId
        );
        console.log(this.Followings);
        Fire.fire({
          icon: "success",
          title: "已取消追蹤～",
        });
      } catch (error) {
        Fire.fire({
          icon: "warning",
          title: "無法刪除，請稍後再試",
        });
      }
    },
  },
};
</script>


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
      width: 70%;
      height: 1.5rem;
      grid-column: 4/4;
      text-align: center;
      justify-self: end;
      line-height: 1.5rem;
      background-color: $mainColor;
      font-weight: 500;
      font-size: 15px;
      color: #ffffff;
      border: 1px solid $mainColor;
      border-radius: 100px;
      &:hover {
        cursor: pointer;
        color: #ffffff;
        background: $mainColorHover;
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