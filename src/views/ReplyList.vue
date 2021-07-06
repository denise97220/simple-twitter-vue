<template>
  <div class="relpy-list-container">
    <div class="navbar">
      <Navbar/>
    </div>
    <div class="reply-list">
      <UserTweet />
    </div>
    <div class="related-users">
      <RelatedUsers />
    </div>
  </div>
</template>

<script>
import Navbar from './../components/Navbar.vue'
import RelatedUsers from './../components/RelatedUsers.vue'
import UserTweet from './../components/UserTweet.vue'

export default {
  name: 'ReplyList',
  components: {
    Navbar,
    RelatedUsers,
    UserTweet
  },
  data () {
    return {
    } 
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.relpy-list-container {
  display: grid;
  grid-template-columns: 0.6fr 600px 1fr;
  grid-gap: 30px;

  .navbar {
    grid-column: 1 / 2;
  }
  .relpy-list {
    grid-column: 2 / 3;
  }
  .related-users {
    grid-column: 3 / 4;
  }
}
</style>