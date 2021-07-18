<template>
  <div class="rwd-container">
    <div class="notify-container">
      <div class="navbar">
        <Navbar />
      </div>
      <div class="notify-box scrollbar">
        <NotifyBox />
      </div>
      <div class="related-users">
        <RelatedUsers />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NotifyBox from "../components/NotifyBox.vue";
import RelatedUsers from "../components/RelatedUsers.vue";

export default {
  name: "Notify",
  components: {
    Navbar,
    RelatedUsers,
    NotifyBox
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.notify-container {
  display: grid;
  grid-template-columns: 0.9fr 600px 1fr;
  grid-gap: 30px;

  .navbar {
    grid-column: 1 / 2;
  }
  .notify-box {
    grid-column: 2 / 3;
    width: 100%;
  }
  .related-users {
    grid-column: 3 / 4;
  }
}

.notify-box {
  height: calc(100vh);
  overflow-y: scroll;
}

.scrollbar {
  padding-left: 1px;
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(225, 222, 222, 0.1);
  }
}

@media screen and (max-width: 1359px) {
  .notify-container {
    grid-template-columns: 1fr 2fr 0.2fr;

    .navbar {
      grid-column: 1 / 2;
    }
    .notify-box {
      grid-column: 2 / 3;
    }
    .related-users {
      display: none;
    }
  }
}
</style>