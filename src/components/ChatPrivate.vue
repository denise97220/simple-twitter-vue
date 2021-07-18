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
            <div class="time">{{ msg.createdAt | timeFilter }}</div>
          </div>
        </div>
      </div>
      <div class="send-box">
        <div class="send-input">
          <input class="dialog-input" type="text" placeholder="輸入訊息..." />
        </div>

        <div class="send-btn">
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
          :key="user.RoomId"
          @click.stop.prevent="showDialogBox(user.RoomId, user.id)"
        >
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
import { momentFilter } from "./../utils/mixins";

export default {
  name: "ChatPrivate",
  mixins: [momentFilter],
  data() {
    return {
      chatUser: [],
      chatMessage: [],
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
    async showDialogBox(RoomId, userId) {
      try {
        const { data } = await chatAPI.getChatUserMsg({ RoomId });
        this.chatMessage = data;
        console.log(data);
        console.log(RoomId);
        this.$store.commit("setChatUserId", userId);
      } catch (error) {
        console.log(error);
      }
    },
  },
  sockets: {},
  computed: {
    ...mapState(["chatUserId"]),
  },
  created() {
    const id = this.chatUserId;
    this.getChatUser();
    if (id !== -1) {
      this.showDialogBox(id);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/chat.scss";
</style>