<template>
  <div class="container">
    <Spinner v-if="isLoading" />
    <div v-else class="follow-list">
      <!--  card    -->
      <div
        class="follow-card"
        v-for="follow in Followings"
        :key="follow.followingId"
      >
        <div class="avatar">
          <img :src="follow.avatar" alt="avatar" />
        </div>
        <div class="user-info">
          <div class="name">{{ follow.name }}</div>
          <div class="user-account">{{ follow.account }}</div>
          <div class="tweet-content">
            {{ follow.introduction }}
          </div>
        </div>

        <div class="function-btn">
          <div
            v-if="!follow.isFollowed"
            class="unfollow-btn"
            @click.stop.prevent="addFollowList(follow.followingId)"
          >
            跟隨
          </div>
          <div
            v-else
            class="follow-btn"
            @click.stop.prevent="deleteFollowList(follow.followingId)"
          >
            正在跟隨
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
  name: "UserFollowingList",
  components: {
    Spinner,
  },
  props: {
    relateToUser: {
      type: Object,
    },
  },
  watch: {
    relateToUser(newValue) {
      const { id, isFollowed } = newValue;
      this.Followings = this.Followings.map((user) => {
        if (user.followingId === id) {
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
  data() {
    return {
      id: this.$route.params.id,
      Followings: [],
      isLoading: true,
    };
  },
  created() {
    this.fetchUserFollowings(this.id);
  },
  methods: {
    async fetchUserFollowings(userId) {
      try {
        const { data } = await userAPI.getUserFollowings({ userId });
        this.Followings = data;
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
        this.Followings = this.Followings.map((follow) => {
          if (follow.followingId === id) {
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
        this.Followings = this.Followings.map((follow) => {
          if (follow.followingId === userId) {
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
@import "./src/assets/scss/follower.scss";
</style>