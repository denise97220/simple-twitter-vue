<template>
<div class="container">
  <div class="text">
    <p>404</p>
    <p>404</p>
  </div>
  <div class="text">
    <p>404</p>
    <p>404</p>
  </div>
  <div class="text">
    <p>404</p>
    <p>404</p>
  </div>
  <div class="text">
    <p>404</p>
    <p>404</p>
  </div>
  <div class="text">
    <p>404</p>
    <p>404</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import "./src/assets/scss/main.scss";

.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.text {
  background-color: $mainColor;
  color: white;
  font-size: 50px;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
}

.text:nth-child(odd) {
  transform: skew(60deg, -30deg);
}

.text:nth-child(even) {
  transform: skew(0deg, -30deg) scaleY(1.5);
}

.text:nth-child(1) {
  left: -50px;
}

.text:nth-child(2) {
  left: -15px;
  top: 10px;
}

.text:nth-child(3) {
  left: 20px;
  top: 18px;
}

.text:nth-child(4) {
  left: 55px;
  top: 28px;
}

.text:nth-child(5) {
  left: 90px;
  top: 37px;
}

p {
  animation: rolling 1s linear infinite;
}

@keyframes rolling {
  100% {
    transform: translate(0, -40px);
  }
}
</style>