<template>
  <div class="container">
    <div class="tweet-reply" v-for="tweet in tweets" :key="tweet.id">
      <div class="reply-avatar">
        <img
          class="avatar-img"
          :src="tweet.User.avatar"
          alt=""
          @click="redirectToProfile(tweet.User.id)"
        />
      </div>
      <div class="reply-user-info" @click="redirectToTweet(tweet.TweetId)">
        <div class="reply-user">
          <router-link class="reply-user-link" to="">
            <h3 class="reply-user-name">{{ tweet.User.name }}</h3>
            <h3 class="reply-user-account">{{ tweet.User.account }}．</h3>
          </router-link>
          {{ tweet.createdAt | fromNow }}
        </div>
        <div class="tweet-content">
          <h3 class="content">
            {{ tweet.description }}
          </h3>
        </div>
        <div class="reply-detail">
          <div class="reply">
            <div
              class="reply-icon-wrapper"
              @click.stop.prevent="showModal(tweet)"
            >
              <img class="reply-icon" src="reply.svg" alt="" />
            </div>
            <div class="reply-count">{{ tweet.RepliesCount }}</div>
          </div>
          <div class="like">
            <div class="heart-icon-wrapper">
              <img
                class="heart-icon"
                src="heart.svg"
                alt=""
                v-if="!tweet.isLike"
              />
              <img class="heart-icon" src="heartSmallRed.svg" alt="" v-else />
            </div>
            <div class="like-count">{{ tweet.LikesCount }}</div>
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
            <img class="avatar-img" :src="nowModal.User.avatar" alt="" />
            <div class="line"></div>
          </div>
          <div class="replied-content">
            <div class="reply-user-info">
              <div class="reply-user">
                <h3 class="reply-user-name">{{ nowModal.User.name }}</h3>
                <h3 class="reply-user-account">
                  {{ nowModal.User.account }}．
                </h3>
                2 小時
              </div>
              <div class="tweet-content">
                <h3 class="content">
                  {{ nowModal.description }}
                </h3>
              </div>
            </div>
            <div class="replied-author">
              <h3 class="reply-text">回覆給&nbsp;</h3>
              <h3 class="replid-author-name">{{ nowModal.User.account }}</h3>
            </div>
          </div>
        </div>
        <div class="modal-content">
          <div class="avatar">
            <img class="avatar-img" :src="currentUser.avatar" alt="" />
          </div>
          <textarea
            class="twitter-text"
            placeholder="推你的回覆"
            maxlength="200"
            v-model="comment"
          ></textarea>
        </div>
        <button class="main-btn post-btn" @click.stop.prevent="replyTweet">
          回覆
        </button>
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
import userAPI from "./../apis/user";
import tweetAPI from "./../apis/tweet";
import { Fire } from "./../utils/helper";
import { mapState } from "vuex";

export default {
  name: "UserTweets",
  data() {
    return {
      tweets: [],
      isShowModal: false,
      nowPage: "main",
      nowPageId: -1,
      nowModal: {
        id: -1,
        createdAt: "",
        description: "",
        LikesCount: -1,
        RepliesCount: -1,
        isLike: "false",
        User: {
          id: -1,
          name: "",
          account: "",
          avatar: "",
        },
      },
      comment: "",
    };
  },
  methods: {
    showModal(tweet) {
      this.nowModal = tweet;
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    async fetchData() {
      try {
        if (this.nowPage === "user-other-like") {
          const userId = this.nowPageId;
          const { data } = await userAPI.getSingleUserLikeTweets({ userId });
          this.tweets = data;
        } else if (this.nowPage == "user-self-like") {
          const userId = this.currentUser.id;
          const { data } = await userAPI.getSingleUserLikeTweets({ userId });
          this.tweets = data;
        }
      } catch (error) {
        console.log(error);
        Fire.fire({
          icon: "warning",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    async replyTweet() {
      try {
        const tweet_id = this.nowModal.TweetId;
        const comment = this.comment;
        const { data } = await tweetAPI.replySingleTweet({ tweet_id, comment });

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        console.log(data.status);
        this.comment = "";
        this.isShowModal = false;
      } catch (error) {
        console.log(error);
        Fire.fire({
          icon: "warning",
          title: "無法回覆推文，請稍後再試",
        });
      }
    },
    redirectToProfile(id) {
      if (id === this.currentUser.id) {
        this.$router.push("/user/self");
      } else {
        this.$router.push({ path: `/user/other/${id}` });
      }
    },
    redirectToTweet(id) {
      console.log(id);
      this.$router.push({ path: `/reply_list/${id}` });
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    nowModal() {
      this.$forceUpdate();
    },
  },
  created() {
    this.nowPage = this.$route.name;
    if (this.$route.params.id) {
      this.nowPageId = this.$route.params.id;
    }
    this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/userTweets.scss";
</style>