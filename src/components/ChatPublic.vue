<template>
  <div class="chatroom-container">
    <div class="dialog-box">
      <h1>聊天室</h1>
    </div>
    <div class="online-users">
      <h1>上線人員</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatPublic"
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

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

</style>