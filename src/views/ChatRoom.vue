<template>
  <div class="rwd-container">
    <div class="container">
      <div class="navbar">
        <Navbar />
      </div>
      <div class="chatroom">
        <ChatPublic />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar.vue";
import ChatPublic from "./../components/ChatPublic.vue";

export default {
  name: "ChatRoom",
  components: {
    Navbar,
    ChatPublic,
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.container {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 40px;
  .navbar {
    grid-column: 1 / 2;
  }
  .chatroom {
    grid-column: 2 / 3;
    width: 100%;
  }
}
</style>
