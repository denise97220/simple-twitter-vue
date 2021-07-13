<template>
  <div class="container">
    <Spinner v-if="isLoading" />
    <div v-else class="follow-list">
      <!--  card    -->
      <div
        class="follow-card"
        v-for="follower in Followers"
        :key="follower.followerId"
      >
        <div class="avatar">
          <img :src="follower.avatar" alt="avatar" />
        </div>
        <div class="content">
          <div class="user-info">
            <div class="user-name">
              <div class="name">{{ follower.name }}</div>
              <div class="user-account">{{ follower.account }}</div>
            </div>
            <div
              v-if="!follower.isFollowed"
              class="unfollow-btn"
              @click.stop.prevent="addFollowList(follower.followerId)"
            >
              跟隨
            </div>
            <div
              v-else
              class="follow-btn"
              @click.stop.prevent="deleteFollowList(follower.followerId)"
            >
              正在跟隨
            </div>
          </div>

          <div class="tweet-content">
            {{ follower.introduction }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userAPI from "./../apis/user";
import { Fire } from "./../utils/helper";
import Spinner from "./../components/Spinner.vue";

export default {
  name: "UserFollowerList",
  components: {
    Spinner,
  },
  data() {
    return {
      id: this.$route.params.id,
      Followers: [],
      isLoading: true,
    };
  },
  props: {
    relateToUser: {
      type: Object,
    },
  },
  watch: {
    relateToUser(newValue) {
      const { id, isFollowed } = newValue;
      this.Followers = this.Followers.map((user) => {
        if (user.followerId === id) {
          return (user = {
            ...user,
            isFollowed: isFollowed,
          });
        } else {
          return user;
        }
      });
    },
  },
  created() {
    this.fetchUserFollowers(this.id);
  },
  methods: {
    async fetchUserFollowers(userId) {
      try {
        const { data } = await userAPI.getUserFollowers({ userId });
        this.Followers = data;
        this.isLoading = false;
      } catch (error) {
        console.error(error);
      }
    },
    async addFollowList(id) {
      try {
        const { data } = await userAPI.follow({ id });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.Followers = this.Followers.map((follow) => {
          if (follow.followerId === id) {
            return (follow = {
              ...follow,
              isFollowed: true,
            });
          } else {
            return follow;
          }
        });
        this.$emit("tap-follow-button", {
          id: id,
          isFollowed: true,
        });
      } catch (error) {
        Fire.fire({
          icon: "warning",
          title: "無法新增，請稍後再試。",
        });
        console.error(error);
      }
    },
    async deleteFollowList(userId) {
      try {
        const { data } = await userAPI.unFollow({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.Followers = this.Followers.map((follow) => {
          if (follow.followerId === userId) {
            return (follow = {
              ...follow,
              isFollowed: false,
            });
          } else {
            return follow;
          }
        });
        this.$emit("tap-follow-button", {
          id: userId,
          isFollowed: false,
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
    .unfollow-btn {
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
        color: $mainColorHover;
      }
    }
    .follow-btn {
      width: 5rem;
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