<template>
  <div class="container">
    <Spinner v-if="isLoading" />
    <div class="cover" v-show="isShowModal"></div>
    <div class="user-navbar">
      <div class="icon" @click.stop.prevent="$router.go(-1)">
        <svg
          width="17"
          height="14"
          viewBox="0 0 17 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 5.99988H3.41399L7.70699 1.70687C8.09699 1.31687 8.09699 0.683875 7.70699 0.292875C7.31699 -0.0981249 6.68399 -0.0971249 6.29299 0.292875L0.292988 6.29288C-0.0970117 6.68288 -0.0970117 7.31588 0.292988 7.70687L6.29299 13.7069C6.48799 13.9019 6.74299 13.9999 6.99999 13.9999C7.25699 13.9999 7.51199 13.9019 7.70699 13.7069C8.09699 13.3169 8.09699 12.6839 7.70699 12.2929L3.41399 7.99988H16C16.553 7.99988 17 7.55288 17 6.99988C17 6.44688 16.553 5.99988 16 5.99988Z"
            fill="black"
          />
        </svg>
      </div>
      <div class="user-navbar-info">
        <div class="user-name">{{ User.name }}</div>
        <div class="user-tweets-length">{{ tweetLength }} 推文</div>
      </div>
    </div>
    <div class="user-profile">
      <div class="cover-photo">
        <img :src="User.cover" alt="cover" />
      </div>
      <div class="user-avatar">
        <img :src="User.avatar" alt="avatar" />
      </div>
      <div class="edit-btn" v-if="nowPage === 'self'">
        <div @click.stop.prevent="showModal">編輯個人資料</div>
      </div>
      <div class="edit-btn" v-else>
        <!-- TODO: 追蹤判斷 -->
        <div
          class="follow-btn"
          v-if="currentUser.isFollowed"
          @click.stop.prevent="deleteFollowList(User.id)"
        >
          正在追蹤
        </div>
        <div
          class="unfollow-btn"
          v-else
          @click.stop.prevent="addFollowList(User.id)"
        >
          追蹤
        </div>
      </div>
      <div class="user-info">
        <div class="name">{{ User.name }}</div>
        <div class="user-account">
          <a href="#">{{ User.account }}</a>
        </div>
        <div class="user-description">
          {{ User.introduction }}
        </div>
        <div class="user-follow-info">
          <router-link
            :to="{
              name: `user-${nowPage}-follow-following`,
              params: { id: currentUser.id },
            }"
          >
            <div class="user-following">
              {{ User.Followings.length }} 個 <span>跟隨中 </span>
            </div>
          </router-link>
          <router-link
            :to="{
              name: `user-${nowPage}-follow-follower`,
              params: { id: currentUser.id },
            }"
          >
            <div class="user-follower">
              {{ User.Followers.length }}位<span>跟隨者</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- modal -->

    <div class="twitter-edit-modal" v-show="isShowModal">
      <form class="modal-container" @submit.stop.prevent="handleSubmit">
        <div class="modal-header">
          <div class="close-btn" @click.stop.prevent="closeModal()">Ｘ</div>
          <div class="title">編輯個人資料</div>
          <button
            class="save-btn main-btn"
            type="submit"
            :class="{ 'disabled-btn': isProcessing }"
            :disabled="isProcessing"
          >
            儲存
          </button>
        </div>
        <div class="modal-form">
          <div class="modal-cover-photo">
            <img :src="User.cover" alt="cover" />
            <div class="cover-photo-icon">
              <div class="icon-photo">
                <label for="cover">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083H6.438C7.633 3.17 9.722 2 12 2C14.277 2 16.367 3.17 17.562 5.083H19.708C20.972 5.083 22 6.11 22 7.375V19.708C22 20.972 20.972 22 19.708 22ZM4.292 6.583C3.855 6.583 3.5 6.938 3.5 7.375V19.708C3.5 20.145 3.855 20.5 4.292 20.5H19.708C20.145 20.5 20.5 20.145 20.5 19.708V7.375C20.5 6.938 20.145 6.583 19.708 6.583H17.258C16.941 6.633 16.626 6.488 16.476 6.201C15.596 4.536 13.882 3.501 12 3.501C10.117 3.501 8.402 4.536 7.524 6.203C7.364 6.505 7.022 6.663 6.691 6.583H4.293H4.292Z"
                      fill="white"
                    />
                    <path
                      d="M12 8.16699C9.32001 8.16699 7.14001 10.347 7.14001 13.027C7.14001 15.707 9.32001 17.887 12 17.887C14.68 17.887 16.86 15.707 16.86 13.027C16.86 10.347 14.68 8.16699 12 8.16699ZM14 13.75H12.75V15C12.75 15.414 12.414 15.75 12 15.75C11.586 15.75 11.25 15.414 11.25 15V13.75H10C9.58601 13.75 9.25001 13.414 9.25001 13C9.25001 12.586 9.58601 12.25 10 12.25H11.25V11C11.25 10.586 11.586 10.25 12 10.25C12.414 10.25 12.75 10.586 12.75 11V12.25H14C14.414 12.25 14.75 12.586 14.75 13C14.75 13.414 14.414 13.75 14 13.75Z"
                      fill="white"
                    />
                  </svg>
                </label>
                <input
                  type="file"
                  name="cover"
                  id="cover"
                  class="input-file"
                  accept="image/*"
                  @change="handleCoverChange"
                  hidden
                />
              </div>
              <div class="icon-delete">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.414 7.99988L15.207 2.20687C15.597 1.81687 15.597 1.18388 15.207 0.792875C14.817 0.401875 14.184 0.402875 13.793 0.792875L8 6.58588L2.207 0.792875C1.817 0.402875 1.184 0.402875 0.792997 0.792875C0.401997 1.18288 0.402997 1.81587 0.792997 2.20687L6.586 7.99988L0.792997 13.7929C0.402997 14.1829 0.402997 14.8159 0.792997 15.2069C0.987997 15.4019 1.243 15.4999 1.5 15.4999C1.757 15.4999 2.012 15.4019 2.207 15.2069L8 9.41387L13.793 15.2069C13.988 15.4019 14.243 15.4999 14.5 15.4999C14.757 15.4999 15.012 15.4019 15.207 15.2069C15.597 14.8169 15.597 14.1839 15.207 13.7929L9.414 7.99988Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="user-avatar">
            <img :src="User.avatar" alt="avatar" />
            <div class="icon-photo">
              <label for="avatar">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083H6.438C7.633 3.17 9.722 2 12 2C14.277 2 16.367 3.17 17.562 5.083H19.708C20.972 5.083 22 6.11 22 7.375V19.708C22 20.972 20.972 22 19.708 22ZM4.292 6.583C3.855 6.583 3.5 6.938 3.5 7.375V19.708C3.5 20.145 3.855 20.5 4.292 20.5H19.708C20.145 20.5 20.5 20.145 20.5 19.708V7.375C20.5 6.938 20.145 6.583 19.708 6.583H17.258C16.941 6.633 16.626 6.488 16.476 6.201C15.596 4.536 13.882 3.501 12 3.501C10.117 3.501 8.402 4.536 7.524 6.203C7.364 6.505 7.022 6.663 6.691 6.583H4.293H4.292Z"
                    fill="white"
                  />
                  <path
                    d="M12 8.16699C9.32001 8.16699 7.14001 10.347 7.14001 13.027C7.14001 15.707 9.32001 17.887 12 17.887C14.68 17.887 16.86 15.707 16.86 13.027C16.86 10.347 14.68 8.16699 12 8.16699ZM14 13.75H12.75V15C12.75 15.414 12.414 15.75 12 15.75C11.586 15.75 11.25 15.414 11.25 15V13.75H10C9.58601 13.75 9.25001 13.414 9.25001 13C9.25001 12.586 9.58601 12.25 10 12.25H11.25V11C11.25 10.586 11.586 10.25 12 10.25C12.414 10.25 12.75 10.586 12.75 11V12.25H14C14.414 12.25 14.75 12.586 14.75 13C14.75 13.414 14.414 13.75 14 13.75Z"
                    fill="white"
                  />
                </svg>
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                class="input-file"
                accept="image/*"
                @change="handleAvatarChange"
                hidden
              />
            </div>
          </div>
          <div class="user-text">
            <div class="form-label name">
              <label for="name" class="label">
                <span>名稱</span>
                <input
                  v-model="User.name"
                  name="name"
                  class="name-input"
                  type="text"
                  autofocus
                />
              </label>
              <div class="name-length">
                {{ User.name ? name.length : "0" }}/50
              </div>
            </div>
            <div class="form-label description">
              <label for="introduction" class="label">
                <span>自我介紹 </span>
                <textarea
                  v-model="User.introduction"
                  class="description"
                  name="introduction"
                  id="introduction"
                  cols="30"
                  rows="10"
                ></textarea>
              </label>
              <div class="description-length">
                {{ introduction.length ? introduction.length : "0" }}/160
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import userAPI from "./../apis/user";
import { Fire } from "./../utils/helper";
import Spinner from "./../components/Spinner.vue";
import { mapState } from "vuex";

