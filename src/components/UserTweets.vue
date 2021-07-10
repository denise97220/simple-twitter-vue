<template>
  <div class="container">
    <div class="tweet-reply" v-for="tweet in tweets" :key="tweet.id">
      <div class="reply-avatar">
        <router-link to="">
          <img class="avatar-img" :src="tweet.User.avatar" alt="" />
        </router-link>
      </div>
      <div class="reply-user-info">
        <div class="reply-user">
          <router-link class="reply-user-link" to="">
            <h3 class="reply-user-name">{{ tweet.User.name }}</h3>
            <h3 class="reply-user-account">{{ tweet.User.account }}．</h3>
          </router-link>
          2小時
        </div>
        <div class="tweet-content">
          <h3 class="content">
           {{ tweet.description }}
          </h3>
        </div>
        <div class="reply-detail">
          <div class="reply">
            <div class="reply-icon-wrapper" @click.stop.prevent="showModal">
              <img class="reply-icon" src="reply.svg" alt="" />
            </div>
            <div class="reply-count">12</div>
          </div>
          <div class="like">
            <div class="heart-icon-wrapper">
              <img class="heart-icon" src="heart.svg" alt="" />
            </div>
            <div class="like-count">12</div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div class="reply-modal" v-show="isShowModal">
      <div class="modal-container">
        <div class="modal-header">
          <div class="close-btn" @click.stop.prevent="closeModal">
            <img src="cross.svg" alt="" />
          </div>
        </div>
        <div class="replied-tweet">
          <div class="reply-avatar">
            <img
              class="avatar-img"
              :src="currentUser.avatar"
              alt=""
            />
            <div class="line"></div>
          </div>
          <div class="replied-content">
            <div class="reply-user-info">
              <div class="reply-user">
                <h3 class="reply-user-name">sss</h3>
                <h3 class="reply-user-account">@sss．</h3>
                  2 小時
              </div>
              <div class="tweet-content">
                <h3 class="content">
                  QQQQQQQQQQQQQQQQQQQQ
                </h3>
              </div>
            </div>
            <div class="replied-author">
              <h3 class="reply-text">回覆給&nbsp;</h3>
              <h3 class="replid-author-name">@aaa</h3>
            </div>
          </div>
        </div>
        <div class="modal-content">
          <div class="avatar">
            <img
              class="avatar-img"
              :src="currentUser.avatar"
              alt=""
            />
          </div>
          <textarea
            class="twitter-text"
            placeholder="推你的回覆"
            maxlength="200"
          ></textarea>
        </div>
        <button class="main-btn post-btn">回覆</button>
      </div>
    </div>

    <div
      class="cover"
      v-show="isShowModal"
      @click.stop.prevent="closeModal"
    ></div>
  </div>
</template>

<script>
// import userAPI from './../apis/user'
import tweetAPI from './../apis/tweet'
import { Fire } from './../utils/helper'
import { mapState } from 'vuex'

export default {
  name: "UserTweets",
  data() {
    return {
      tweets: [],
      isShowModal: false,
      nowPage: "main",
      nowPageId: -1
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    async fetchData() {
      try {
        const { data } = await tweetAPI.getTweets()
        this.tweets = data

        // if (this.nowPage === "user-main") {
        //   const { data } = await tweetAPI.getTweets()
        //   this.tweets = data
        //   return
        // } else if (this.nowPage === "user-other-tweet") {
        //   const userId = this.nowPageId
        //   const { data } = await userAPI.getSingleUserTweets({ userId })
        //   this.tweets = data
        //   return
        // } else if (this.nowPage === "user-other-like") {
        //   const userId = this.nowPageId
        //   const { data } = await userAPI.getSingleUserLikeTweets({ userId })
        //   this.tweets = data
        //   return
        // } else if (this.nowPage == "user-self-tweet") {
        //   const userId = this.currentUser.id
        //   const { data } = await userAPI.getSingleUserTweets({ userId })
        //   this.tweets = data
        //   return
        // } else if (this.nowPage == "user-self-like") {
        //   const userId = this.currentUser.id
        //   const { data } = await userAPI.getSingleUserLikeTweets({ userId })
        //   this.tweets = data
        //   return
        // }
      } catch(error) {
        console.log(error)
        Fire.fire({
          icon: "warning",
          title: "無法取得推文，請稍後再試"
        })
      }
    }
  },
  computed: {
    ...mapState(["currentUser"])
  },
  created() {
    this.nowPage = this.$route.name
    if (this.$route.params.id) {
      this.nowPageId = this.$route.params.id
    }
    this.fetchData()
  }
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
@import "./src/assets/scss/replyModal.scss";

.container {
  border-right: solid 1px #e6ecf0;
  border-left: solid 1px #e6ecf0;
}

.cover {
  top: -100%;
  left: -100%;
}

.router-link-active {
  color: #1c1c1c;
}

.reply-icon-wrapper:hover,
.heart-icon-wrapper:hover {
  background-color: $replyIconHover;
  cursor: pointer;
}

.heart-icon-wrapper:hover {
  background-color: $heartIconHover;
}

.reply-icon-wrapper,
.heart-icon-wrapper {
  width: 30px;
  height: 30px;
  position: relative;
  border-radius: 50%;
  transition: background-color 0.3s ease-in;
  .reply-icon,
  .heart-icon {
    position: absolute;
    left: 5px;
    top: 5px;
  }
}
</style>