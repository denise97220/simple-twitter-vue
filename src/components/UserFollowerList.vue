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
        <div class="user-info">
          <div class="name">{{ follower.name }}</div>
          <div class="user-account">{{ follower.account }}</div>
          <div class="tweet-content">
            {{ follower.introduction }}
          </div>
        </div>

        <div class="function-btn">
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
@import "./src/assets/scss/follower.scss";

</style>