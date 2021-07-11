<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./src/assets/scss/main.scss";
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);

body {
  font-family: "Noto Sans TC", "微軟正黑體", sans-serif;
  font-style: normal;
}

.rwd-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover {
  width: 600%;
  height: 200%;
  background-color: #0b0b0b;
  opacity: 0.3;
  position: absolute;
  left: -100%;
  z-index: 10;
}

.main-btn {
  color: #ffffff;
  background-color: $mainColor;
  cursor: pointer;
  border: none;
  font-style: normal;
  &:hover {
    background-color: $mainColorHover;
    transition: background-color 0.3s ease-out;
  }
}

.disabled-btn {
  background-color: $mainColorDisabled;
  &:hover {
    background-color: $mainColorDisabled;
  }
}
</style>

<script>
export default {};
</script>


