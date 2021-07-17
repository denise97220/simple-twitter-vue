<template>
  <div class="chatroom-container">
    <div class="dialog-box">
      <div class="dialog-title">公開聊天室</div>
      <div class="dialog-show-box" id="scroll-box">
        <div
          :class="{
            'single-message-left': msg.User.id !== currentUser.id,
            'single-message-right': msg.User.id === currentUser.id,
          }"
          v-for="msg in message.slice().reverse()"
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
            v-model="tempMessage"
          />
        </div>

        <div class="send-btn" @click.stop.prevent="send">
          <img src="sendMsg.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="online-users">
      <div class="user-top">上線使用者(5)</div>
      <div class="user-list">
        <div class="user-card" v-for="user in onlineUser" :key="user.id">
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
import uuidv4 from "uuid";

export default {
  name: "ChatPublic",
  data() {
    return {
      id: 1,
      tempMessage: "",
      message: [],
      onlineMessage: "",
      onlineUser: [],
    };
  },
  sockets: {
    connect() {
      console.log("socket connected");
    },
    disconnect() {
      console.log("socket disconnected");
    },
    announce(data) {
      this.onlineUser = data.users;
      this.onlineMessage = data.message;
    },
    chatMessage(msg) {
      this.message.unshift(msg);
    },
  },
  methods: {
    send() {
      if (!this.tempMessage.trim()) return;
      const time = new Date();
      const msg = {
        id: uuidv4(),
        text: this.tempMessage,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
          avatar: this.currentUser.avatar,
        },
        createdAt: time,
      };
      this.$socket.emit("chatMessage", msg);
      this.tempMessage = "";
    },
    async getMessages() {
      try {
        const { data } = await chatAPI.getMessages();
        this.message = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.getMessages();
  },
  updated() {
    let box = document.getElementById("scroll-box");
    box.scrollTop = box.scrollHeight;
  },
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
}
.user-top,
.dialog-title {
  border: $borderColor 1px solid;
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
  height: 80%;
  border: solid 1px #e6ecf0;
  position: relative;
  // padding: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.send-box {
  display: flex;
  align-items: center;
  bottom: 0;
  padding: 0.5rem;
  border: 1px solid $borderColor;
  .send-input {
    input {
      background: $borderColor;
      width: 35rem;
      border-radius: 30px;
      font-size: 1.2rem;
      outline: none;
      border: none;
      padding-left: 0.5rem;
    }
  }
  .send-btn {
    // background: $mainColor;
    // color: #ffffff;
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
    }
    .message {
      max-width: 220px;
      background-color: rgb(228, 228, 228);
      padding: 10px;
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
    }
    .message {
      max-width: 230px;
      background-color: rgb(228, 228, 228);
      padding: 10px;
      border-radius: 20px 20px 0px 20px;
      margin-top: 5px;
      margin-bottom: 5px;
      line-height: 24px;
    }
  }
}
// online style
.chatroom-container {
  display: grid;
  grid-template-columns: 2fr 1.2fr;
}
.dialog-box {
  grid-column: 1 / 2;
  height: 100%;
}
.online-users {
  grid-column: 2 / 3;
}
.dialog-show-box {
  height: calc(100vh - 100px);
  border: solid 1px #e6ecf0;
}
.send-box {
  display: flex;
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
// online user css
.chatroom-container {
  display: grid;
  grid-template-columns: 2fr 1.2fr;
}
.dialog-box {
  grid-column: 1 / 2;
}
.online-users {
  grid-column: 2 / 3;
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