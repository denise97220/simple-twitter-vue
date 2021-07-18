<template>
  <div class="container">
    <Spinner v-if="isLoading" />
    <div v-else class="wrapper">
      <div
        class="cover"
        @click.stop.prevent="closeModal"
        v-show="isShowModal"
      ></div>
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
          <Spinner v-if="isLoading" />
          <div class="user-name">{{ User.name }}</div>
          <div class="user-tweets-length">{{ User.tweetsCount }} 推文</div>
        </div>
      </div>

      <div class="user-profile">
        <div class="cover-photo">
          <img :src="User.cover" alt="cover" />
        </div>
        <div class="user-avatar">
          <img :src="User.avatar" alt="avatar" />
        </div>

        <div class="user-self-btn" v-if="nowPage === 'self'">
          <div @click.stop.prevent="showModal">編輯個人資料</div>
        </div>
        <div class="user-btns" v-else>
          <div class="message-btn" @click="redirectToMessage">
            <svg
              width="20"
              height="19"
              viewBox="0 0 20 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 0.0180664H2.75C1.233 0.0180664 0 1.25207 0 2.77007V15.2651C0 16.7831 1.233 18.0181 2.75 18.0181H17.25C18.767 18.0181 20 16.7831 20 15.2651V2.77007C20 1.25207 18.767 0.0180664 17.25 0.0180664ZM2.75 1.51807H17.25C17.94 1.51807 18.5 2.07807 18.5 2.76807V3.48207L10.45 8.84907C10.177 9.02907 9.824 9.03107 9.55 8.84707L1.5 3.48207V2.76807C1.5 2.07807 2.06 1.51807 2.75 1.51807ZM17.25 16.5161H2.75C2.06 16.5161 1.5 15.9561 1.5 15.2661V5.24007L8.74 10.0701C9.123 10.3261 9.562 10.4541 10 10.4541C10.44 10.4541 10.877 10.3261 11.26 10.0711L18.5 5.24107V15.2631C18.5 15.9531 17.94 16.5131 17.25 16.5131V16.5161Z"
                fill="#FF6600"
              />
            </svg>
          </div>
          <div class="noti-btn" v-if="!isNotify" @click="turnNotify">
            <svg
              width="24"
              height="22"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.24 3.26003H20.815V0.832031C20.815 0.418031 20.479 0.0820312 20.065 0.0820312C19.651 0.0820312 19.315 0.418031 19.315 0.832031V3.26003H16.89C16.476 3.26003 16.14 3.59503 16.14 4.01003C16.14 4.42503 16.476 4.76003 16.89 4.76003H19.316V7.18403C19.316 7.59803 19.652 7.93403 20.066 7.93403C20.48 7.93403 20.816 7.59803 20.816 7.18403V4.76003H23.241C23.656 4.76003 23.991 4.42303 23.991 4.01003C23.991 3.59703 23.655 3.26003 23.241 3.26003H23.24ZM17.01 10.866C17.03 8.43203 16.228 6.26903 14.752 4.77603C13.428 3.43403 11.636 2.69203 9.70604 2.68303H9.69304C7.76304 2.69303 5.97104 3.43303 4.64704 4.77503C3.17204 6.27003 2.37004 8.43303 2.39004 10.867C2.42604 15 0.467036 16.56 0.390036 16.62C0.130036 16.813 0.0230359 17.15 0.124036 17.458C0.226036 17.766 0.514036 17.973 0.836036 17.973H5.55204C5.66204 20.199 7.49204 21.98 9.74604 21.98C12 21.98 13.829 20.2 13.94 17.973H18.565C18.885 17.973 19.169 17.767 19.272 17.463C19.375 17.159 19.272 16.82 19.017 16.625C18.935 16.561 16.974 15 17.009 10.865L17.01 10.866ZM9.74504 20.48C8.31904 20.48 7.15904 19.37 7.05104 17.972H12.439C12.331 19.372 11.171 20.479 9.74504 20.479V20.48ZM2.45504 16.473C3.15704 15.378 3.91204 13.569 3.88904 10.855C3.87204 8.79303 4.50304 7.05503 5.71404 5.83003C6.75704 4.77403 8.17204 4.19003 9.70004 4.18403C11.227 4.19103 12.643 4.77403 13.685 5.83003C14.895 7.05603 15.525 8.79303 15.508 10.855C15.486 13.569 16.24 15.378 16.945 16.473H2.45504Z"
                fill="#FF6600"
              />
            </svg>
          </div>
          <div class="noti-btn user-notify" v-else @click="turnNotify">
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.6095 0.150052C23.2345 -0.0339485 22.7875 0.120052 22.6035 0.490052L19.7395 6.26605L18.0365 4.45605C17.7535 4.15305 17.2785 4.14005 16.9765 4.42405C16.6745 4.70805 16.6605 5.18405 16.9445 5.48405L19.3875 8.08005C19.5305 8.23005 19.7275 8.31505 19.9335 8.31505C19.9695 8.31505 20.0065 8.31205 20.0435 8.30705C20.2865 8.27105 20.4955 8.11705 20.6055 7.89705L23.9475 1.15705C24.1315 0.785051 23.9795 0.335052 23.6075 0.151052L23.6095 0.150052ZM19.0175 16.6251C18.9345 16.5611 16.9735 15.0001 17.0075 10.8651C17.0295 8.43205 16.2275 6.26905 14.7515 4.77505C13.4275 3.43505 11.6355 2.69205 9.70555 2.68305H9.69255C7.76255 2.69305 5.97055 3.43305 4.64655 4.77505C3.17155 6.27005 2.36955 8.43305 2.38955 10.8671C2.42555 15.0001 0.466548 16.5601 0.389548 16.6201C0.129548 16.8131 0.0225476 17.1501 0.123548 17.4581C0.225548 17.7661 0.513548 17.9731 0.835548 17.9731H4.91555C5.00355 20.5431 7.10855 22.6131 9.70055 22.6131C12.2925 22.6131 14.3985 20.5431 14.4855 17.9731H18.5675C18.8875 17.9731 19.1715 17.7671 19.2745 17.4631C19.3775 17.159 19.2725 16.8201 19.0185 16.6251H19.0175ZM9.69955 20.5131C8.26555 20.5131 7.09955 19.3861 7.01555 17.9731H12.3835C12.2985 19.3861 11.1335 20.5131 9.69955 20.5131Z"
                fill="white"
              />
            </svg>
          </div>

          <div class="edit-btn">
            <!--  追蹤判斷 -->
            <div
              class="follow-btn"
              v-if="User.isFollowed"
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
                params: {
                  id: this.$route.params.id
                    ? this.$route.params.id
                    : currentUser.id,
                },
              }"
            >
              <div class="user-following">
                {{ followingLength }} 個
                <span>跟隨中 </span>
              </div>
            </router-link>
            <router-link
              :to="{
                name: `user-${nowPage}-follow-follower`,
                params: {
                  id: this.$route.params.id
                    ? this.$route.params.id
                    : currentUser.id,
                },
              }"
            >
              <div class="user-follower">
                {{ followerLength }}位 <span>跟隨者</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- modal -->

      <div class="twitter-edit-modal" v-show="isShowModal">
        <form class="modal-container" @submit.stop.prevent="handleSubmit">
          <div class="modal-header">
            <div class="close-btn" @click.stop.prevent="closeModal">Ｘ</div>
            <div class="title">編輯個人資料</div>
            <button
              class="save-btn main-btn"
              type="submit"
              :class="{ 'disabled-btn': isProcessing }"
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
                  <label for="deleteCover">
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
                  </label>
                  <input
                    type="checkbox"
                    name="deleteCover"
                    id="deleteCover"
                    class="input-file"
                    @change="handleDeleteCover"
                    hidden
                  />
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
                  {{ User.name ? User.name.length : "0" }}/50
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
                  {{ User.introduction ? User.introduction.length : "0" }}/160
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
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
    updateId: {
      type: Number,
      default: -1,
    },
    relatedFollowStatus: {
      type: Object,
    },
    relateToUser: {
      type: Object,
    },
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
        Followings: [],
        isFollowed: false,
      },

      isShowModal: false,
      name: "",
      introduction: "",
      followerLength: "-",
      followingLength: "-",
      isProcessing: false,
      isLoading: true,
      isNotify: false,
    };
  },
  watch: {
    nowPage(newValue) {
      this.nowPage = newValue;
    },
    updateId() {
      this.fetchUser(this.updateId);
    },
    relatedFollowStatus(newValue) {
      if (newValue.id === this.User.id) {
        const { id, isFollowed } = newValue;
        this.User = {
          ...this.User,
          isFollowed: isFollowed,
        };
        this.renderFollowCount(id);
      }
    },
    relateToUser(newValue) {
      console.log(newValue);
      this.renderFollowCount(this.currentUser.id);
    },
  },
  created() {
    // Check nowPage User Id
    const userId = this.$route.params.id;
    const id = userId ? this.$route.params.id : this.currentUser.id;
    this.fetchUser(id);
  },
  methods: {
    async fetchUser(userId) {
      try {
        this.isLoading = true;
        this.isProcessing = true;

        const { data } = await userAPI.getOtherUser({ userId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        // Render Now User Profile
        this.User = {
          ...this.User,
          ...data,
        };
        this.followerLength = this.User.Followers.length;
        this.followingLength = this.User.Followings.length;

        // Render Profile follow count
        this.renderFollowCount(userId);
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        Fire.fire({
          icon: "warning",
          title: "無法取得資料",
        });
        console.error(error);
      }
    },
    async renderFollowCount(userId) {
      try {
        const followingList = await userAPI.getUserFollowings({ userId });
        const followerList = await userAPI.getUserFollowers({ userId });
        this.User.Followers = followerList.data;
        this.User.Followings = followingList.data;

        // Render follow number count
        this.followerLength = followerList.data.length;
        this.followingLength = followingList.data.length;
      } catch (error) {
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
        this.isShowModal = false;
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
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.User.isFollowed = true;
        this.followerLength = this.followerLength + 1;
        this.$emit("tap-follow-button", {
          id: id,
          isFollowed: true,
        });
        Fire.fire({
          icon: "success",
        });
      } catch (error) {
        Fire.fire({
          icon: "warning",
          title: "無法新增，請稍候再說",
        });
      }
    },
    async deleteFollowList(userId) {
      try {
        const { data } = await userAPI.unFollow({ userId });
        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.User.isFollowed = false;
        this.followerLength = this.followerLength - 1;

        // this.renderFollowCount(userId);
        this.$emit("tap-follow-button", {
          id: userId,
          isFollowed: false,
        });
        Fire.fire({
          icon: "success",
          title: "已成功移除",
        });
      } catch (error) {
        console.error(error);
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
      const form = e.target;
      const formData = new FormData(form);
      this.EditUserProfile(formData);
    },
    handleAvatarChange(e) {
      const files = e.target.files;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.User.avatar = imageURL;
    },
    handleCoverChange(e) {
      const files = e.target.files;
      const imageURL = window.URL.createObjectURL(files[0]);
      this.User.cover = imageURL;
    },
    handleDeleteCover() {
      Fire.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.User.cover =
            "https://images.unsplash.com/27/perspective.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";
          Fire.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    turnNotify() {
      this.isNotify = !this.isNotify;
    },
    redirectToMessage() {
      const id = this.$route.params.id;
      this.$socket.emit("createRoom", id)
      this.$router.push("/chat_private")
    }
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    disconnect() {
      console.log("socket disconnected");
    },
    createRoom() {
      console.log("create room")
    },
    newRoom(id) {
      this.$store.commit("setChatRoomId", id);
    }
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
      font-weight: 700;
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
  .user-self-btn {
    position: absolute;
    display: flex;
    right: 1rem;
    margin-top: 1rem;
    padding: 0.5rem;
    width: 122px;
    height: 1.8rem;
    justify-content: center;
    align-items: center;
    color: $mainColor;
    border: solid 1px $mainColor;
    border-radius: 100px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.05rem;
    &:hover {
      cursor: pointer;
      $color: $mainColorHover;
    }
  }
  .user-btns {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem;
    .message-btn,
    .noti-btn {
      display: flex;
      width: 40px;
      height: 40px;
      border-radius: 100px;
      border: solid 1px $mainColor;
      margin-right: 0.5rem;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
        color: $mainColorHover;
        border-color: $mainColorHover;
      }
    }
    .user-notify {
      background: $mainColor;
    }
    .edit-btn {
      color: $mainColor;
      width: 122px;
      height: 40px;
      border: 1px solid #ff6600;
      border-radius: 100px;
      text-align: center;
      line-height: 40px;
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
  }

  .user-info {
    margin-top: 50px;
    padding: 15px;
    .name {
      font-size: 19px;
      font-weight: 700;
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
        line-height: 20px;
        font-size: 15px;
        &:hover {
          cursor: pointer;
          background-color: $mainColorHover;
          transition: background-color 0.3s ease-out;
        }
      }
      .close-btn {
        color: $mainColor;
        padding-bottom: 7px;
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
        }
        .cover-photo-icon {
          position: absolute;
          widows: 88px;
          display: flex;
          color: #ffffff;
          align-items: center;
          top: 50%;
          transform: translateY(-50%);
          right: 42%;
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
        margin: 10px;
      }

      .label {
        color: #657786;
        font-size: 15px;
        span {
          position: absolute;
          top: 10px;
          left: 10px;
        }
      }
      input,
      textarea {
        width: 570px;
        height: 40px;
        font-size: 18px;
        color: #1c1c1c;
        padding-top: 30px;
        padding-bottom: -10px;
        padding-left: 10px;
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