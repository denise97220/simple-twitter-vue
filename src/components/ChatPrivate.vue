<template>
  <div class="chatroom-container">
    <div class="dialog-box">
      <div class="dialog-title">私人聊天室</div>
      <div class="dialog-show-box" id="scroll-box">
        <div
          :class="{
            'single-message-left': msg.User.id !== currentUser.id,
            'single-message-right': msg.User.id === currentUser.id,
          }"
          v-for="msg in chatMessage.slice().reverse()"
          :key="msg.id"
        >
          <div class="avatar">
            <img :src="msg.User.avatar" alt="" />
          </div>
          <div class="info">
            <div class="name">{{ msg.User.name }}</div>
            <div class="message">{{ msg.text }}</div>
            <div class="time">{{ msg.createdAt | timeFilter }}</div>
          </div>
        </div>
      </div>
      <div class="send-box">
        <div class="send-input">
          <input @keyup.enter="send" v-model="tempMessage" class="dialog-input" type="text" placeholder="輸入訊息..." />
        </div>

        <div class="send-btn" @click.stop.prevent="send">
          <img src="sendMsg.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="online-users">
      <div class="user-top">訊息</div>
      <div class="user-list">
        <div
          class="user-card"
          v-for="user in chatUser"
          :key="user.id"
          @click.stop.prevent="showDialogBox(user.Room.id, user.Room.name)"
        >
          <div class="user-avatar">
            <img :src="user.User.avatar" alt="avatar" />
          </div>
          <div class="user-info">
            {{ user.User.name }} <span>{{ user.User.account }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { momentFilter } from "./../utils/mixins";
import { Fire } from "./../utils/helper";
import chatAPI from "./../apis/chat";
import uuidv4 from "uuid";

export default {
  name: "ChatPrivate",
  mixins: [momentFilter],
  data() {
    return {
      chatUser: [],
      chatMessage: [],
      tempRoomName: "",
      tempMessage: ""
    };
  },
  methods: {
    async getChatUser() {
      try {
        const { data } = await chatAPI.getChatUserList();
        this.chatUser = data;
      } catch (error) {
        console.log(error);
      }
    },
    async showDialogBox(RoomId, RoomName) {
      try {
        this.$socket.emit("joinRoom", RoomName)
        const { data } = await chatAPI.getChatUserMsg({ RoomId });
        this.chatMessage = data;
        this.tempRoomName = RoomName
        this.$store.commit("setChatRoomId", RoomId);
      } catch (error) {
        console.log(error);
      }
    },
    send() {
      if (!this.tempMessage.trim()) return
      const time = new Date()
      const msg = {
        id: uuidv4(),
        RoomName: this.tempRoomName,
        RoomId: this.chatRoomId,
        text: this.tempMessage,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
          avatar: this.currentUser.avatar,
        },
        createdAt: time,
      };
      if(msg.RoomId === -1) {
        Fire.fire({
          icon: "warning",
          title: "請選擇聊天室",
        });
        return 
      } 
      this.$socket.emit("chatMessage", msg)
      this.tempMessage = "";
    },
  },
  sockets: {
    joinRoom() {
      console.log("join room!")
    },
    chatMessage(msg) {
      if(msg.RoomId !== this.chatRoomId) return
      this.chatMessage.unshift(msg)
    },
    disconnect() {
      console.log("socket disconnected");
    },
  },
  computed: {
    ...mapState(["chatRoomId"]),
    ...mapState(["currentUser"]),
  },
  created() {
    this.getChatUser();
    this.chatRoomId = -1
  },
  updated() {
    let box = document.getElementById("scroll-box")
    box.scrollTop = box.scrollHeight;
  },
  destroyed() {
    this.$socket.emit("disconnect")
  }
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/chat.scss";
</style>