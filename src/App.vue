<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./src/assets/scss/main.scss";

.cover {
  width: 600%;
  height: 300%;
  background-color: #0b0b0b;
  opacity: 0.3;
  position: absolute;
  z-index: 10;
}

.main-btn {
  color: #FFFFFF;
  background-color: $mainColor;
  cursor: pointer;
  border: none;
  font-style: normal;
  &:hover {
    background-color: $mainColorHover;
    transition: background-color 0.3s ease-out;
  }
}

</style>

<script>
export default {
  
}
</script>