export default {
  name: "UserProfile",
  props: {
    nowPage: {
      type: String,
      required: true,
    },
    // currentUser: {
    //   type: Object,
    //   required: true,
    // },
  },
  components: {
    Spinner,
  },
  data() {
    return {
      User: {
        id: -1,
        name: "",
        account: "",
        avatar: "",
        cover: "",
        introduction: "",
        Followers: [],
        Following: [],
        isFollowed: false,
      },
      isShowModal: false,
      name: "",
      introduction: "",
      tweets: [],
      tweetLength: -1,
      isProcessing: false,
      isLoading: true,
    };
  },
  watch: {
    nowPage(newValue) {
      this.nowPage = newValue;
    },
  },
  created() {
    const userId = this.$route.params.id;
    const id = userId ? this.$route.params.id : this.currentUser.id;
    console.log("useId:", userId, "id:", id);
    this.fetchUser(id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.getSingleUserTweets({ userId });
        const Profile = await userAPI.getOtherUser({ userId });
        console.log("other-Profile", Profile);
        console.log("getotherTweets", data);
        this.User = {
          ...this.User,
          ...Profile.data,
        };

        this.isLoading = false;
        if (data) {
          return (this.tweetLength = data.length);
        } else {
          return 0;
        }
      } catch (error) {
        this.isLoading = false;
        Fire.fire({
          icon: "warning",
          title: "無法取得資料",
        });
        console.error(error);
      }
    },
    async EditUserProfile(formData) {
      try {
        this.isProcessing = true;
        const { data } = await userAPI.editUserProfile({
          userId: this.currentUser.id,
          formData,
        });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.tweets = data;
        this.isProcessing = false;
        Fire.fire({
          icon: "success",
          title: "資料已儲存！",
        });
      } catch (error) {
        this.isProcessing = false;
        console.error(error);
        Fire.fire({
          icon: "warning",
          title: "無法儲存資料，請稍後再試",
        });
      }
    },
    async addFollowList(id) {
      try {
        const { data } = await userAPI.follow({ id });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.User = {
          ...this.User,
          isFollowed: true,
        };
      } catch (error) {
        Fire.fire({
          icon: "warning",
          title: "無法新增，請稍候再說",
        });
      }
    },
    async deleteFollowList(userId) {
      try {
        const { data } = await userAPI.unfollow({ userId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.User = {
          ...this.User,
          isFollowed: false,
        };
      } catch (error) {
        Fire.fire({
          icon: "warning",
          title: "無法刪除，請稍候再說",
        });
      }
    },
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
    handleSubmit(e) {
      console.log(e);
      const form = e.target;
      const formData = new FormData(form);
      this.EditUserProfile(formData);
    },
    handleAvatarChange(e) {
      const files = e.target.files;
      console.log(files);
      const imageURL = window.URL.createObjectURL(files[0]);
      this.User.avatar = imageURL;
    },
    handleCoverChange(e) {
      const files = e.target.files;
      console.log(files);
      const imageURL = window.URL.createObjectURL(files[0]);
      this.User.cover = imageURL;
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>


<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.container {
  display: flex;
  height: 100%;
  flex-direction: column;
  font-style: normal;
  color: #1c1c1c;
}

.user-navbar {
  display: flex;
  height: 55px;
  border: 1px solid #e6ecf0;
  .icon {
    margin: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  .user-navbar-info {
    line-height: 19px;

    .user-name {
      font-size: 19px;
      font-weight: 900;
      margin-top: 6px;
    }
    .user-tweets-length {
      font-size: 13px;
      font-weight: 500;
      color: #657786;
      margin-top: 6px;
    }
  }
}
.user-profile {
  border: 1px solid #e6ecf0;
  position: relative;

  .cover-photo {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    background: #999999;
  }
  .user-avatar {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 140px;
    height: 140px;
    margin-left: 15px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid #ffffff;
    }
  }

  .edit-btn {
    position: absolute;
    color: $mainColor;
    right: 0px;
    width: 122px;
    height: 40px;
    border: 1px solid #ff6600;
    border-radius: 100px;
    text-align: center;
    line-height: 40px;
    margin-top: 10px;
    margin-right: 15px;
    &:hover {
      cursor: pointer;
      color: $mainColorHover;
      border-color: $mainColorHover;
    }
    .follow-btn {
      background: $mainColor;
      color: #ffffff;
      font-size: 15px;
      font-weight: bold;
      border-radius: 100px;
      &:hover {
        cursor: pointer;
        background: $mainColorHover;
      }
    }
    .unfollow-btn {
      background: #fff;
      color: $mainColor;
      font-size: 15px;
      font-weight: bold;
      border-radius: 100px;
      &:hover {
        cursor: pointer;
        color: $mainColorHover;
        border-color: $mainColorHover;
      }
    }
  }

  .user-info {
    margin-top: 100px;
    padding: 15px;
    .name {
      font-size: 19px;
      font-weight: 900;
      margin-bottom: 10px;
    }
    .user-account {
      font-size: 15px;
      font-weight: 500;
      margin-bottom: 10px;

      & a {
        color: #657786;
      }
    }
    .user-description {
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 10px;
    }
  }

  .user-follow-info {
    display: flex;
    font-size: 14px;
    font-weight: 500;
    .user-following {
      padding-right: 20px;
    }
    .user-following,
    .user-follower {
      color: #000000;
    }
    span {
      color: #657786;
    }
  }

  // Modal
  .twitter-edit-modal {
    width: 600px;
    position: fixed;
    top: 54px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    background: #ffffff;
    border-radius: 14px;
    background: #fff;

    .modal-container {
      display: grid;
      grid-template-rows: 55px 200px 500px;
      width: 600px;
      height: 654px;
    }

    .modal-header {
      display: flex;
      align-items: center;

      .close-btn {
        width: 10px;
        height: 10px;
        margin: 10px;
        &:hover {
          cursor: pointer;
        }
      }

      .title {
        font-size: 19px;
        font-weight: 700;
        margin-left: 20px;
        line-height: 27;
      }
      .save-btn {
        position: absolute;
        right: 15px;
        width: 64px;
        height: 30px;
        color: #ffffff;
        background: $mainColor;
        border-radius: 100px;
        text-align: center;
        line-height: 30px;
        &:hover {
          cursor: pointer;
          background-color: $mainColorHover;
          transition: background-color 0.3s ease-out;
        }
      }
      .close-btn {
        color: $mainColor;
      }
    }
    .modal-form {
      position: relative;
      width: 100%;
      .modal-cover-photo {
        position: relative;
        background: #657786;
        img {
          width: 600px;
          height: 200px;
          object-fit: cover;
          filter: blur(1px);
        }
        .cover-photo-icon {
          position: absolute;
          widows: 88px;
          display: flex;
          color: #ffffff;
          align-items: center;
          top: 50%;
          transform: translateY(-50%);
          right: 40%;
          transform: translateY(-50%);
          .icon-photo,
          .icon-delete {
            padding-left: 1rem;
            padding-right: 1rem;
            :hover {
              cursor: pointer;
            }
          }
        }
      }
      .user-avatar {
        position: absolute;
        width: 120px;
        height: 120px;
        top: 100%;
        transform: translateY(-50%);
        .icon-photo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          :hover {
            cursor: pointer;
          }
        }
      }
      .user-text {
        margin-top: 80px;
      }
      .form-label {
        position: relative;
        margin: 15px;
      }

      .label {
        color: #657786;
        font-size: 15px;
        span {
          position: absolute;
          top: 10px;
        }
      }
      input,
      textarea {
        width: 570px;
        height: 54px;
        font-size: 20px;
        color: #1c1c1c;
        padding-top: 15px;
        padding-bottom: -10px;
        border: none;
        border-bottom: solid 3px #657786;
        border-radius: 0px 0px 4px 4px;
        background: #f5f8fa;
        outline: none;
        resize: none;
      }
      .description {
        height: 150px;
      }
      .name-length,
      .description-length {
        height: 22px;
        text-align: right;
        font-size: 15px;
        font-weight: 500;
        color: #657786;
      }
    }
  }
}
</style>