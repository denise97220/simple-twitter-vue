<template>
  <div class="container">
    <div class="cover" 
      v-show="isShowModal" 
      @click.stop.prevent="closeModal"
    ></div>
    <header>
      <div class="goback-btn" @click.stop.prevent="goback">
        <svg width="17" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6H3.414l4.293-4.293A1 1 0 006.293.293l-6 6a1 1 0 000 1.414l6 6a.996.996 0 001.414 0 1 1 0 000-1.414L3.414 8H16a1 1 0 100-2z" fill="#000"/></svg>
      </div>
      <div class="header-content">推文</div>
    </header>
    <!-- tweet -->
    <div class="tweet">
      <div class="author-info">
        <router-link class="author-info-link" to="">
          <div class="avatar">
            <img class="avatar-img" src="https://pbs.twimg.com/profile_images/1378514134250176520/btBc4kpa_400x400.jpg" alt="">
          </div>
          <div class="name-info">
            <div class="name">白雪巴</div>
            <div class="account">@Tomoe_Shirayuki</div>
          </div>
        </router-link>
      </div>
      <div class="tweet-content">High-heeled shoe今夜２１：００～
        【We Were Here Together】あれデジャヴ！？協力謎解きで脱出セヨ【#女王と会長/にじさんじ】 https://youtu.be/pfC_sFKxJL4 
        こちら白雪。
        残業が確定してニコニコしております。
        でも今日は来栖の夏芽ちゃんと謎解きコラボなのでそれを楽しみにがんばるSmiling face with 3 heartsHeart exclamationHeart exclamationよろしくねSparkles
      </div>
      <div class="time">上午 10:00 2021年7月6日</div>
      <div class="reply-info">223 回覆&nbsp;&nbsp;1431 喜歡次數</div>
    </div>

    <!-- function btn -->
    <div class="function-btn">
      <div class="reply-btn" @click.stop.prevent="showModal">
        <img src="replyBig.svg" alt="">
      </div>
      <div class="like-btn">
        <img src="heartBig.svg" alt="">
      </div>
    </div>

    <!-- tweet reply -->
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

    <!-- reply modal -->
    <div class="reply-modal" v-show="isShowModal">
      <div class="modal-container">
        <div class="modal-header">
          <div 
           class="close-btn" 
            @click.stop.prevent="closeModal"
          >
            <img src="cross.svg" alt="">
          </div>
        </div>
        <div class="replied-tweet">
          <div class="reply-avatar">
            <img class="avatar-img" src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/37765399_1877802215574356_4881372551156072448_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=K7VbACTwazkAX9tTTUt&_nc_ht=scontent.ftpe13-1.fna&oh=b620abf3c4829034c1431ec67a5313fb&oe=60EC9077" alt="">
            <div class="line"></div>
          </div>
          <div class="replied-content">
             <div class="reply-user-info">
              <div class="reply-user">
                <h3 class="reply-user-name">林琛育</h3>
                <h3 class="reply-user-account">@jane．</h3>
                2小時 
              </div>
              <div class="tweet-content">
                <h3 class="content">
                  なんやて工藤！！！
                  それはてぇへんだFlushed faceFlushed faceFlushed face
                  さ、さ、再起動...とか...
                </h3>
              </div>
            </div>
            <div class="replied-author">
              <h3 class="reply-text">回覆給&nbsp;</h3>
              <h3 class="replid-author-name">@jane</h3>
            </div>
          </div>
         
        </div>
        <div class="modal-content">
          <div class="avatar">
            <img class="avatar-img" src="https://scontent.ftpe13-1.fna.fbcdn.net/v/t1.6435-9/71811070_3308025969215205_7462679326622744576_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eplQbZCeODYAX9Ft4O1&_nc_ht=scontent.ftpe13-1.fna&oh=6fba4d9139406318664165edec73f8c7&oe=60E82959" alt="">
          </div>
          <textarea
            class="twitter-text"
            placeholder="推你的回覆"
            maxlength="200"
          ></textarea>
        </div>
        <button class="main-btn post-btn">
          回覆
        </button>
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
      ],
      isShowModal: false
    }
  },
  methods: {
    showModal() {
      this.isShowModal = true
    },
    closeModal() {
      this.isShowModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
@import "./src/assets/scss/reply.scss";
@import "./src/assets/scss/replyModal.scss";

.cover {
  top: -100%;
  left: -100%;
}

.router-link-active {
  color: #1C1C1C;
}

.container {
  border: 1px solid #E6ECF0;
}

header {
  display: flex;
  height: 15px;
  padding: 20px;
  border-bottom: 1px solid #E6ECF0;
  .header-content {
    margin-left: 43px;
  }
}

.tweet {
  height: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  .author-info-link {
    display: flex;
    .name-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-size: 15px;
      line-height: 22px;
      margin-left: 10px;
    }
    .avatar-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .tweet-content {
    font-size: 23px;
    line-height: 34px;
    margin-top: 18px;
  }
  .time {
    margin-top: 15px;
  }
  .reply-info {
    display: flex;
    width: 99%;
    height: 68px;
    border-top: solid 1px #E6ECF0;
    border-bottom: solid 1px #E6ECF0;
    margin-top: 15px;
    line-height: 68px;
    font-size: 19px;
  }
}

.function-btn {
  display: flex;
  align-items: center;
  padding: 15px;
  padding-top: 8px;
  .like-btn {
    margin-left: 155px;
  }
}
  
</style>