<template>
  <div class="container">
    <header>
      <div class="goback-btn">
        <svg width="17" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 6H3.414l4.293-4.293A1 1 0 006.293.293l-6 6a1 1 0 000 1.414l6 6a.996.996 0 001.414 0 1 1 0 000-1.414L3.414 8H16a1 1 0 100-2z" fill="#000"/></svg>
      </div>
      <div class="header-content">推文</div>
    </header>
    <!-- tweet -->
    <div class="tweet">
      <div class="author-info">
        <div class="avatar">
          <img class="avatar-img" src="https://pbs.twimg.com/profile_images/1378514134250176520/btBc4kpa_400x400.jpg" alt="">
        </div>
        <div class="name-info">
          <div class="name">白雪巴</div>
          <div class="account">@Tomoe_Shirayuki</div>
        </div>
      </div>
      <div class="tweet-content">High-heeled shoe今夜２１：００～
        【We Were Here Together】あれデジャヴ！？協力謎解きで脱出セヨ【#女王と会長/にじさんじ】 https://youtu.be/pfC_sFKxJL4 
        こちら白雪。
        残業が確定してニコニコしております。
        でも今日は来栖の夏芽ちゃんと謎解きコラボなのでそれを楽しみにがんばるSmiling face with 3 heartsHeart exclamationHeart exclamationよろしくねSparkles
      </div>
      <div class="time">上午 10:00 2021年7月6日</div>
      <div class="reply-info">223 回覆  1431 喜歡次數</div>
    </div>

    <!-- function btn -->
    <div class="function-btn">
      <div class="reply-btn">
        <svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.558.803L10.373.79h-.003C4.903.79.62 5.074.62 10.542c0 5.123 3.983 9.008 9.331 9.213v4.785c0 .135.055.358.15.504a.93.93 0 001.293.286c.33-.21 8.091-5.175 10.11-6.882 2.377-2.013 3.8-4.963 3.804-7.89v-.022C25.3 5.078 21.02.803 15.558.801v.002zm4.733 16.214c-1.417 1.2-6.077 4.257-8.465 5.804v-3.984a.937.937 0 00-.937-.937h-.495c-4.575 0-7.898-3.095-7.898-7.357 0-4.418 3.46-7.878 7.875-7.878l5.184.013h.003c4.415 0 7.875 3.457 7.877 7.87-.004 2.387-1.177 4.804-3.142 6.47h-.002z" fill="#657786"/></svg>
      </div>
      <div class="like-btn">
        <svg width="26" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 24.047h-.018C9.755 23.987.438 15.57.438 7.597.438 3.767 3.594.405 7.19.405 10.054.405 11.98 2.38 13 3.817 14.016 2.382 15.94.405 18.805.405c3.6 0 6.755 3.362 6.755 7.194 0 7.97-9.317 16.387-12.546 16.446H13v.002zM7.192 2.281c-2.6 0-4.878 2.485-4.878 5.319 0 7.175 8.792 14.495 10.687 14.572C14.9 22.095 23.69 14.776 23.69 7.6c0-2.834-2.279-5.319-4.879-5.319-3.16 0-4.925 3.67-4.94 3.706-.287.703-1.445.703-1.734 0-.017-.037-1.781-3.706-4.942-3.706h-.002z" fill="#657786"/></svg>
      </div>
    </div>

    <!-- tweet reply -->
    <div class="tweet-reply">

    </div>


  </div>
</template>

<script>
export default {
  name: "UserTweet"
}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.container {
  border: 1px solid #E6ECF0;
}

header {
  display: flex;
  height: 15px;
  padding: 20px;
  border-bottom: 1px solid #E6ECF0;
}

.tweet {
  height: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  .author-info {
    display: flex;
    .name-info {
      display: flex;
      flex-direction: column;
      font-size: 15px;
      line-height: 22px;
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
    width: 98%;
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
  padding: 16px;
  .like-btn {
    margin-left: 155px;
  }
}
  
</style>