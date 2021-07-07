<template>
  <div class="container">
    
    <div class="tweet-reply" v-for="reply in replies" :key="reply.id">
      <div class="reply-avatar">
        <router-link to="">
          <img class="avatar-img" :src="reply.image" alt="">
        </router-link>
      </div>
      <div class="reply-user-info">
        <div class="reply-user">
          <router-link class="reply-user-link" to="">
            <h3 class="reply-user-name">{{ reply.name }}</h3>
            <h3 class="reply-user-account">{{ reply.account }}．</h3>
          </router-link>
          2小時 
        </div>
        <div class="tweet-content">
          <h3 class="content">
            なんやて工藤！！！
            それはてぇへんだFlushed faceFlushed faceFlushed face
            さ、さ、再起動...とか...
          </h3>
        </div>
        <div class="reply-info">
          <div class="reply">
            <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.846.242L8.698.232h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828a.85.85 0 00.12.403.744.744 0 001.034.229c.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V14.67a.75.75 0 00-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z" fill="#657786"/></svg>
            <div class="reply-count">12</div>
          </div>
          <div class="like">
            <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.8 19.638h-.014C8.203 19.59.75 12.856.75 6.478.75 3.414 3.275.724 6.153.724c2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H10.8v.002zM6.154 2.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965h-.001z" fill="#657786"/></svg>
            <div class="like-count">12</div>
          </div>
        </div>
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
@import "./src/assets/scss/main.scss";

.container {
  border-right: solid 1px #E6ECF0;
  border-left: solid 1px #E6ECF0;
}

.router-link-active {
  color: #1C1C1C;
}

.tweet-reply {
  display: flex;
  padding: 15px;
  border-top: solid 1px #E6ECF0;
  .reply-avatar {
    .avatar-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .reply-user-info {
    margin-left: 10px;
    line-height: 22px;
    .author-name {
      color: $mainColor;
    }
  }
  .reply-user, .tweet-author {
    display: flex;
    .reply-user-link {
      display: flex;
    }
    .reply-user-account, .author-name {
      margin-left: 5px;
    }
  }
  .tweet-content {
    margin-top: 4px;
  }
  .reply-user-account, .reply-text {
    color: #657786;
  }
  .reply-info, .reply, .like {
    display: flex;
    align-items: center;
  }
  .reply-info {
    margin-top: 12px;
    padding-right: 10px;
  }
  .like {
    margin-left: 50px;
  }
  .reply-count, .like-count {
    margin-left: 5px;
    font-weight: 500;
  }
}
  
</style>