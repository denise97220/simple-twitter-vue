<template>
  <div class="container">
    <router-link to="/user/other/1/tweet">
      <div class="list tweet">
        <h2 class="list-title tweet-title">推文</h2>
      </div>
    </router-link>

    <router-link :to="{ name: 'user-other-reply', params: { id: 1 } }">
      <div class="list reply">
        <h2 class="list-title reply-title">推文與回覆</h2>
      </div>
    </router-link>

    <router-link to="/user/other/1/like">
      <div class="list like">
        <h2 class="list-title like-title">喜歡的內容</h2>
      </div>
    </router-link>
  </div>
</template>