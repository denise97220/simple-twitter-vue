<template>
  <div class="container">
    
    <div class="tweet-reply" v-for="reply in replies" :key="reply.TweetId">
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
            <h3 class="author-name">{{ reply.author }}</h3>
          </router-link>
        </div>
        <div class="reply-content">{{ reply.content }}</div>
      </div>
    </div>

  </div>
</template>

<script>
import userAPI from './../apis/user'
import { Fire } from './../utils/helper'
import { mapState } from 'vuex'

export default {
  name: "UserTweet",
  data() {
    return {
      replies: []
    }
  },
  methods: {
    async fetchReplies(userId) {
      try {

        const { data } = await userAPI.getSingleUserReplies({ userId })
        this.replies = data
        console.log(data)
      } catch(error) {
        console.log(error)
        Fire.fire({
          icon: "warning",
          title: "無法取得回覆，請稍後再試"
        })
      }
    }
  },
  computed: {
    ...mapState(["currentUser"])
  },
  created() {
    this.fetchReplies(this.currentUser.id)
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/reply.scss";
  
</style>