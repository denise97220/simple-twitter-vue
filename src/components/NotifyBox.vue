<template>
  <div class="notify-box-container">
    <div class="title">通知</div>
    <div class="single-notify">
      <div class="avatar">
        <img
          src="https://image6.thenewslens.com/2020/5/2iw6hkryl5nirhpbq2roh84xnzthf9.jpg?auto=compress&h=450&q=80&w=750"
          alt=""
        />
      </div>
      <div class="notify-title">Google 有新的推文通知</div>
      <div class="notify-content">
        以我們對社群媒體的瞭解，訂閱通知範疇可以無限延伸，可訂閱通知的範圍愈大，你就愈能引發使用者的社群媒體焦慮感！不過，以【Simple
        Twitter】專案來說，做到這裡就夠了。
        以上！希望你透過這一系列挑戰題，完成對 web socket 與相關技術的密集攻略！
      </div>
    </div>
    <div class="single-notify">
      <div class="avatar">
        <img
          src="https://image6.thenewslens.com/2020/5/2iw6hkryl5nirhpbq2roh84xnzthf9.jpg?auto=compress&h=450&q=80&w=750"
          alt=""
        />
      </div>
      <div class="notify-title">Google 有新的推文通知</div>
      <div class="notify-content">
        以我們對社群媒體的瞭解，訂閱通知範疇可以無限延伸，可訂閱通知的範圍愈大，你就愈能引發使用者的社群媒體焦慮感！不過，以【Simple
        Twitter】專案來說，做到這裡就夠了。
        以上！希望你透過這一系列挑戰題，完成對 web socket 與相關技術的密集攻略！
      </div>
    </div>
    <div class="single-notify">
      <div class="avatar">
        <img
          src="https://image6.thenewslens.com/2020/5/2iw6hkryl5nirhpbq2roh84xnzthf9.jpg?auto=compress&h=450&q=80&w=750"
          alt=""
        />
      </div>
      <div class="notify-title">Google 有新的推文通知</div>
      <div class="notify-content">
        以我們對社群媒體的瞭解，訂閱通知範疇可以無限延伸，可訂閱通知的範圍愈大，你就愈能引發使用者的社群媒體焦慮感！不過，以【Simple
        Twitter】專案來說，做到這裡就夠了。
        以上！希望你透過這一系列挑戰題，完成對 web socket 與相關技術的密集攻略！
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotifyBox",
};
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";
$borderColor: #e6ecf0;
$accountColor: #657786;

.notify-box-container {
  height: 100%;
  border-left: solid 1px #e6ecf0;
  border-right: solid 1px #e6ecf0;

  .title {
    border: $borderColor 1px solid;
    border-bottom: none;
    font-size: 1rem;
    padding: 0.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-weight: 700;
  }

  .single-notify {
    border: 1px solid $borderColor;
    padding: 1rem;
    .avatar > img {
      width: 50px;
      height: 50px;
      border-radius: 100px;
      border: 1px solid $borderColor;
    }
    .notify-title {
      font-weight: 700;
      font-size: 1rem;
      margin-top: 0.8rem;
    }
    .notify-content {
      color: #657786;
      margin-top: 1rem;
      padding-right: 5rem;
      letter-spacing: 0.1rem;
    }
  }
}
</style>