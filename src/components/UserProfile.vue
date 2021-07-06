<template>
  <div class="container">
    <div class="user-navbar">
      <div class="icon">
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
        <div class="user-name">Ashley</div>
        <div class="user-tweets-length">25 推文</div>
      </div>
    </div>
    <div class="user-profile">
      <div class="cover-photo"></div>
      <div class="user-avatar">
        <img
          src="https://scontent.ftpe13-2.fna.fbcdn.net/v/t1.6435-9/41733863_2401943579823502_6964299628061655040_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ZVRGyMI7a6oAX_Aba8b&_nc_ht=scontent.ftpe13-2.fna&oh=c9ba5554c67d9ea9479b5d9c27649a0a&oe=60E8FF7C"
          alt="avatar"
        />
      </div>
      <div @click.stop.prevent="showModal" class="edit-btn">
        <button>編輯個人資料</button>
      </div>
      <div class="user-info">
        <div class="name">Ashley Huang</div>
        <div class="user-account"><a href="#">@ashley</a></div>
        <div class="user-description">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </div>
        <div class="user-folloer-info">
          <div class="user-following">34 個 <span>跟隨中 </span></div>
          <div class="user-follower">59位<span>跟隨者</span></div>
        </div>
      </div>
    </div>
    <!-- modal -->
    <div class="twitter-edit-modal" v-show="isshowModal">
      <div class="modal-container">
        <div class="modal-header">
          <div class="close-btn" @click.stop.prevent="closeModal">Ｘ</div>
          <div class="title">編輯個人資料</div>
          <div class="save-btn main-btn">儲存</div>
        </div>
        <div class="modal-form">
          <div class="cover-photo"></div>
          <div class="user-avatar">
            <img
              src="https://scontent.ftpe13-2.fna.fbcdn.net/v/t1.6435-9/41733863_2401943579823502_6964299628061655040_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ZVRGyMI7a6oAX_Aba8b&_nc_ht=scontent.ftpe13-2.fna&oh=c9ba5554c67d9ea9479b5d9c27649a0a&oe=60E8FF7C"
              alt="avatar"
            />
          </div>
          <div class="user-text">
            <div class="form-label name">
              <label for="name" class="label">
                名稱
                <input
                  v-model="editName"
                  name="name"
                  class="name-input"
                  type="text"
                  autofocus
                />
              </label>
              <div class="name-length">8/50</div>
            </div>
            <div class="form-label description">
              <label for="description" class="label">
                自我介紹
                <textarea
                  v-model="editDescription"
                  name="description"
                  id="description"
                  cols="30"
                  rows="10"
                ></textarea>
              </label>
              <div class="description-length">0/160</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      isShowModal: true,
      editName: "",
      editDescription: "",
    };
  },
  methods: {
    showModal() {
      this.isShowModal = true;
    },
    closeModal() {
      this.isShowModal = false;
    },
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
    button {
      border: none;
      background-color: transparent;
      outline: none;
      color: $mainColor;
      font-size: 15px;
      font-weight: bold;
      &:hover {
        cursor: pointer;
        color: $mainColorHover;
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

  .user-folloer-info {
    display: flex;
    font-size: 14px;
    font-weight: 500;
    .user-following {
      padding-right: 20px;
    }
    span {
      color: #657786;
    }
  }

  // Modal
  .twitter-edit-modal {
    width: 600px;
    position: absolute;
    top: 54px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    background: #ffffff;
    border-radius: 14px;
    background: #fff;

    .modal-container {
      width: 600px;
      height: 654px;
    }

    .modal-header {
      display: flex;
      align-items: center;
      height: 55px;

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

      .user-avatar {
        position: absolute;
        width: 120px;
        height: 120px;
        top: 50%;
        transform: translateY(-100%);
      }
      .user-text {
        margin-top: 80px;
      }
      .form-label {
        position: relative;
        margin: 15px;
      }

      .label {
        // position: absolute;
        color: #657786;
        font-size: 15px;
      }
      input {
        width: 570px;
        height: 54px;
        font-size: 20px;
        color: #1c1c1c;
        margin-top: 20px;
        padding-top: 15px;
        padding-bottom: -10px;
        border: none;
        border-bottom: solid 3px #657786;
        border-radius: 0px 0px 4px 4px;
        background: #f5f8fa;
      }
      textarea {
        width: 570px;
        height: 150px;
        background: #f5f8fa;
        outline: none;
        resize: none;
      }
    }
  }
}
</style>