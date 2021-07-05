<template>
  <div class="relpy-list-container">
    <div class="navbar">
      <Navbar/>
    </div>
    <div class="reply-list">

    </div>
    <div class="related-users">
      <RelatedUsers />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.relpy-list-container {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;

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

<script>
import Navbar from './../components/Navbar.vue'
import RelatedUsers from './../components/RelatedUsers.vue'

export default {
  name: 'ReplyList',
  components: {
    Navbar,
    RelatedUsers
  },
  data () {
    return {
    } 
  },
}
</script>