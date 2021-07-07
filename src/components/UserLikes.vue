<template>
  <div class="container">
    
    <div class="tweet-reply" v-for="reply in replies" :key="reply.id">
      <div class="reply-avatar">
        <router-link to="">
          <img class="avatar-img" :src="reply.image" alt="">
        </router-link>
      </div>
      <div class="reply-info">
        <div class="reply-user">
          <router-link class="reply-user-link" to="">
            <h3 class="reply-user-name">{{ reply.name }}</h3>
            <h3 class="reply-user-account">{{ reply.account }}．</h3>
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
export default {
  name: "UserTweet",
  data() {
    return {
      replies: [{
          name: "許丹",
          id: 1,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          content: "3Dおめでとうございます！！！！",
          author: "@Tomoe_Shirayuki"
        },
        {
          name: "許丹",
          id: 2,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          content: "3Dおめでとうございます！！！！",
          author: "@Tomoe_Shirayuki"
        },
        {
          name: "許丹",
          id: 3,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          content: "3Dおめでとうございます！！！！",
          author: "@Tomoe_Shirayuki"
        },
        {
          name: "許丹",
          id: 4,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          content: "3Dおめでとうございます！！！！",
          author: "@Tomoe_Shirayuki"
        },
        {
          name: "許丹",
          id: 5,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          content: "3Dおめでとうございます！！！！",
          author: "@Tomoe_Shirayuki"
        },
        {
          name: "許丹",
          id: 6,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          content: "3Dおめでとうございます！！！！",
          author: "@Tomoe_Shirayuki"
        },
        {
          name: "許丹",
          id: 7,
          account: "@dandan",
          image: "https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959 ",
          content: "3Dおめでとうございます！！！！",
          author: "@Tomoe_Shirayuki"
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/reply.scss";
  
</style>