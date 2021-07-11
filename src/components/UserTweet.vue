<template>
  <div class="container">
    <div
      class="cover"
      v-show="isShowModal"
      @click.stop.prevent="closeModal"
    ></div>
    <header>
      <div class="goback-btn" @click.stop.prevent="goback">
        <svg
          width="17"
          height="14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 6H3.414l4.293-4.293A1 1 0 006.293.293l-6 6a1 1 0 000 1.414l6 6a.996.996 0 001.414 0 1 1 0 000-1.414L3.414 8H16a1 1 0 100-2z"
            fill="#000"
          />
        </svg>
      </div>
      <div class="header-content">推文</div>
    </header>
    <!-- tweet -->
    <div class="tweet">
      <div class="author-info">
        <router-link class="author-info-link" to="">
          <div class="avatar">
            <img class="avatar-img" :src="tweet.User.avatar" alt="" />
          </div>
          <div class="name-info">
            <div class="name">{{ tweet.User.name }}</div>
            <div class="account">{{ tweet.User.account }}</div>
          </div>
        </router-link>
      </div>
      <div class="tweet-content">{{ tweet.description }}</div>
      <div class="time">{{ tweet.createdAt | fromNow }}</div>
      <div class="reply-info">
        {{ tweet.Replies.length }} 回覆&nbsp;&nbsp;{{ tweet.LikesCount }}
        喜歡次數
      </div>
    </div>

    <!-- function btn -->
    <div class="function-btn">
      <div class="reply-btn" @click.stop.prevent="showModal">
        <img class="reply-icon" src="replyBig.svg" alt="" />
      </div>
      <div class="like-btn" v-if="!tweet.isLike" @click.stop.prevent="like">
        <img class="heart-icon" src="heartBig.svg" alt="" />
      </div>
      <div class="like-btn" v-if="tweet.isLike" @click.stop.prevent="unlike">
        <img class="heart-icon" src="heartRed.svg" alt="" />
      </div>
    </div>

    <!-- tweet reply -->
    <div class="tweet-reply" v-for="reply in tweet.Replies" :key="reply.id">
      <div class="reply-avatar">
        <router-link to="">
          <img class="avatar-img" :src="reply.User.avatar" alt="" />
        </router-link>
      </div>
      <div class="reply-info">
        <div class="reply-user">
          <router-link class="reply-user-link" to="">
            <h3 class="reply-user-name">{{ reply.User.name }}</h3>
            <h3 class="reply-user-account">{{ reply.User.account }}．</h3>
          </router-link>
          {{ reply.createdAt | fromNow }}
        </div>
        <div class="tweet-author">
          <h3 class="reply-text">回覆</h3>
          <router-link to="">
            <h3 class="author-name">{{ tweet.User.name }}</h3>
          </router-link>
        </div>
        <div class="reply-content">{{ reply.comment }}</div>
      </div>
    </div>

    <!-- reply modal -->
    <div class="reply-modal" v-show="isShowModal">
      <div class="modal-container">
        <div class="modal-header">
          <div class="close-btn" @click.stop.prevent="closeModal">
            <img src="cross.svg" alt="" />
          </div>
        </div>
        <div class="replied-tweet">
          <div class="reply-avatar">
            <img class="avatar-img" :src="tweet.User.avatar" alt="" />
            <div class="line"></div>
          </div>
          <div class="replied-content">
            <div class="reply-user-info">
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
            </div>
            <div class="replied-author">
              <h3 class="reply-text">回覆給&nbsp;</h3>
              <h3 class="replid-author-name">{{ tweet.User.account }}</h3>
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
  </div>
</template>

 <script>
import tweetAPI from "./../apis/tweet";
import { Fire } from "./../utils/helper";
import { mapState } from "vuex";
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "UserTweet",
  mixins: [fromNowFilter],
  data() {
    return {
      tweet: {
        id: -1,
        description: "",
        createdAt: "",
        LikesCount: -1,
        isLike: "",
        User: {
          id: -1,
          name: "",
          avatar: "",
          account: "",
        },
        Replies: [
          {
            id: -1,
            comment: "",
            createdAt: "",
            User: {
              id: -1,
              name: "",
              cover: "",
              account: "",
            },
          },
        ],
      },
      isShowModal: false,
      comment: "",
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    async fetchTweet(tweet_id) {
      try {
        const { data } = await tweetAPI.getSingleTweet({ tweet_id });
        const {
          id,
          description,
          createdAt,
          LikesCount,
          isLike,
          User,
          Replies,
        } = data;
        this.tweet = {
          ...this.tweet,
          id,
          description,
          createdAt,
          LikesCount,
          isLike,
          User,
          Replies,
        };
      } catch (error) {
        console.log(error);
        Fire.fire({
          icon: "warning",
          title: "無法取得貼文，請稍後再試",
        });
      }
    },
    async replyTweet() {
      try {
        const tweet_id = this.$route.params.id;
        const comment = this.comment;
        const { data } = await tweetAPI.replySingleTweet({ tweet_id, comment });

        this.comment = "";
        this.isShowModal = false;

        this.fetchTweet(this.tweet.id);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log(error);
        Fire.fire({
          icon: "warning",
          title: "無法回覆，請稍後再試",
        });
      }
    },
    async like() {
      try {
        const TweetId = this.tweet.id;
        const { data } = await tweetAPI.likeSingleTweet({ TweetId });
        this.tweet.isLike = true;

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
    async unlike() {
      try {
        const TweetId = this.tweet.id;
        const { data } = await tweetAPI.unlikeSingleTweet({ TweetId });
        this.tweet.isLike = false;

        console.log(data.status);
        if (data.status !== "success") {
          throw new Error(data.message);
        }
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
  created() {
    const { id } = this.$route.params;
    this.fetchTweet(id);
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
@import "./src/assets/scss/reply.scss";
@import "./src/assets/scss/replyModal.scss";

.cover {
  top: -100%;
  left: -100%;
}

.router-link-active {
  color: #1c1c1c;
}

.container {
  border: 1px solid #e6ecf0;
}

header {
  display: flex;
  height: 15px;
  padding: 20px;
  border-bottom: 1px solid #e6ecf0;
  .header-content {
    margin-left: 43px;
  }
}

.tweet {
  height: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  .author-info-link {
    display: flex;
    .name-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 15px;
      line-height: 22px;
      margin-left: 10px;
    }
    .avatar-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .tweet-content {
    font-size: 23px;
    line-height: 34px;
    margin-top: 18px;
  }
  .time {
    margin-top: 15px;
  }
  .reply-info {
    display: flex;
    width: 99%;
    height: 68px;
    border-top: solid 1px #e6ecf0;
    border-bottom: solid 1px #e6ecf0;
    margin-top: 15px;
    line-height: 68px;
    font-size: 19px;
  }
}

.function-btn {
  display: flex;
  align-items: center;
  padding: 15px;
  padding-top: 8px;
  .like-btn {
    margin-left: 155px;
  }
  .reply-btn:hover,
  .like-btn:hover {
    background-color: $replyIconHover;
    cursor: pointer;
  }
  .like-btn:hover {
    background-color: $heartIconHover;
  }
  .reply-btn,
  .like-btn {
    width: 40px;
    height: 40px;
    position: relative;
    border-radius: 50%;
    transition: background-color 0.2s linear;
    .reply-icon,
    .heart-icon {
      position: absolute;
      left: 7px;
      top: 7px;
    }
  }
}
</style>