<template>
  <h1>私人聊天室</h1>
</template>

<script>
export default {
  name: "ChatPrivate",
  sockets: {
    connect() {
      console.log("socket connected");
    },
    disconnect() {
      console.log("socket disconnected");
    },
    eventA(msg) {
      console.log(msg)
    }
  },
}
</script>