<template>
  <div class="navbar-container">
    <div
      class="cover"
      v-show="isShowModal"
      @click.stop.prevent="closeModal"
    ></div>
    <div class="navbar">
      <div class="twitter-logo">
        <router-link to="/main">
          <svg
            width="50"
            height="50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M30.7 23.47s-7.467 12.108-13.59 12.108c-10.707 0-.728-23.065 7.082-23.065 5.449 0 6.508 10.958 6.508 10.958z"
              fill="#F60"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M39.572 38.697a19.997 19.997 0 01-31.81-3.557c1.77 2.408 4.772 4.013 9.041 4.013 10.517 0 16.487-8.173 16.487-8.173s.516 6.46 6.27 7.717h.012zM42.722 15.745a19.98 19.98 0 01-.481 19.395 5.947 5.947 0 01-2.803-3.531l-2.282-6.837 5.566-9.027zM25.003 5.017a19.96 19.96 0 0113.537 5.28l-3.788 6.112c-1.37-3.566-4.156-7.136-9.575-7.136-11.099 0-19.325 12.116-19.325 19.712-.002.982.123 1.96.373 2.91a20 20 0 019.53-24.628A20.008 20.008 0 0125.002 5v.017z"
              fill="#F60"
            />
          </svg>
        </router-link>
      </div>
      <div class="nav-list">
        <router-link to="/main">
          <div class="logo-wrapper home">
            <i class="logo home-logo">
              <svg
                width="24"
                height="22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path :class="{ 'nav-list-logo-choosed': nowPage === 'user-main' }" class="home-logo-path"
                  d="M22.58 6.35L12.475.897a1 1 0 00-.95 0L1.425 6.35A1.002 1.002 0 001.9 8.23c.16 0 .324-.037.475-.12l.734-.395 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398a1 1 0 00.95-1.759l.002-.003zM12 14.435a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5z"
                  fill="#1C1C1C"
                />
              </svg>
            </i>
            <h2 
              :class="{ 'list-title-choosed': nowPage === 'user-main', 'list-title': nowPage !== 'user-main' }"
              class="home-title"
            >首頁</h2>
          </div>
        </router-link>
        <router-link to="/user/self">
          <div class="logo-wrapper selfinfo">
            <i class="logo selfinfo-logo">
              <svg
                width="18"
                height="21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path :class="{ 'nav-list-logo-choosed': nowPage === 'user-self-tweet' || nowPage === 'user-self-reply' || nowPage === 'user-self-like'}" class="selfinfo-logo-path"
                  d="M9 10.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392C13.266 2.343 11.529.656 9 .656S4.734 2.343 4.354 5.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM5.84 5.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99-3.998 0-7.403 2.464-8.28 5.99-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94h.001zm-1.576 1.016c-.126.16-.316.246-.552.246H2.848c-.235 0-.426-.085-.552-.246a.753.753 0 01-.12-.654c.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"
                  fill="#000"
                />
              </svg>
            </i>
            <h2 
              :class="{ 'list-title-choosed': nowPage === 'user-self-tweet' || nowPage === 'user-self-reply' || nowPage === 'user-self-like', 'list-title': nowPage !== 'user-self-tweet' && nowPage !== 'user-self-reply' && nowPage !== 'user-self-like' }" 
              class="selfinfo-title"
            >個人資料</h2>
          </div>
        </router-link>
        <router-link to="/setting">
          <div class="logo-wrapper setting">
            <i class="logo setting-logo">
              <svg
                width="20.75"
                height="20.75"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20.75 20.75"
              >
                <path
                  :class="{ 'nav-list-logo-choosed': nowPage === 'setting'}"
                  class="setting-logo-path"
                  d="M10.74 20.75H10a2.27 2.27 0 01-2.27-2.06v-.15a.77.77 0 00-.47-.64.75.75 0 00-.8.11l-.12.1A2.34 2.34 0 013.29 18l-.51-.51a2.27 2.27 0 01-.14-3.06l.1-.12a.76.76 0 00.12-.79.77.77 0 00-.64-.52h-.15A2.26 2.26 0 010 10.74V10a2.26 2.26 0 012.06-2.25h.16a.77.77 0 00.64-.48.76.76 0 00-.12-.79l-.09-.12a2.25 2.25 0 01.14-3.06l.51-.51a2.34 2.34 0 013.06-.14l.11.1a.78.78 0 00.79.12.76.76 0 00.48-.64v-.16A2.27 2.27 0 0110 0h.72A2.26 2.26 0 0113 2.06v.16a.77.77 0 00.48.64.75.75 0 00.79-.12l.12-.1a2.34 2.34 0 013.06.14l.51.51a2.25 2.25 0 01.14 3.06l-.1.12a.76.76 0 00-.12.79.78.78 0 00.64.48h.16A2.26 2.26 0 0120.75 10v.73A2.26 2.26 0 0118.69 13h-.16a.79.79 0 00-.64.47.8.8 0 00.12.8l.1.12a2.25 2.25 0 01-.11 3.07l-.51.51a2.34 2.34 0 01-3.06.14l-.11-.1a.78.78 0 00-.79-.12.75.75 0 00-.48.64v.15a2.26 2.26 0 01-2.26 2.07zM7 16.33a2.32 2.32 0 01.87.17 2.27 2.27 0 011.4 1.9v.15a.77.77 0 00.77.7h.72a.77.77 0 00.77-.7v-.15a2.27 2.27 0 011.39-1.89 2.3 2.3 0 012.34.35l.11.09a.76.76 0 00.49.18.8.8 0 00.55-.22l.51-.51a.78.78 0 00.05-1l-.1-.12a2.27 2.27 0 01-.35-2.33 2.23 2.23 0 011.89-1.39h.15a.76.76 0 00.7-.77V10a.77.77 0 00-.7-.77h-.16a2.28 2.28 0 01-1.54-3.72l.1-.12a.77.77 0 00-.05-1l-.51-.51a.76.76 0 00-.55-.23.82.82 0 00-.49.18l-.12.1a2.32 2.32 0 01-2.32.36 2.27 2.27 0 01-1.4-1.9V2.2a.77.77 0 00-.77-.7H10a.77.77 0 00-.77.7v.15a2.28 2.28 0 01-3.71 1.54L5.4 3.8a.78.78 0 00-1 0l-.51.51a.76.76 0 00-.05 1l.1.12a2.28 2.28 0 01-1.58 3.8H2.2a.76.76 0 00-.7.77v.72a.77.77 0 00.7.77h.15a2.28 2.28 0 011.55 3.75l-.1.12a.76.76 0 00.05 1l.51.51a.78.78 0 001 0l.11-.09A2.27 2.27 0 017 16.33z"
                />
                <path
                  :class="{ 'nav-list-logo-choosed': nowPage === 'setting'}"
                  class="setting-logo-path"
                  d="M10.33 6.34a3.79 3.79 0 103.79 3.78 3.79 3.79 0 00-3.79-3.78zm0 6.07a2.29 2.29 0 112.29-2.29 2.29 2.29 0 01-2.29 2.29z"
                />
              </svg>
            </i>
            <h2 
              :class="{ 'list-title-choosed': nowPage === 'setting', 'list-title': nowPage !== 'setting' }"
              class="setting-title"
            >設定</h2>
          </div>
        </router-link>
      </div>
      <button class="main-btn twitter-btn" @click.stop.prevent="showModal">
        推文
      </button>
      <div @click.stop.prevent="logout" class="logout">
        <svg
          width="20"
          height="18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 13L5 9m0 0l4-4M5 9h14m-5 4v1a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h7a3 3 0 013 3v1"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="logout-text">登出</div>
      </div>
    </div>

    <!-- modal -->
    <div class="twitter-modal" v-show="isShowModal">
      <div class="modal-container">
        <div class="modal-header">
          <div class="close-btn" @click.stop.prevent="closeModal">
            <img src="cross.svg" alt="" />
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
  

          <div class="wrapper">
            <textarea 
              class="twitter-text"
              placeholder="有什麼新鮮事？"
              maxlength="200"
              v-model="tweetContent"
            ></textarea>

            <emoji-picker @emoji="append" :search="search">
              <div
                class="emoji-invoker"
                slot="emoji-invoker"
                slot-scope="{ events: { click: clickEvent } }"
                @click.stop="clickEvent"
              >
                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <div class="emoji-picker" slot="emoji-picker" slot-scope="{ emojis, insert, display }">
                <div class="emoji-picker-wrapper" :style="{ top: display.y + 'px', left: display.x + 'px' }">
                  <div class="emoji-picker__search">
                    <input type="text" v-model="search" v-focus>
                  </div>
                  <div>
                    <div v-for="(emojiGroup, category) in emojis" :key="category">
                      <h5>{{ category }}</h5>
                      <div class="emojis">
                        <span
                          v-for="(emoji, emojiName) in emojiGroup"
                          :key="emojiName"
                          @click="insert(emoji)"
                          :title="emojiName"
                        >{{ emoji }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </emoji-picker>
          </div>
        </div>
        <button 
          class="main-btn post-btn"
          @click.stop.prevent="createTweet"
          >
          推文
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import tweetAPI from "./../apis/tweet";
import { Fire } from "./../utils/helper";
import { Toast } from "./../utils/helper";
import { mapState } from "vuex"
import EmojiPicker from 'vue-emoji-picker'

export default {
  name: "Navbar",
  components: {
    EmojiPicker
  },
  data() {
    return {
      isShowModal: false,
      tweetContent: "",
      nowPage: "",
      search: ""
    };
  },
  methods: {
    append(emoji) {
      this.tweetContent += emoji
    },
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    async createTweet() {
      if (!this.tweetContent.trim()) {
        Toast.fire({
          icon: "warning",
          title: "尚未輸入內容",
        });
        return 
      } else if (this.tweetContent.length > 140) {
        Toast.fire({
          icon: "warning",
          title: "內容超過字數限制！",
        });
        return 
      }

      try {
        const description = this.tweetContent;
        const { data } = await tweetAPI.createTweet({ description });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.tweetContent = "";
        this.isShowModal = false;
        this.$emit("updateTweets");
      } catch (error) {
        console.log(error);
        Fire.fire({
          icon: "warning",
          title: "無法成功推文，請稍後再試",
        });
      }
    },
    logout() {
      this.$store.commit("revokeAuthentication");
      this.$router.push("/login");
    },
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
  },
  computed: {
    ...mapState(["currentUser"])
  },
  created() {
    this.nowPage = this.$route.name
  }
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.navbar-container {
  width: 100%;
  height: 100%;
}

.navbar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 60px;
  padding-top: 14px;
}

.list-title-choosed {
  color: $mainColor;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  padding-bottom: 2px;
}

.nav-list-logo-choosed {
  fill: $mainColor;
}

.nav-list {
  margin-top: 51px;
}

.logo-wrapper {
  width: 120%;
  height: 50px;
  padding-left: 15px;
  margin-bottom: 10px;
  border-radius: 30px;
  transition: background-color 0.2s linear;
}

.home,
.selfinfo,
.setting {
  display: flex;
  align-items: center;
  margin-left: 2px;

  .list-title {
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;
    color: #1c1c1c;
    padding-bottom: 2px;
  }
}

.home {
  margin-left: 0;
}


.logo-wrapper:hover{
  background-color: $logoHover;
  
  .home-logo-path, 
  .selfinfo-logo-path, 
  .setting-logo-path {
    fill: $mainColor;
  }
  .list-title {
    color: $mainColor;
  }
}

.logo,
.twitter-logo {
  width: 23px;
  height: 23px;
  margin-right: 20px;
}

.twitter-btn {
  width: 210px;
  height: 45px;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  margin-top: 27px;
}

.logout {
  position: fixed;
  bottom: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .logout-text {
    margin-left: 23px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;
  }
}

.twitter-modal {
  width: 600px;
  position: absolute;
  top: 54px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  background: #ffffff;
  border-radius: 14px;

  .close-btn {
    padding: 15px;
    cursor: pointer;
  }

  .modal-content {
    display: flex;
    border-top: solid 1px #e6ecf0;
    padding: 15px;
  }

  .avatar-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  textarea {
    resize: none;
    border: none;
    width: 100%;
    height: 200px;
    font-size: 18px;
    padding: 12px;
  }

  .post-btn {
    width: 64px;
    height: 40px;
    border-radius: 100px;
    position: absolute;
    right: 15px;
    bottom: 15px;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
  }
}

@media screen and (max-width: 900px) {
  .list-title, 
  .logout-text, 
  .home-title, 
  .selfinfo-title, 
  .setting-title {
    display: none;
  }
  .logo-wrapper {
    width: 80%;
    border-radius: 100%;
    padding-left: 0px;
  }
  .home {
    padding-right: 3px;
  }
  .setting {
    padding-right: 2px;
  }
  .logout {
    padding-left: 20px;
  }
  .twitter-btn {
    width: 64px;
    height: 40px;
  }
  .logo {
    margin-left: 16px;
  }
  .twitter-modal {
    width: 80%;
  }
}


.wrapper {
  width: 88%;
  position: relative;
  display: inline-block;
}

.regular-input {
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 20rem;
  height: 12rem;
  outline: none;
}

.emoji-invoker {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
}
.emoji-invoker:hover {
  transform: scale(1.1);
}
.emoji-invoker > svg {
  fill: #b1c6d0;
}

.emoji-picker {
  position: absolute;
  z-index: 1;
  top: 0px;
  left: 100%; 
  font-family: Montserrat;
  border: 1px solid #ccc;
  width: 15rem;
  height: 20rem;
  overflow: scroll;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 1px 1px 8px #c7dbe6;
}
.emoji-picker__search {
  display: flex;
}
.emoji-picker__search > input {
  flex: 1;
  border-radius: 10rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  outline: none;
}
.emoji-picker h5 {
  margin-bottom: 0;
  color: #b1b1b1;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: default;
}
.emoji-picker .emojis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.emoji-picker .emojis:after {
  content: "";
  flex: auto;
}
.emoji-picker .emojis span {
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
}
.emoji-picker .emojis span:hover {
  background: #ececec;
  cursor: pointer;
}



</style>
