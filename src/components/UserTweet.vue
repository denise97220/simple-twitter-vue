<template>
  <div class="rwd-container">
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
      <Spinner v-if="isLoading" />
      <div class="tweet" v-else>
        <div class="author-info">
          <div 
            class="avatar author-info-link" 
            @click="redirectToProfile(tweet.User.id)"
          >
            <img class="avatar-img" :src="tweet.User.avatar" alt="" />
          </div>
          <div class="name-info">
            <div class="name">{{ tweet.User.name }}</div>
            <div class="account">{{ tweet.User.account }}</div>
          </div>
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
          <svg class="reply-icon" width="26" height="26" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path class="reply-icon" d="M7.77881 0.40127L5.18631 0.39502H5.18506C2.45131 0.39502 0.310059 2.53689 0.310059 5.27127C0.310059 7.83252 2.30131 9.77502 4.97568 9.87752V12.27C4.97568 12.3375 5.00318 12.4488 5.05068 12.5219C5.13943 12.6625 5.29068 12.7388 5.44568 12.7388C5.53193 12.7388 5.61881 12.715 5.69693 12.665C5.86193 12.56 9.74256 10.0775 10.7519 9.22377C11.9407 8.21752 12.6519 6.74252 12.6538 5.27877V5.26814C12.6501 2.53877 10.5101 0.401269 7.77881 0.400644V0.40127ZM10.1457 8.50877C9.43693 9.10877 7.10693 10.6369 5.91318 11.4106V9.41877C5.91318 9.16002 5.70381 8.95002 5.44443 8.95002H5.19693C2.90943 8.95002 1.24818 7.40252 1.24818 5.27127C1.24818 3.06252 2.97818 1.33252 5.18568 1.33252L7.77756 1.33877H7.77881C9.98631 1.33877 11.7163 3.06752 11.7176 5.27377C11.7157 6.46752 11.1288 7.67627 10.1463 8.50877H10.1457Z" fill="#657786"/>
          </svg>
        </div>
        <div class="like-btn" v-if="!tweet.isLike" @click.stop.prevent="like">
          <svg class="unlike-icon" width="26" height="26" viewBox="0 0 13 13" fill="transparent" xmlns="http://www.w3.org/2000/svg">
          <path class="unlike-icon" d="M6.5 12.5239H6.49125C4.87687 12.4939 0.21875 8.28514 0.21875 4.29889C0.21875 2.38389 1.79687 0.702637 3.59562 0.702637C5.02687 0.702637 5.98937 1.69014 6.49937 2.40889C7.00812 1.69139 7.97062 0.702637 9.4025 0.702637C11.2025 0.702637 12.78 2.38389 12.78 4.29951C12.78 8.28451 8.12125 12.4933 6.50687 12.5226H6.5V12.5239ZM3.59625 1.64076C2.29625 1.64076 1.15687 2.88326 1.15687 4.30014C1.15687 7.88764 5.55312 11.5476 6.50062 11.5864C7.44937 11.5476 11.8444 7.88826 11.8444 4.30014C11.8444 2.88326 10.705 1.64076 9.405 1.64076C7.825 1.64076 6.9425 3.47576 6.935 3.49389C6.79125 3.84514 6.2125 3.84514 6.06812 3.49389C6.05937 3.47514 5.1775 1.64076 3.59687 1.64076H3.59625Z" fill="#657786"/>
          </svg>
        </div>
        <div class="like-btn" v-if="tweet.isLike" @click.stop.prevent="unlike">
          <img class="heart-icon" src="heartRed.svg" alt="" />
        </div>
      </div>

      <!-- tweet reply -->
      <div class="tweet-reply" v-for="reply in tweet.Replies" :key="reply.id">
        <div 
          class="reply-avatar" 
          @click="redirectToProfile(reply.User.id)"
        >
          <img class="avatar-img" :src="reply.User.avatar" alt="" />
        </div>
        <div class="reply-info">
          <div class="reply-user">
            <h3 
              class="reply-user-name" 
              @click="redirectToProfile(reply.User.id)"
            >{{ reply.User.name }}</h3>
            <h3 
              class="reply-user-account" 
              @click="redirectToProfile(reply.User.id)"
            >{{ reply.User.account }}．</h3>
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
      <div class="reply-modal" v-if="isShowModal">
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
  </div>
</template>

 <script>
import Spinner from "./../components/Spinner.vue";
import tweetAPI from "./../apis/tweet";
import { Fire } from "./../utils/helper";
import { mapState } from "vuex";
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "UserTweet",
  components: {
    Spinner,
  },
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
      isLoading: true,
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
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        Fire.fire({
          icon: "warning",
          title: "無法取得貼文，請稍後再試",
        });
        this.isLoading = false;
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
        this.tweet.LikesCount += 1

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
        this.tweet.LikesCount -= 1

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
    redirectToProfile(id) {
      if (id === this.currentUser.id) {
        this.$router.push("/user/self")
      } else {
        this.$router.push({ path: `/user/other/${id}/tweet` })
        this.$emit("updateUser", id)
      }
    },
    goback() {
      this.$router.go(-1)
    }
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
  width: 100%;
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

.goback-btn {
  cursor: pointer;
}

.tweet {
  height: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  .author-info {
    display: flex;
    align-items: center;
  }
  .author-info-link {
    display: flex;
    cursor: pointer;
  }
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
    cursor: pointer;
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

.reply-avatar, .reply-user-name, .reply-user-account {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}

.function-btn {
  display: flex;
  align-items: center;
  padding: 15px;
  padding-top: 5px;
  .like-btn {
    margin-left: 155px;
  }
  .reply-btn:hover {
    background-color: $replyIconHover;
    .reply-icon {
      fill: $mainColor;
    }
  }
  
  .like-btn:hover {
    background-color: $heartIconHover;
    cursor: pointer;
    .unlike-icon {
      fill: #E0245E;
    }
  }
  .reply-btn,
  .like-btn {
    width: 45px;
    height: 45px;
    position: relative;
    border-radius: 50%;
    transition: background-color 0.1s linear;
    .reply-icon,
    .heart-icon,
    .unlike-icon {
      position: absolute;
      left: 10px;
      top: 10px;
    }
  }
}
</style>