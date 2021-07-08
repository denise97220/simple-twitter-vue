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
        <div class="reply-detail">
          <div class="reply">
            <div class="reply-icon-wrapper" @click.stop.prevent="showModal">
              <img class="reply-icon" src="reply.svg" alt="">
            </div>
            <div class="reply-count">12</div>
          </div>
          <div class="like">
            <div class="heart-icon-wrapper">
              <img class="heart-icon" src="heart.svg" alt="">
            </div>
            <div class="like-count">12</div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
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

    <div class="cover" 
      v-show="isShowModal" 
      @click.stop.prevent="closeModal"
    ></div>


  </div>
</template>

<script>
export default {
  name: "UserTweet",
  props: {
    userId: {
      type: Number,
      required: true
    }
  },
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
      isShowModal: false,
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
@import "./src/assets/scss/replyModal.scss";

.container {
  border-right: solid 1px #E6ECF0;
  border-left: solid 1px #E6ECF0;
}

.cover {
  top: -100%;
  left: -100%;
}

.router-link-active {
  color: #1C1C1C;
}
  
.reply-icon-wrapper:hover, .heart-icon-wrapper:hover {
  background-color: $replyIconHover;
  cursor: pointer;
}

.heart-icon-wrapper:hover {
  background-color: $heartIconHover;
}

.reply-icon-wrapper, .heart-icon-wrapper {
  width: 30px;
  height: 30px;
  position: relative;
  border-radius: 50%;
  transition: background-color 0.3s ease-in;
  .reply-icon, .heart-icon {
    position: absolute;
    left: 5px;
    top: 5px;
  }
}


</style>