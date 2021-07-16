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
              maxlength="200"
              placeholder="有什麼新鮮事?"
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
import { Toast } from "./../utils/helper";
import tweetAPI from "./../apis/tweet";
import EmojiPicker from 'vue-emoji-picker'

export default {
  name: "CreateComment",
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  components: {
    EmojiPicker
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
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      },
    },
  },
  methods: {
    fetchUser() {
      this.User = this.currentUser;
    },
    async createTweet() {
      if (!this.description.trim()) {
        Toast.fire({
          icon: "warning",
          title: "尚未輸入內容",
        });
        return 
      } else if (this.description.length > 140) {
        Toast.fire({
          icon: "warning",
          title: "內容超過字數限制！",
        });
        return 
      }

      try {
        this.isProcessing = true;
        if (!this.description.length || !this.description.trim()) {
          Fire.fire({
            icon: "info",
            title: "請輸入推文...",
          });
          this.isProcessing = false;
          return;
        }
        const { data } = await tweetAPI.createTweet({
          description: this.description,
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.description = "";
        this.isProcessing = false;
        this.$emit("updateTweets");
      } catch {
        this.isProcessing = false;
        Fire.fire({
          icon: "warning",
          title: "無法新增推文，請稍後再試",
        });
      }
    },
    append(emoji) {
      this.description += emoji
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
  width: 100%;
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

.wrapper {
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
  left: 50%; 
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