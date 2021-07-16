<template>
  <div class="chatroom-container">
    <div class="dialog-box">
      <div class="dialog-title">公開聊天室</div>
      <div class="dialog-show-box">
        <div class="single-message">
          <div class="avatar">
            <img
              src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=3z9b6hhmzNkAX-KN0xP&_nc_ht=scontent.ftpe13-1.fna&oh=a4852c36890e38e7ecebe0662cb39e45&oe=60F60119"
              alt=""
            />
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
        <input class="dialog-input" type="text" v-model="message" />
        <div class="send-btn" @click.stop.prevent="send">send</div>
      </div>
    </div>
    <div class="online-users">
      <div class="user-top">上線使用者(5)</div>
      <div class="user-list">
        <div class="user-card">
          <div class="user-avatar">
            <img
              src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/30623878_2126472630703933_1331523221500535509_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xfGfnyD9CgIAX-tdZVd&_nc_ht=scontent.ftpe13-1.fna&oh=3c85861785e538c40a3f89634fcd07fb&oe=60F61540"
              alt="avatar"
            />
          </div>
          <div class="user-info">Ashley <span>@ashley</span></div>
        </div>
        <div class="user-card">
          <div class="user-avatar">
            <img
              src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/30623878_2126472630703933_1331523221500535509_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xfGfnyD9CgIAX-tdZVd&_nc_ht=scontent.ftpe13-1.fna&oh=3c85861785e538c40a3f89634fcd07fb&oe=60F61540"
              alt="avatar"
            />
          </div>
          <div class="user-info">Ashley <span>@ashley</span></div>
        </div>
        <div class="user-card">
          <div class="user-avatar">
            <img
              src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/30623878_2126472630703933_1331523221500535509_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xfGfnyD9CgIAX-tdZVd&_nc_ht=scontent.ftpe13-1.fna&oh=3c85861785e538c40a3f89634fcd07fb&oe=60F61540"
              alt="avatar"
            />
          </div>
          <div class="user-info">Ashley <span>@ashley</span></div>
        </div>
        <div class="user-card">
          <div class="user-avatar">
            <img
              src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.18169-9/30623878_2126472630703933_1331523221500535509_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=xfGfnyD9CgIAX-tdZVd&_nc_ht=scontent.ftpe13-1.fna&oh=3c85861785e538c40a3f89634fcd07fb&oe=60F61540"
              alt="avatar"
            />
          </div>
          <div class="user-info">Ashley <span>@ashley</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import store from "./../store";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("https://7118cd871ec1.ngrok.io", {
      auth: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjI2NDEwNjYzfQ._czlz2LTzcgJXwkQCSN3EVKOeANpqxuJWeJ7vnWKDAQ",
      },
    }),
    vuex: {
      store,
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_",
    },
  })
);

export default {
  name: "ChatPublic",
  data() {
    return {
      message: "",
    };
  },
  sockets: {
    connect: function () {
      console.log("socket connected");
    },
  },
  created() {
    this.$socket.connect();
  },
  methods: {
    send() {
      this.$socket.emit("chat message", this.message);
      this.message = "";
    },
  },
};
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
$borderColor: #e6ecf0;
$accountColor: #657786;
.online-users {
  font-weight: 700;
}
.user-top {
  border: $borderColor 1px solid;
  border-bottom: none;
  font-size: 1rem;
  padding: 0.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
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