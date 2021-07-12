<template>
  <div class="container">
    <Spinner v-if="isLoading" />
    <div
      class="tweet-reply"
      v-for="tweet in tweets"
      :key="tweet.TweetId"
      v-else
    >
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
          <h3 class="reply-user-name">{{ tweet.User.name }}</h3>
          <h3 class="reply-user-account">{{ tweet.User.account }}．</h3>
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
              <svg class="reply-icon" width="21" height="21" viewBox="0 0 13 13" fill="transparent" xmlns="http://www.w3.org/2000/svg">
              <path class="reply-icon" d="M7.77881 0.40127L5.18631 0.39502H5.18506C2.45131 0.39502 0.310059 2.53689 0.310059 5.27127C0.310059 7.83252 2.30131 9.77502 4.97568 9.87752V12.27C4.97568 12.3375 5.00318 12.4488 5.05068 12.5219C5.13943 12.6625 5.29068 12.7388 5.44568 12.7388C5.53193 12.7388 5.61881 12.715 5.69693 12.665C5.86193 12.56 9.74256 10.0775 10.7519 9.22377C11.9407 8.21752 12.6519 6.74252 12.6538 5.27877V5.26814C12.6501 2.53877 10.5101 0.401269 7.77881 0.400644V0.40127ZM10.1457 8.50877C9.43693 9.10877 7.10693 10.6369 5.91318 11.4106V9.41877C5.91318 9.16002 5.70381 8.95002 5.44443 8.95002H5.19693C2.90943 8.95002 1.24818 7.40252 1.24818 5.27127C1.24818 3.06252 2.97818 1.33252 5.18568 1.33252L7.77756 1.33877H7.77881C9.98631 1.33877 11.7163 3.06752 11.7176 5.27377C11.7157 6.46752 11.1288 7.67627 10.1463 8.50877H10.1457Z" fill="#657786"/>
              </svg>
            </div>
            <div class="reply-count">{{ tweet.RepliesCount }}</div>
          </div>
          <div class="like">
            <div class="heart-icon-wrapper">
              <svg class="heart-icon"
                v-if="!tweet.isLike"
                @click.stop.prevent="like(tweet)" 
                width="20" height="20" viewBox="0 0 13 13" fill="transparent" xmlns="http://www.w3.org/2000/svg">
              <path class="heart-icon" d="M6.5 12.5239H6.49125C4.87687 12.4939 0.21875 8.28514 0.21875 4.29889C0.21875 2.38389 1.79687 0.702637 3.59562 0.702637C5.02687 0.702637 5.98937 1.69014 6.49937 2.40889C7.00812 1.69139 7.97062 0.702637 9.4025 0.702637C11.2025 0.702637 12.78 2.38389 12.78 4.29951C12.78 8.28451 8.12125 12.4933 6.50687 12.5226H6.5V12.5239ZM3.59625 1.64076C2.29625 1.64076 1.15687 2.88326 1.15687 4.30014C1.15687 7.88764 5.55312 11.5476 6.50062 11.5864C7.44937 11.5476 11.8444 7.88826 11.8444 4.30014C11.8444 2.88326 10.705 1.64076 9.405 1.64076C7.825 1.64076 6.9425 3.47576 6.935 3.49389C6.79125 3.84514 6.2125 3.84514 6.06812 3.49389C6.05937 3.47514 5.1775 1.64076 3.59687 1.64076H3.59625Z" fill="#657786"/>
              </svg>
              <img
                class="heart-icon"
                src="heartSmallRed.svg"
                alt=""
                v-else
                @click.stop.prevent="unlike(tweet)"
              />
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
                {{ nowModal.createdAt | fromNow }}
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
import Spinner from "./../components/Spinner.vue";
import userAPI from "./../apis/user";
import tweetAPI from "./../apis/tweet";
import { Fire } from "./../utils/helper";
import { mapState } from "vuex";
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "UserTweets",
  mixins: [fromNowFilter],
  components: {
    Spinner,
  },
  props: {
    Switch: {
      type: Boolean,
      default: false,
    },
    NavbarSwitch: {
      type: Boolean,
      default: false,
    },
    updateId: {
      type: Number,
      default: -1
    }
  },
  data() {
    return {
      tweets: [],
      isShowModal: false,
      nowPage: "main",
      nowPageId: -1,
      nowModal: {
        TweetId: -1,
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
      isLoading: true,
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
        if (this.nowPage === "user-main") {
          const { data } = await tweetAPI.getTweets();
          this.tweets = data;
        } else if (this.nowPage === "user-other-tweet") {
          const userId = this.nowPageId;
          const { data } = await userAPI.getSingleUserTweets({ userId });
          this.tweets = data;
        } else if (this.nowPage == "user-self-tweet") {
          const userId = this.currentUser.id;
          const { data } = await userAPI.getSingleUserTweets({ userId });
          this.tweets = data;
        }
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        Fire.fire({
          icon: "warning",
          title: "無法取得推文，請稍後再試",
        });
        this.isLoading = false;
      }
    },
    async fetchOtherUser(userId) {
      try {
        const { data } = await userAPI.getSingleUserTweets({ userId });
        this.tweets = data;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        Fire.fire({
          icon: "warning",
          title: "無法取得推文，請稍後再試",
        });
        this.isLoading = false;
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
        this.fetchData()
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
    async like(tweet) {
      try {
        const TweetId = tweet.TweetId;
        const { data } = await tweetAPI.likeSingleTweet({ TweetId });
        tweet.isLike = true;
        tweet.LikesCount += 1
        if (data.status !== "success") {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log(error);
        Fire.fire({
          icon: "warning",
          title: "無法喜歡推文，請稍後再試",
        });
      }
    },
    async unlike(tweet) {
      try {
        const TweetId = tweet.TweetId;
        const { data } = await tweetAPI.unlikeSingleTweet({ TweetId });
        tweet.isLike = false;

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        tweet.LikesCount -= 1
      } catch (error) {
        console.log(error);
        Fire.fire({
          icon: "warning",
          title: "無法取消喜歡，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    nowModal() {
      this.$forceUpdate();
    },
    Switch: {
      handler() {
        this.fetchData();
      },
      deep: true,
    },
    NavbarSwitch: {
      handler() {
        this.fetchData();
      },
      deep: true,
    },
    updateId() {
      this.fetchOtherUser(this.updateId)
    }
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