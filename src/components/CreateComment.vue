<template>
  <div class="container">
    <div class="wrapper">
      <div class="user-header"><span>首頁</span></div>
      <!-- CreateComment   -->
      <div class="create-tweet">
        <div class="user-avatar">
          <img :src="currentUser.avatar" alt="avatar" />
        </div>
        <div class="created">
          <div class="user-text">
            <textarea
              v-model="description"
              name=""
              id=""
              cols="30"
              rows="10"
              maxlength="140"
              placeholder="有什麼新鮮事?"
            ></textarea>
          </div>
          <div class="btn-place">
            <router-link to="#">
              <button
                @click.stop.prevent="createTweet"
                :class="{ 'disabled-btn': isProcessing }"
                :disabled="isProcessing"
                class="create-btn"
              >
                推文
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Fire } from "./../utils/helper";
import tweetAPI from "./../apis/tweet";

export default {
  name: "CreateComment",
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      description: "",
      isProcessing: false,
      User: {},
    };
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.User = this.currentUser;
    },
    async createTweet() {
      try {
        this.isProcessing = true;
        if (!this.description.length) {
          Fire.fire({
            icon: "info",
            title: "請輸入推文...",
          });
          this.isProcessing = false;
          return;
        }
        const response = await tweetAPI.createTweet({
          description: this.description,
        });
        console.log(response);
        this.description = "";
        this.isProcessing = false;
        this.$emit("updateTweets")
      } catch {
        this.isProcessing = false;
        Fire.fire({
          icon: "warning",
          title: "無法新增推文，請稍後再試",
        });
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
@mixin border($length: 20px) {
  width: $length;
  height: $length;
  border: 1px solid #c4c4c4;
}
$border-color: #e6ecf0;
.wrapper {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr;
  width: 600px;
}
.user-header {
  display: flex;
  height: 55px;
  border: 1px solid $border-color;
  font-size: 18px;
  font-weight: 700;
  span {
    padding: 1rem;
  }
}
/* Create */
.create-tweet {
  display: flex;
  border: 1px solid $border-color;
  border-bottom: 10px solid $border-color;
  padding: 0.5rem;
  .user-avatar > img {
    @include border(50px);
    border-radius: 100px;
    object-fit: cover;
  }
  .created {
    position: relative;
    width: 100%;
    padding: 0.5rem;
    .user-text > textarea {
      outline: none;
      border: none;
      background-color: transparent;
      resize: none;
      width: 100%;
      max-height: 100px;
      font-size: 18px;
    }
    .btn-place {
      position: absolute;
      right: 0;
      bottom: 0;
    }
    .create-btn {
      display: flex;
      width: 64px;
      height: 40px;
      border: none;
      border-radius: 100px;
      align-items: center;
      justify-content: center;
      background: $mainColor;
      font-size: 18px;
      font-weight: 500;
      color: #ffffff;
      &:hover {
        cursor: pointer;
        background: $mainColorHover;
      }
    }
    .disabled-btn {
      background: $mainColorDisabled;
      &:hover {
        cursor: wait;
      }
    }
  }
}
</style>