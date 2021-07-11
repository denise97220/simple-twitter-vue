<template>
  <div class="container">
    <Spinner v-if="isLoading" />
    <div class="tweet-reply" v-else v-for="reply in replies" :key="reply.id">
      <div class="reply-avatar">
        <router-link to="">
          <img class="avatar-img" :src="reply.User.avatar" alt="">
        </router-link>
      </div>
      <div class="reply-info">
        <div class="reply-user">
          <router-link class="reply-user-link" to="">
            <h3 class="reply-user-name">{{ reply.User.name }}</h3>
            <h3 class="reply-user-account">{{ reply.User.account }}．</h3>
          </router-link>
          2小時
        </div>
        <div class="tweet-author">
          <h3 class="reply-text">回覆</h3>
          <router-link to="">
            <h3 class="author-name" v-if="reply.Tweet">{{ reply.Tweet.User.account }}</h3>
          </router-link>
        </div>
        <div class="reply-content">{{ reply.comment }}</div>
      </div>
    </div>

  </div>
</template>

<script>
import userAPI from "./../apis/user"
import { Fire } from "./../utils/helper"
import { mapState } from "vuex"
import Spinner from "./../components/Spinner.vue"

export default {
  name: "UserTweet",
  components: {
    Spinner
  },
  data() {
    return {
      replies: [],
      isLoading: true
    }
  },
  methods: {
    async fetchReplies(userId) {
      try {
        const { data } = await userAPI.getSingleUserReplies({ userId })
        this.replies = data
        this.isLoading = false
      } catch(error) {
        console.log(error)
        Fire.fire({
          icon: "warning",
          title: "無法取得回覆，請稍後再試"
        })
        this.isLoading = false
      }
    }
  },
  computed: {
    ...mapState(["currentUser"])
  },
  created() {
    if (this.$route.name === "user-self-reply") {
      this.fetchReplies(this.currentUser.id)
    } else if (this.$route.name === "user-other-reply") {
      this.fetchReplies(this.$route.params.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/reply.scss";
  
</style>