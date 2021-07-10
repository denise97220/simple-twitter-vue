<template>
  <div class="container">
    <!-- Follow List -->
    <div class="follow-list">
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
            <div class="follow-btn">跟隨</div>
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

export default {
  name: "UserFollowerList",
  data() {
    return {
      id: this.$route.params.id,
      Followers: [],
    };
  },
  created() {
    this.fetchUserFollowers(this.id);
  },
  methods: {
    async fetchUserFollowers(userId) {
      try {
        const { data } = await userAPI.getUserFollowers({ userId });
        this.Followers = {
          ...data,
        };
      } catch (error) {
        console.error(error);
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