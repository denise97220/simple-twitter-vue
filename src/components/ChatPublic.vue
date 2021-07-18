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
            <div class="content">
              <div class="message">{{ msg.text }}</div>
              <div class="time">{{ msg.createdAt | timeFilter }}</div>
            </div>
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
            @keyup.enter="send"
          />
        </div>

        <div class="send-btn" @click.stop.prevent="send">
          <img src="sendMsg.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="online-users">
      <div class="user-top">上線使用者</div>
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
import { momentFilter } from "./../utils/mixins";

export default {
  name: "ChatPublic",
  mixins: [momentFilter],
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
@import "./src/assets/scss/chat.scss";

</style>