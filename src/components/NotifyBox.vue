<template>
  <div class="notify-box-container">
    <div class="title">通知</div>
    <div class="single-notify">
      <div class="avatar">
        <img src="" alt="">
      </div>
      <div class="notify-title">Google 有新的推文通知</div>
      <div class="notify-content">哈囉哈囉哈囉哈囉哈囉哈囉哈囉哈囉哈囉哈囉哈囉</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotifyBox",

}
</script>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.notify-box-container {
  height: 100%;
  border-left: solid 1px #E6ECF0;
  border-right: solid 1px #E6ECF0;
}

</style>