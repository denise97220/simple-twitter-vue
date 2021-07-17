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
        哈囉哈囉哈囉哈囉哈囉哈囉哈囉哈囉哈囉哈囉哈囉
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
    border: 1px solid red;

    .avatar > img {
      width: 50px;
      height: 50px;
    }
  }
}
</style>