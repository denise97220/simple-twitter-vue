<template>
  <div class="chatroom-container">
    <div class="dialog-box">
      <div class="dialog-title">公開聊天室</div>
      <div class="dialog-show-box">
        <div class="single-message">
          <div class="avatar">
            <img src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3z9b6hhmzNkAX-KN0xP&_nc_ht=scontent.ftpe13-1.fna&oh=a4852c36890e38e7ecebe0662cb39e45&oe=60F60119" alt="">
          </div>
          <div class="info">
            <div class="name">許丹</div>
            <div class="content">
              <div class="message">早安午安晚安</div>
              <div class="time">下午 7:32</div>
            </div>
          </div>
        </div>
      </div>
      <div class="send-box">
        <input 
          class="dialog-input"  
          v-model="message" 
          type="text"
        >
        <div class="send-btn">send</div>
      </div>
    </div>
    <div class="online-users">
      <h1>上線人員</h1>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import store from './../store'
// import VueSocketIO from 'vue-socket.io'
// import SocketIO from 'socket.io-client'

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: SocketIO('https://1f926ed08a12.ngrok.io', {
//     reconnectionDelayMax: 10000,
//     auth: {
//       token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI2MzU5NTQ3fQ.VPmXUK2zl6vIUCcTgVucLh0QD6Ydmhc0wGZgZfxDXnc"
//     },
//     // query: {
//     //   "my-key": "my-value"
//     // }
//   }),
//   vuex: {
//     store,
//     actionPrefix: "SOCKET_",
//     mutationPrefix: "SOCKET_",
//     options: { path: "/"}
//   },
//   extraHeaders: {
//   'Access-Control-Allow-Credentials':true
//   },
//   allowEIO3: true
//   })
// )

// export default {
//   name: "ChatPublic",
//   data() {
//     return {
//       message: ""
//     }
//   },
//   created() {
//     this.disconnectSever()
//     this.connectSever()
//     this.$socket.emit("chat message", "hi")
//   },
//   methods: {
//     disconnectSever() {
//       this.$socket.disconnect()
//     },
//     connectSever() {
//       this.$socket.connect()
//     },
//   },
//   sockets: {
//     connect() {
//       console.log('socket connected')
//     },
//     allOnlineUsers(users) {
//       this.onlineUsers = users
//     },
//     online(onlineCount) {
//       this.onlineCount = onlineCount
//     },
//   },

// }
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

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
.single-message{
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
</style>