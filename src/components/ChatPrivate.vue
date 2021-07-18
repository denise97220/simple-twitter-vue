<template>
  <div class="chatroom-container">
    <div class="dialog-box">
      <div class="dialog-title">私人聊天室</div>
      <div class="dialog-show-box" id="scroll-box">
        <div
          class="single-message-left"
          v-for="msg in chatMessage"
          :key="msg.id"
        >
          <div class="avatar">
            <img :src="msg.User.avatar" alt="" />
          </div>
          <div class="info">
            <div class="name">{{ msg.User.name }}</div>
            <div class="message">{{ msg.text }}</div>
            <div class="time">{{ msg.createdAt }}</div>
          </div>
        </div>
      </div>
      <div class="send-box">
        <div class="send-input">
          <input
            class="dialog-input"
            type="text"
            placeholder="輸入訊息..."
          />
        </div>

        <div class="send-btn">
          <img src="sendMsg.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="online-users">
      <div class="user-top">私人聊天室(5)</div>
      <div class="user-list">
        <div class="user-card" 
          v-for="user in chatUser" 
          :key="user.RoomId" 
          @click.stop.prevent="showDialogBox(user.RoomId, user.id)">
          <div class="user-avatar">
            <img :src="user.avatar" alt="avatar" />
          </div>
          <div class="user-info">
            {{ user.name }} <span>{{ user.account }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import chatAPI from "./../apis/chat";

export default {
  name: "ChatPrivate",
  data() {
    return {
      chatUser: [],
      chatMessage: []
    }
  },
  methods: {
    async getChatUser() {
      try {
        const { data } = await chatAPI.getChatUserList()
        this.chatUser = data
      } catch (error) {
        console.log(error)
      }
    }, 
    async showDialogBox(RoomId, userId) {
      try {
        const { data } = await chatAPI.getChatUserMsg({ RoomId })
        this.chatMessage = data
        console.log(data)
        console.log(RoomId)
        this.$store.commit("setChatUserId", userId);
      } catch(error) {
        console.log(error)
      }
      
    }
  },
  sockets: {

  },
  computed: {
    ...mapState(["chatUserId"])
  },
  created() {
    const id = this.chatUserId
    this.getChatUser()
    if(id !== -1) {
      this.showDialogBox(id)
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
$borderColor: #e6ecf0;
$accountColor: #657786;
* {
  border: 1px solid red;
}

.chatroom-container {
  display: grid;
  grid-template-columns: 2fr 1.2fr;
  height: 100%;
}
.user-top,
.dialog-title {
  border: $borderColor 1px solid;
  height: 30px;
  border-bottom: none;
  font-size: 1rem;
  padding: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-weight: 700;
}
.dialog-box {
  grid-column: 1 / 2;
  height: 100%;
}
.online-users {
  grid-column: 2 / 3;
}
.dialog-show-box {
  height: calc(100vh - 150px);
  border: solid 1px #e6ecf0;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.send-box {
  height: 50px;
  display: flex;
  align-items: center;
  bottom: 0;
  padding: 1rem;
  border: 1px solid $borderColor;
  .send-input {
    input {
      background: $borderColor;
      width: 35rem;
      border-radius: 30px;
      font-size: 1.2rem;
      outline: none;
      border: none;
      padding: 10px;
      padding-left: 20px;
      box-sizing: border-box;
    }
  }
  .send-btn {
    width: 3rem;
    font-size: 1rem;
    padding: 0.2rem;
    text-align: center;
    border-radius: 10px;
    margin-left: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
}
.single-message-left,
.single-message-right {
  display: flex;
  position: relative;
  display: flex;
  padding: 0.5rem;
  margin-top: 10px;
  .avatar {
    align-self: center;
    width: 50px;
    height: 50px;
    img {
       width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .info {
    padding-left: 10px;
    .name,
    .time {
      font-size: 14px;
      padding-left: 5px;
    }
    .message {
      display: inline-block;
      min-width: 30px;
      max-width: 220px;
      background-color: rgb(228, 228, 228);
      padding: 8px 12px 8px 12px;
      border-radius: 20px 20px 20px 0px;
      margin-top: 5px;
      margin-bottom: 5px;
      line-height: 24px;
    }
  }
}
.single-message-right {
  right: 0px;
  flex-direction: row-reverse;
  padding-right: 10px;
  .info {
    padding-right: 10px;
    .name,
    .time {
      text-align: right;
      padding-right: 7px;
    }
    .message {
      border-radius: 20px 20px 0px 20px;
      position: absolute;
      right: 73px;
    }
    .time {
      margin-top: 60px;
    }
  }
}

.single-message {
  display: flex;
  .avatar {
    width: 50px;
    height: 50px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
}

// online users
.user-card {
  border: $borderColor 1px solid;
  display: flex;
  align-items: center;
  padding: 0.1rem;
  line-height: 21px;
  .user-avatar > img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    border-color: $borderColor;
    padding: 0.3rem;
    object-fit: cover;
  }
  .user-info > span {
    padding-left: 1px;
    color: $accountColor;
    font-weight: 500;
  }
  &:hover {
    cursor: pointer;
    background-color: #eeeeee;
  }
}
</style>